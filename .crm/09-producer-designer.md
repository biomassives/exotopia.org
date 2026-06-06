# 09 — Producer / Designer — Event Production, Creative Technology, Visual Arts
**Trigger:** Manual or event campaign invite · Channel: Email · Tone: peer, production-literate

---

## CONTEXT

For the people who build the frame around the work — videographers, web designers,
event producers, dance choreographers, lighting specialists, and anyone whose
creative output shapes how a performance or gathering *feels* and *looks*.

This group is distinct from solo recording artists:
- Their work is often collaborative and event-bound (not a solo track to mint alone)
- They create the conditions for other people's creativity — they are the infrastructure of live work
- They may be the most natural Group Managers: they already run events with participant lists
- Their documentation (show recordings, lighting rigs, web builds, choreography notes) has real archival value
- They tend to understand systems, workflows, and production pipelines — less likely to need tech handholding

Key offer for each sub-role:

| Sub-role | What PON INK / Exotopia offers |
|---|---|
| Videographer | $SUNLIGHT NFT for event documentation, Hub Approvideo curation credit |
| Web designer | Platform integration work, settlement gallery design, open-source contribution pathway |
| Event producer | POAP issuance for events, Group Manager pathway, airdrop bundle design |
| Dance choreographer | $SUNLIGHT for recorded performance, settlement as performance archive |
| Lighting specialist | Production credit NFT, event POAP, settlement as portfolio node |

---

## EMAIL

**Subject:** `Your production work — permanently on record · PON INK + {{community_name}}`

```
Hello {{first_name}},

{{#if facilitator_name}}{{facilitator_name}} from {{community_name}}{{else}}The SCD Hub team{{/if}}
has invited you to bring your production work into PON INK.

---

WHAT THIS IS FOR PEOPLE WHO BUILD THE FRAME

Most NFT platforms are built for the person standing in front of the microphone.
You are often the person building everything around them — the light, the floor,
the web page, the camera angle, the timing of the whole thing.

PON INK records that work too. Production credits, event documentation, design
archives, choreography records — any of it can be minted as a $SUNLIGHT NFT
or attached to your settlement as part of your permanent professional record.

99% of any resale goes back to you. The 0.75% that goes to the Community
Hardware Fund supports the field infrastructure this network runs on.
The 0.25% platform share keeps the network running. Nothing else is taken.

---

YOUR SETTLEMENT AT {{planet_name}}

{{settlement_name}} is your node in the network.
→ {{settlement_url}}

Think of it as a portfolio that runs itself. Your mule-bot holds the corpus —
your production credits, show documentation, design work, client notes —
and presents it to anyone who visits your settlement, in your words.

As a producer or designer, your mule-bot corpus might include:
- Production credits for shows and events you have worked on
- Technical specs or design notes you want attributed to you
- Video CIDs (IPFS-pinned event documentation)
- Choreography notation or lighting design files
- Links to work in external archives or portfolios

---

WHAT YOUR ROLE UNLOCKS

EVENT PRODUCERS
You are a natural Group Manager. If you run regular events — shows, workshops,
community sessions — you can issue POAPs to attendees, run post-event airdrops,
and build airdrop bundles that include your community's music NFTs, exolocation
deeds, and participation credentials. All configurable. Standard split 99/0.75/0.25
unless you set a custom contract for a specific event.

Ask us about the Group Manager training pathway if this fits your work.

VIDEOGRAPHERS
Hub Approvideo is our curated video resource library — maintained by mule-bots
across the network as a land care and community knowledge tool. If you produce
documentary or educational content related to field work, sustainability, or
community practice, your work may be eligible for curation. Curation credit
is attributed on-chain. You retain full rights.

WEB DESIGNERS
The PON INK and Exotopia platforms are GPL v3 — entirely open source. If you
want to build on top of them, fork them, or design for communities using them,
we want to know you. Settlement gallery design, custom UI skins, community-specific
visual systems — there is real work here and we pay in ART tokens and attribution.

DANCE CHOREOGRAPHERS
A performance is a $SUNLIGHT-eligible work. A video documentation of it, with
your choreography credit embedded in the NFT metadata, is permanent.
The license terms you set are on-chain. If someone uses your choreography,
the terms they agreed to are there, indefinitely.

LIGHTING SPECIALISTS
Your production credit is real intellectual and creative work. A lighting design
file, a show documentation video, a technical rider — these can be minted,
attributed, and licensed. Most platforms have never thought about this.
We have.

---

THREE THINGS TO DO THIS WEEK

1. Add your production portfolio to your mule-bot.
   Three items: one past project, one ongoing project, one thing you want
   people to find when they visit your settlement.
   → {{ponink_url}}/mulebot

2. Mint one piece of work as $SUNLIGHT.
   A show recording, a design file, a video — anything you made.
   Choose your license (personal / commercial / sync / exclusive).
   → {{ponink_url}}/soundlab

3. If you produce events: enquire about Group Manager access.
   Reply to this email or message your facilitator.

---

{{#if event_name}}
UPCOMING SESSION
{{event_name}} · {{event_date_local}}
Your claim code: {{invite_code}}
→ {{settlement_url}}
{{/if}}

{{#if community_name}}
You are joining through {{community_name}}.
{{#if facilitator_name}}Your facilitator is {{facilitator_name}}.{{/if}}
{{/if}}

---

Reply to this email if you want to talk through what your specific role
looks like in this system. We would rather explain it in one conversation
than have you figure it out from documentation.

{{sender_name}}
SCD Hub

SCD Hub · Non-profit · GPL v3 · Community owns its data
Unsubscribe: {{ponink_url}}/unsubscribe
```

