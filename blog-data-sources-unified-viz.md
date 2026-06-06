# The Cartography Problem: Data Sources for a Navigable Universe

## What we have, what we're missing, and which catalogs would close the gaps from the cosmic web to an exomoon colony door

**SCD Hub · Exotopia.org · Working draft · GPL v3**
*Internal document — intended for release; review data claims before publishing*

---

## The goal we are building toward

The branch we are calling the unified visualisation entry point has one stated ambition: a single entry point from which a user can navigate — without dead ends, without jumping out to a different UI, without the journey breaking — from the observable universe's large-scale structure all the way down to a settlement surface on an exomoon, an exoplanet, an object in orbit around a black hole, or a habitat planted at an intersectional node deep inside a great cosmic void.

That ambition is navigational, but it rests entirely on data. The rendering layer can be beautiful. The routing can be wired. But the thing that makes a journey *meaningful* — the thing that distinguishes this from a screensaver — is whether the numbers at each level of descent correspond to something real. Whether the X-ray temperature on the cluster card is from a published catalog. Whether the equilibrium temperature on the planet card is from a measured transmission spectrum. Whether the coordinates of a void interior settlement are in a space that has actually been mapped and named.

This post catalogs what we have, what we are missing at each level of the descent, and which external data sources would most directly close the gaps. It is also a proposal for what to incorporate next.

---

## Level 1 — The cosmic web

### What we have

**Takey2013 / XMM-Newton catalog** (`public/clusters-xray.json`) — 345 galaxy clusters, each with right ascension, declination, spectroscopic redshift, comoving distance in Mpc, and X-ray plasma temperature in keV. This is the backbone of the CosmicPage. Clusters are positioned in three-dimensional space using the redshift-to-comoving-distance conversion. X-ray temperature drives the colour rendering: hotter clusters (above 6 keV) appear in blue-white; cooler clusters are amber. Source credit is embedded: `NASA/HEASARC/Takey2013`.

**Named cosmic structures** (`src/data/cosmic-structures.ts`) — a curated handcrafted layer for the 14 most prominent clusters in the local universe, each with dark matter halo radius, virial mass, filament connections, brightest member galaxies, and black hole masses where known. Virgo, Coma, Perseus, Fornax, Centaurus, Hydra, Norma, Shapley, the Andromeda Group, and the Bullet Cluster among others. These are authoritative — positions from well-constrained distance moduli, BH masses from Event Horizon Telescope imaging or stellar dynamics studies, DM halo radii from X-ray hydrostatic mass estimates.

**Cosmic void shells** — Boötes, Sculptor, KBC, Eridanus, Caelum, and others, hardcoded with approximate radii and centre distances from published void surveys. The KBC Void (`r ≈ 300 Mpc`) is correctly treated as surrounding the Milky Way.

**Supercluster boundaries** — Laniakea, Perseus-Pisces, Coma-Great Wall, and Shapley, defined by member cluster lists, drawn as coloured label markers.

### What is thin

The 14 named clusters are well described. The remaining 331 X-ray clusters have only position, redshift, and temperature. No member galaxy data. No filament connections. No virial masses. No sub-structure. They are navigable but nearly empty.

The void shells are spherical approximations. Real voids are not spherical. They are irregular, multiply-connected, and bounded by sheets and filaments. The Boötes Void alone has a complex non-convex shape, and the boundary between adjacent voids — where two empty regions share a common wall — is physically interesting: the void-wall intersection is a sheet of galaxies, thinner than any cluster filament, and it is exactly the kind of structure where isolated settlements in unusual environments make sense.

### Potential new sources

**SDSS DR17 Void Catalog** (Mao et al. / Pan-STARRS VIDE outputs) — computational void-finding on the SDSS photometric survey. Provides void centre coordinates, effective radii, and ellipticity parameters. Would let us replace spherical void shells with properly shaped void bodies and populate void walls with real galaxy positions.

**Cosmic Web filament catalog — NEXUS+ or SpineWeb** — the 3D filament skeleton of the local universe, computed from density field reconstructions (Wiener filter on galaxy surveys). These are published as sets of filament segment endpoints in Mpc. Loading these would let us render actual filament spines — not just lines between clusters — and surface the true void-wall intersections. The intersection nodes (where two or more filament segments converge) are natural waypoint objects in their own right: denser than void interiors, less crowded than clusters, with unusually high fractions of edge-on disc galaxies.

