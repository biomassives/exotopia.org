
        function loadScript(url, callback) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            script.onload = callback;
            document.head.appendChild(script);
        }

        loadScript('https://cdn.jsdelivr.net/npm/three@0.125.2/build/three.min.js', function() {
            loadScript('https://cdn.jsdelivr.net/npm/three@0.125.2/examples/js/controls/OrbitControls.js', function() {
                loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js', function() {
                    loadScript('https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js', initApp);
                });
            });
        });

        function initApp() {
            let scene, camera, renderer, controls;
            let raycaster, INTERSECTED;
            const regions = [];

            const fileNames = ['quadrant_1.json', 'quadrant_2.json', 'quadrant_3.json', 'quadrant_4.json', 'quadrant_5.json', 'quadrant_6.json', 'quadrant_7.json', 'quadrant_8.json'];

            init();
            loadExoplanetData(fileNames);
            animate();
            setupHammerJS();
            setupMouseEvents();

            function init() {
                const container = document.getElementById('container');
                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
                camera.position.z = 500;

                renderer = new THREE.WebGLRenderer({ antialias: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                container.appendChild(renderer.domElement);

                controls = new THREE.OrbitControls(camera, renderer.domElement);
                controls.enableDamping = true;
                controls.dampingFactor = 0.25;
                controls.rotateSpeed = 0.5;
                controls.zoomSpeed = 1.2;
                controls.panSpeed = 0.8;
                controls.enableZoom = true;
                controls.maxDistance = 1000;
                controls.minDistance = 10;

                raycaster = new THREE.Raycaster();
                window.addEventListener('resize', onWindowResize, false);

                // Add lighting
                const ambientLight = new THREE.AmbientLight(0x404040);
                scene.add(ambientLight);

                const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
                directionalLight.position.set(1, 1, 1);
                scene.add(directionalLight);
            }

            function loadExoplanetData(fileNames) {
                let combinedData = [];

                function loadFile(index) {
                    if (index < fileNames.length) {
                        fetch(fileNames[index])
                            .then(response => response.json())
                            .then(data => {
                                combinedData = combinedData.concat(data);
                                loadFile(index + 1);
                            })
                            .catch(err => console.error('Failed to load data:', err));
                    } else {
                        createExoplanetVisuals(combinedData);
                    }
                }

                loadFile(0);
            }

            function createExoplanetVisuals(data) {
                const maxRadius = 1000;
                const minRadius = 100;

                data.forEach(planet => {
                    if (planet.hasOwnProperty('pl_name') && planet.hasOwnProperty('ra') && planet.hasOwnProperty('dec')) {
                        const name = planet.pl_name;
                        let temperature = planet.pl_eqt !== "" ? parseFloat(planet.pl_eqt) : 'N/A';
                        let radius = planet.pl_rade !== "" ? parseFloat(planet.pl_rade) : 1;

                        // Scale radius for visualization
                        const scaleFactor = 2;
                        const visualRadius = Math.max(0.5, Math.min(5, radius * scaleFactor));

                        const geometry = new THREE.SphereGeometry(visualRadius, 32, 32);
                        const color = new THREE.Color().setHSL(Math.random(), 1, 0.5);
                        const material = new THREE.MeshStandardMaterial({ color, emissive: color });
                        const exoplanet = new THREE.Mesh(geometry, material);

                        // Calculate position using RA and Dec
                        const ra = parseFloat(planet.ra);
                        const dec = parseFloat(planet.dec);
                        const phi = THREE.MathUtils.degToRad(90 - dec);
                        const theta = THREE.MathUtils.degToRad(ra);

                        // Use logarithmic scale for distance
                        const distance = minRadius + (maxRadius - minRadius) * Math.log(1 + Math.random()) / Math.log(2);

                        exoplanet.position.set(
                            distance * Math.sin(phi) * Math.cos(theta),
                            distance * Math.cos(phi),
                            distance * Math.sin(phi) * Math.sin(theta)
                        );

                        exoplanet.userData = {
                            description: `Name: ${name}, Temp: ${temperature}K, Radius: ${radius} Earth radii`
                        };
                        exoplanet.originalColor = color.clone();
                        scene.add(exoplanet);
                        regions.push(exoplanet);
                    }
                });

                if (regions.length === 0) {
                    console.warn('No exoplanets with valid RA and Dec were found in the data.');
                } else {
                    console.log(`Created ${regions.length} exoplanets.`);
                }
            }

            let currentIntersect;

            function onMouseMove(event) {
                event.preventDefault();
                const mouse = new THREE.Vector2(
                    (event.clientX / window.innerWidth) * 2 - 1,
                    -(event.clientY / window.innerHeight) * 2 + 1
                );

                raycaster.setFromCamera(mouse, camera);
                const intersects = raycaster.intersectObjects(regions);

                if (intersects.length > 0) {
                    if (currentIntersect !== intersects[0].object) {
                        restoreOriginalColor(currentIntersect);
                        currentIntersect = intersects[0].object;
                        highlightObject(currentIntersect);
                    }
                    document.getElementById('infobox').style.display = 'block';
                    document.getElementById('infobox').style.left = `${event.clientX + 5}px`;
                    document.getElementById('infobox').style.top = `${event.clientY + 5}px`;
                    document.getElementById('infobox').innerHTML = currentIntersect.userData.description || 'No additional information';
                } else {
                    restoreOriginalColor(currentIntersect);
                    currentIntersect = null;
                    document.getElementById('infobox').style.display = 'none';
                }
            }

            function onClick(event) {
                event.preventDefault();
                const mouse = new THREE.Vector2(
                    (event.clientX / window.innerWidth) * 2 - 1,
                    -(event.clientY / window.innerHeight) * 2 + 1
                );

                raycaster.setFromCamera(mouse, camera);
                const intersects = raycaster.intersectObjects(regions);

                if (intersects.length > 0) {
                    const intersect = intersects[0];
                    zoomToObject(intersect.object);
                }
            }

            function zoomToObject(object) {
                const objectSize = object.geometry.parameters.radius;
                const targetDistance = objectSize * 10; // Adjust this multiplier as needed
                const targetPosition = object.position.clone();

                gsap.to(camera.position, {
                    duration: 1.5,
                    x: targetPosition.x,
                    y: targetPosition.y,
                    z: targetPosition.z + targetDistance,
                    onUpdate: function() {
                        camera.lookAt(targetPosition);
                    }
                });

                gsap.to(controls.target, {
                    duration: 1.5,
                    x: targetPosition.x,
                    y: targetPosition.y,
                    z: targetPosition.z
                });
            }

            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }

            function animate() {
                requestAnimationFrame(animate);
                controls.update();
                renderer.render(scene, camera);
            }

            function highlightObject(object) {
                if (object && object.material.emissive) {
                    object.currentHex = object.material.emissive.getHex();
                    object.material.emissive.setHex(0xff0000); // Turn red on mouseover
                }
            }

            function restoreOriginalColor(object) {
                if (object && object.material.emissive) {
                    object.material.emissive.setHex(object.currentHex);
                }
            }

            function setupHammerJS() {
                const hammer = new Hammer(document.getElementById('container'));
                hammer.on('tap', function(event) {
                    const mouse = new THREE.Vector2(
                        (event.center.x / window.innerWidth) * 2 - 1,
                        -(event.center.y / window.innerHeight) * 2 + 1
                    );

                    raycaster.setFromCamera(mouse, camera);
                    const intersects = raycaster.intersectObjects(regions);

                    if (intersects.length > 0) {
                        zoomToObject(intersects[0].object);
                    }
                });
            }

            function setupMouseEvents() {
                document.addEventListener('mousemove', onMouseMove, false);
                document.addEventListener('click', onClick, false);
            }
        }