---

## SMS VARIANT (for event-specific invite)

```
PON INK: {{first_name}}, your invite from {{community_name}} is ready.
Production credits + event work — permanently on record.
99% to you on every sale: {{ponink_url}}
Reply HELP for guide.
```

---

## FOLLOW-UP — POST-EVENT MINT PROMPT

**Subject:** `{{event_name}} is on-chain — add your production credit · PON INK`
**Trigger:** 24–48 hours after an event where the contact was listed as crew/production

```
{{first_name}},

{{event_name}} happened. The POAP is out. The check-ins are logged.

Your production credit is not yet on-chain.

If you documented the event, designed elements for it, or built anything
that made it what it was — that work belongs in your record.

Five minutes: → {{ponink_url}}/soundlab

Attach your name to the work before the event fades into someone else's archive.

SCD Hub
```

---

## SWAHILI VARIANTS (for Nairobi / Lamu crew)

**SMS:**
```
PON INK: Habari {{first_name}}! Kazi yako ya uzalishaji iko tayari kwenye {{planet_name}}.
Anza hapa: {{ponink_url}}
Msaada: jibu MSAADA
```

---

## GROUP MANAGER FAST-TRACK NOTE

If a producer-designer contact already runs regular events with participant lists,
skip the standard onboarding flow and go directly to the Group Manager training
pathway invitation (template 04). Event producers often have the skills and
context to operate at Tier 2 immediately — the standard new settler sequence
undersells what they can do.

Flag in CRM: `suggested_role = group_manager` if:
- They produce 4+ events per year
- They already manage participant lists or ticketing
- They have existing relationships with artists in the network

---

## NOTES FOR SENDER

- Do not merge all five sub-roles into one generic paragraph — acknowledge the specific role if known
- Web designer contacts: lead with the GPL v3 and open-source angle first; they will respect sovereignty
- Videographer contacts: Hub Approvideo is the strongest offer — lead with curation credit
- Choreographer contacts: the licensing angle is genuinely novel for this field — lean into it
- Lighting specialists: many have never thought about their design files as IP — the credit NFT is the hook
- For OT Kulcha / dance-heavy communities: choreographer copy is especially relevant; adapt to Patois register
- Event producers who already use Eventbrite / Ticket Tailor / Splash: the POAP and airdrop system is a natural supplement, not a replacement — position it that way