**HyperLeda / NED member galaxy catalogs** — the NASA/IPAC Extragalactic Database and HyperLeda both provide queryable lists of member galaxies for named clusters, with morphological types, apparent magnitudes, and radial velocities. A Python query pipeline against the NED API for the top 100 clusters by X-ray luminosity would replace oracle-generated membership with catalog-derived membership for those clusters. The remaining 245 clusters would continue to use oracle generation, which is appropriate and honest.

**KiDS-1000 weak lensing convergence maps** — the Kilo Degree Survey's weak gravitational lensing maps provide dark matter density estimates across large sky areas. Integrating these as an optional overlay in CosmicPage would let users switch between the galaxy cluster view and a dark matter density view, making visible the halos and filaments that the baryonic tracers only partially reveal.

---

## Level 2 — Galaxy cluster interiors

### What we have

**Galaxy Oracle** (`public/galaxy-oracle/`) — 345 JSON files, one per X-ray cluster, each containing a procedurally generated population of member galaxies. The generator uses cluster X-ray luminosity and temperature to set member count, morphological mix (elliptical-dominated in hot rich clusters; more spiral-rich in cooler poor clusters), BCG position and mass, and substructure presence. Total: 26,225 generated galaxies. Generated 2026-05-24. The generation is seeded on cluster ID, making the output stable and referenceable.

**Named cluster bright galaxy lists** — M87, M86, M84, M49 in Virgo; NGC 4889, NGC 4874 in Coma; NGC 1275 in Perseus; NGC 1399 in Fornax; IC 4296 in Centaurus; etc. These are hardcoded in `cosmic-structures.ts` with accurate BH masses and black hole types (`ULSMBH`, `SMBH`, `AGN`).

### What is thin

Beyond the named clusters, the oracle galaxies are plausible but not real. No individual generated galaxy corresponds to an actual observed object. For clusters at high redshift, this is unavoidable — we do not have star-by-star or even galaxy-by-galaxy catalogs for clusters at `z > 0.1`. But for the well-observed nearby clusters, there are published member catalogs that could replace or supplement the oracle layer.

Black holes are listed as metadata fields (`bhMass`, `bhType`) on bright galaxy entries, but they are not yet first-class navigation destinations. There is no route to "enter" a black hole system — no scene that renders the accretion environment, the jet, the lensing halo, or the ergosphere geometry. The black holes exist in the data. They do not exist as places.

### Potential new sources

**SDSS photometric galaxy survey (SpecObj / PhotoObj tables)** — the SDSS spectroscopic galaxy catalog contains morphological classifications, photometric redshifts, and coordinate data for hundreds of thousands of galaxies in and around the clusters that fall within the SDSS footprint (roughly the northern sky). For clusters like Coma, Perseus, and Abell 2029, this would provide actual member galaxy populations — each with a real object ID, a real morphology code, and a real redshift.

**VCC — Virgo Cluster Catalog** — 2,096 member and candidate member galaxies in Virgo, with morphological types. Long established, freely available. Directly applicable to the Virgo cluster interior view as a replacement for oracle-generated membership.

**Event Horizon Telescope BH catalog** — the EHT has now resolved emission around M87*, Sgr A*, and has a growing list of targets. Separately, the Black Hole Accretion/Jet Source Catalog (BLJet, or equivalent AGN catalogs) provides sky positions, redshifts, and estimated masses for several thousand confirmed AGN. Representing even 50 of these as enterable objects — with scenes showing the Schwarzschild radius, the innermost stable circular orbit, and the photon sphere — would be scientifically unique in any public visualisation tool.

**Gravitational wave sky maps (GWTC-3)** — the LIGO/Virgo/KAGRA gravitational wave event catalog provides sky-area probability maps for each detected merger event. Neutron star mergers produce kilonovae: r-process element factories. These sky maps are publishable data products (HEALPix format). Rendering even the five most precisely localised events as glowing annular overlays in CosmicPage — marking where two neutron stars collided — would add a layer of time-domain astrophysics that no other visualisation currently includes.

---

## Level 3 — The Milky Way and star fields

### What we have

**HYG Database v3** — 119,614 stars, used in GalaxyPage for the Milky Way star field. Fields include Hipparcos/Gliese/Henry Draper identifiers, RA, Dec, distance in parsecs, spectral type, apparent magnitude, absolute magnitude, and colour index. This is the backbone of the galaxy view. All confirmed exoplanet hosts in our current dataset are cross-referenced against HYG positions.

**NASA Exoplanet Archive** (`public/exoapril2_2024.json`) — 35,896 confirmed and candidate exoplanet records. Fields: planet name, planetary radius in Earth radii, equilibrium temperature, host star RA/Dec, system distance. Most `sy_dist` values read `"N/A"` in this export — the distance field was not populated in this particular archive pull. The HYG cross-reference provides distances for confirmed hosts via stellar name matching.

**Frontier exoplanets** (`public/frontier-exoplanets.json`, `frontier-exoplanets-detail.json`) — file stubs, currently empty. These will hold the modelled/hypothesised Frontier tier world data.

**Candidate exoplanets** (`public/candidate-exoplanets.json`) — file stub, currently empty.

**Interstellar object tracking** (`events/cosmic/plotOumuamua_3i_atlas.py`) — a Python script tracking 1I/'Oumuamua, 2I/Borisov, and 3I/ATLAS trajectories. Currently offline; not connected to the in-app visualisation.

### What is thin

The `sy_dist` field being `"N/A"` for most records means planet distance from Earth is computed via the HYG cross-reference, which works only for named host stars already in HYG. Planets hosted by stars not in HYG lack confirmed 3D placement. The archive now routinely ships `sy_dist` in parsecs in its default column set — re-pulling the archive with the `sy_dist` column populated would resolve this for several thousand systems.

Exomoon candidates are not represented at all. There are currently two strong published candidates — Kepler-1625b-i and Kepler-1708b-i, both large sub-Neptune or Neptune-class objects in wide orbits around gas giants. These are scientifically contested but navigable: they have RA/Dec positions, host star distances, and estimated orbital parameters. A settlement on an exomoon is physically distinct from a planetary surface — tidal locking to the host planet, a sky dominated by the planet's disc, gravitational cycles driving geological activity. The settlement tier infrastructure exists for it. The data and the scene do not.

The interstellar objects are on known trajectories and represent an entirely different category of settlement: transient, non-repeating, requiring transit from a fixed point to an object in motion. They are the closest thing in current astrophysics to a body with no home star.

### Potential new sources

**NASA Exoplanet Archive — refreshed pull with full columns** — a re-query of the Exoplanet Archive composite planetary systems table (`pscomppars`) with the full default column set includes `sy_dist` (parsecs), `st_teff` (host star effective temperature), `st_rad` (stellar radius), `st_mass`, `pl_orbper` (orbital period), `pl_bmasse` (planet mass), and discovery method. This single pull would substantially enrich every planet card in the app without adding any new catalog.

**Habitable Exoplanet Catalog (HEC)** — maintained by the Planetary Habitability Laboratory at the University of Puerto Rico at Arecibo. Provides Earth Similarity Index (ESI), biological complexity index, and surface habitability estimates for confirmed exoplanets meeting basic HZ criteria. The HEC list is short (under 70 objects as of 2026) and curated. Integrating it as a tagging layer on top of the existing NASA Archive data would let the settlement guide surface the best candidates for the first wave of confirmed-planet settlements without adding any new positional data.

**ATNF Pulsar Catalog** — the Australia Telescope National Facility pulsar catalog contains approximately 3,400 pulsars with precise positions, periods, period derivatives, dispersion measures, and distance estimates. Pulsars are natural navigation beacons: they are stable, uniquely identifiable, and galactically distributed. Rendering the nearest few hundred as distinct objects in the GalaxyPage star field — with period information in their info panels — would add a layer that connects Exotopia to the deep space navigation tradition of using pulsar timing as a position reference. They are also the most extreme physical environments in which a theoretical settlement could be placed: millisecond pulsars spin at 700 revolutions per second and are surrounded by relativistic particle winds.

**Gaia DR3** — the 2022 Gaia Data Release 3 contains astrometric solutions, photometry, spectral classifications, and radial velocities for 1.5 billion sources. For Exotopia's immediate purposes, the most useful products are the RVS spectroscopic catalog (refined distances and stellar parameters for bright nearby stars) and the non-single-star catalog (binary and multiple systems). Replacing the HYG base layer with Gaia DR3 data for stars within 500 parsecs would substantially improve the sky-accuracy calculation for nearby settlement surfaces, where proper motion parallax shifts from the settlement's vantage point are largest.

**Exomoon candidate data** (Teachey & Kipping 2018; Kipping et al. 2022) — published in peer-reviewed form; orbital parameters available in the supplementary material of the discovery papers. Two objects: enough to add the exomoon tier to the navigation hierarchy, even if the tier initially contains only two entries. The tier is worth adding because the scene is qualitatively different — a surface view from an exomoon has the host planet filling a large fraction of the sky, and the planetary disc itself cycles through phases.

---

## Level 4 — Planet systems and surface views

### What we have

**PON INK exolocation schema** (`public/exolocation-nft-metadata-template.json`) — the coordinate system for settlement deed metadata. Four `coordinate_system` types: `surface_polygon` (equatorial lat/lon on a planetary body), `orbital_zone` (a band at a given altitude around a star or planet), `void_point` (three-space coordinates inside a cosmic void or open space), and `filament_node` (position on a cosmic web filament). This schema is the authoritative settlement location format.

**Deterministic planet pipeline** — three-stage procedural generator (stellar population sampling → orbital architecture → planet composition), seeded per galaxy cluster ID, producing consistent star systems and planet surfaces across sessions. 2,823 galaxies, 7,096 star systems, 10,900 generated planets as of the last run.

**Settlement browser** (`src/lib/settlements.ts`) — localStorage-based settlement registry with `surfaceKey`, `clusterKey`, and `moonKey` helpers.

**SurfaceViewPage** — existing surface scene: terrain mesh, settlement dome geometry, day/night cycle, and a star field rendered from HYG data.

### What is thin

The sky in the current surface view is not calibrated to the settlement's actual position. The star field is the Earth-viewpoint HYG catalog. For settlements within a few hundred light-years of Earth this is approximately correct; for settlements on confirmed exoplanets at 1,200 light-years (Kepler-442b) or 2,500 light-years (Kepler-62f), the constellations as seen from Earth are unrecognisable from the settlement surface. The galactic core is in a different direction. Our Sun is a faint star.

The surface lighting uses a placeholder ambient; the host star's spectral type is available in the data but not yet driving the scene illumination. An M-dwarf settlement and an A-type settlement should look fundamentally different before you even see the sky.

Orbital-zone settlements — the `orbital_zone` coordinate type in the exolocation schema — have no scene at all. Habitats in orbit around stars, in the circumstellar habitable zone but not on a planet surface, are valid deed types. They need a scene: the star filling the near field, the station geometry against the star disc, a star-free background.

### Potential new sources

**FITS sky catalog output pipeline** — this is internal rather than a third-party source, but it is the most important capability gap at this level. A Python script that takes a settlement's galactic coordinates (derived from the host star's RA/Dec/distance via the coordinate transforms already specced), queries the HYG and Gaia catalogs, applies parallax offsets for nearby stars, and outputs a JSON sky catalog for that specific settlement. The output is a list of stars with apparent magnitude and angular position as seen from the surface. This is the per-settlement sky. Nothing external needs to be fetched at runtime; the catalog is precomputed and bundled.

**Photometric stellar atmosphere models (PHOENIX/BT-Settl)** — the PHOENIX library of synthetic stellar spectra provides wavelength-resolved luminosity for stars across the H-R diagram. The spectral type in the HYG catalog maps directly to a PHOENIX grid point; sampling the PHOENIX SED at three wavelengths gives a physically derived RGB colour for the host star's disc. This is the correct input to the surface scene's ambient light. The library is publicly available; the relevant lookup table for M0–A5 stars fit in a small JSON file.

---

## Level 5 — Void interiors and intersectional points

### What we have

**VoidInteriorPage** — renders the inside of a cosmic void as a near-empty Three.js scene: 120 void-wall galaxies on a distant shell, 18 isolated field galaxies inside, a slow camera drift. Query-parameter driven; no data fetch required. Works today.

**WormholeConduit markers** — points at the periphery of mapped voids where E8 lattice transit routes are anchored, per the SPEC. These are hardcoded positions.

### What is thin

Void interiors are described above as "almost nothing to see." That is physically correct for the large-scale density field. But it is not the whole picture. Great voids contain:

- **Void galaxies** — unusually blue, star-forming, disc-dominated galaxies that have evolved in low-density environments. Their isolation has kept them from the merger-driven quenching that transforms cluster galaxies into red ellipticals. They are scientifically distinct and visually distinct: bluer, more actively star-forming, with higher gas fractions.
- **Void-wall intersections** — where two adjacent voids share a boundary, the sheet between them is a film of galaxies thinner than most filaments. These sheets are physically unique: they are flat, they have measurable thickness, and they curve around the void surface. Settlements here would look out on a two-dimensional galaxy structure — a sky full of galaxies in a band, rather than a cluster.
- **Void minima** — the points of lowest density inside a void, often called the void centre, where matter density drops to roughly 10% of the cosmic mean. These are the emptiest places in the mapped universe. No cluster, no filament, no void wall for tens of Mpc in every direction.
- **Void multiplet tunnels** — adjacent voids that share a narrow passage between them. These are natural wormhole analogues within the large-scale structure — not physically wormholes, but structurally and narratively similar.

None of these sub-structures are currently represented in the data or the scene.

### Potential new sources

**SDSS void galaxy catalogs** — specifically the Void Galaxy Survey (Pan-STARRS / SDSS-based) and the catalog from Kreckel et al. (2012) covering 60 isolated void galaxies with spectroscopy. These would give the VoidInteriorPage real interior objects to render — each with a proper morphological type, star formation rate, and position inside a specific named void.

**Cosmic Void Database (CosmicVoids.net)** — public repository of void catalogs from multiple algorithms (VIDE, Voronoi, ZOBOV) run on SDSS, 2dF, and other galaxy surveys. Provides void centre coordinates, effective radii, ellipticities, and void member galaxy lists. This would replace the current hardcoded approximate void shells with properly shaped bodies and link each void to its actual galaxy population.

**DESI Year-1 large-scale structure catalogs** (released 2024) — the Dark Energy Spectroscopic Instrument has produced galaxy survey data covering significantly more volume than SDSS, including void catalogs run on the DESI BGS (bright galaxy survey) and LRG (luminous red galaxy) samples. These are the current state-of-the-art for void mapping at `z < 0.4`.

---

## Summary table

| Level | Object type | Current data source | Status | Priority gaps |
|---|---|---|---|---|
| L1 | X-ray clusters | Takey2013 / XMM-Newton | 345 clusters, complete | NED member catalogs for top 100 |
| L1 | Named clusters | `cosmic-structures.ts` | 14 clusters, rich metadata | Filament skeleton (NEXUS+) |
| L1 | Cosmic voids | Hardcoded spheres | 7 voids, approximate | SDSS void shapes + galaxy members |
| L1 | Supercluster boundaries | Hardcoded lists | Laniakea, PP, Coma, Shapley | KiDS DM density overlay |
| L1 | GW events | None | — | GWTC-3 sky maps (high impact, low friction) |
| L2 | Cluster galaxies | Galaxy Oracle (generated) | 26,225 generated | VCC (Virgo); SDSS for SDSS-footprint clusters |
| L2 | Black holes | Metadata only | Not enterable | EHT / AGN catalog as nav destinations |
| L3 | Milky Way stars | HYG v3 | 119,614 stars | Gaia DR3 for `d < 500 pc` |
| L3 | Confirmed planets | NASA Exoplanet Archive | 35,896 records; `sy_dist` empty | Re-pull with full columns |
| L3 | Exomoon candidates | None | — | Teachey/Kipping 2018, Kipping 2022 |
| L3 | Candidate planets | Stub file | Empty | Archive candidate table pull |
| L3 | Pulsars | None | — | ATNF catalog (unique scene tier) |
| L3 | Interstellar objects | Python script (offline) | Not in app | Connect trajectory to CosmicPage |
| L4 | Planet surfaces | Generated pipeline | Functional | Sky-accurate catalog per settlement |
| L4 | Orbital zones | Schema only | No scene | Station scene (OZ coordinate type) |
| L4 | Host star lighting | Not wired | Placeholder | PHOENIX SED RGB lookup |
| L5 | Void interiors | Generated sparse scene | Functional | SDSS void galaxies; void minima |
| L5 | Void-wall intersections | Not represented | — | NEXUS+ filament nodes + sheet positions |
| L5 | Wormhole conduits | Hardcoded points | In schema | No immediate gap |

---

## What to incorporate first

If we order by the ratio of (data impact × uniqueness) to (integration friction), three candidates emerge clearly:

**1. NASA Exoplanet Archive re-pull with `sy_dist`, `st_teff`, `st_rad`** — zero new infrastructure. Replace the existing `exoapril2_2024.json` with a fresh pull from the archive API or the bulk CSV download, adding three columns. Every planet card in the app gets richer. Every sky-accuracy pipeline step becomes easier because host star distances are in the dataset directly. One afternoon of work.

**2. GWTC-3 gravitational wave sky maps** — the LIGO/Virgo team publishes HEALPix probability maps for each event as FITS files with open data licences. Converting the five most precisely localised events to simplified sky annuli (centre RA/Dec, inner/outer radius at the 90% credible interval) and rendering them as translucent rings in CosmicPage would add a time-domain astrophysics layer that is genuinely unique in public space visualisation. The narrative resonance — marking the places where space-time rippled — aligns closely with the cosmological framing of the platform.

**3. ATNF Pulsar Catalog** — the catalog is freely available as a plain-text or FITS download. Filtering to the ~800 pulsars with well-constrained distances and plotting them as a distinct object class in the GalaxyPage star field adds a navigation landmark layer with clear in-world meaning (pulsars were used in the Voyager Golden Record as a galactic position reference). It also opens the pulsar tier as a settlement location type — not for the surface, but for the orbital-zone coordinate type, which needs a scene in any case.

The exomoon candidates, void galaxy catalogs, and filament skeleton are all compelling but require more infrastructure. They are right for the second wave.

---

## The one-entry-point architecture this data serves

The unified visualisation branch requires that every object at every level be enterable from a single starting point, with no UI jump or context break. That constraint is navigational. But it has a data implication: the data at each level must be self-consistent in coordinate space.

A settlement surface on Kepler-442b is at a specific point in galactic coordinates. The star field visible from that surface is a geometric consequence of being at that point. The cluster that is nearest that point in the cosmic web is a property of the large-scale structure database. The void that the Milky Way itself sits inside — the KBC Void — is the reason why the surface view's sky has fewer bright nearby galaxies than a settlement in the Virgo Cluster would see.

These are not independent facts. They are the same coordinate system at different scales. The data architecture for the unified visualisation is not a collection of separate catalogs bolted together — it is one coordinate system, from the comoving Mpc scale of the void network down to the surface-normal equatorial lat/lon of a dome settlement. The data sources listed here are the observational inputs to that single system.

That is the cartography problem. The map has one grid. The catalog sources are the survey teams. The unified entry point is the map reader.

---

*Working draft — SCD Hub / Exotopia.org · GPL v3*
*Data sources referenced: Takey2013 XMM-Newton catalog (NASA/HEASARC); NASA Exoplanet Archive composite planetary systems table; HYG Stellar Database v3; Gaia DR3 (ESA); ATNF Pulsar Catalog (Parkes); Habitable Exoplanet Catalog (UPR Arecibo); Event Horizon Telescope collaboration; GWTC-3 (LIGO/Virgo/KAGRA); SDSS DR17 void catalogs; NEXUS+ cosmic web filament reconstruction; VCC Virgo Cluster Catalog; Kreckel et al. 2012 void galaxy survey; PHOENIX/BT-Settl stellar atmosphere library; Kipping et al. exomoon candidates.*
