# 04 — Group Manager — Training Pathway Invitation
**Trigger:** Manual — admin nominates a community leader · Channel: Email · Tone: collaborative, professional

---

## CONTEXT

Group Managers run airdrop campaigns, onboard community members, manage settlement
collections, and act as the bridge between SCD Hub admin and community members.
This letter invites a community leader to start the Group Manager training pathway.

Prerequisites: existing PON INK account, settlement minted, at least one eco-ops check-in.
Training pathway: 8 modules → capstone micro-airdrop (≤10 recipients, admin co-signed) → POAP + Tier 2 access.

---

## EMAIL

**Subject:** `Invitation — Group Manager training · PON INK · {{community_name}}`

```
Hello {{first_name}},

We would like to invite you to become a certified Group Manager on PON INK.

---

WHAT A GROUP MANAGER DOES

Group Managers run airdrop campaigns for their communities — distributing
music NFTs ($SUNLIGHT), eco-ops participation tokens (ART), exolocation property
deeds, and event POAPs without needing SCD Hub admin involvement for every step.

You would be able to:
- Build and schedule airdrop bundles for {{community_name}}
- Onboard new members through their first settlement
- Manage the aftermarket promotion of your community's NFT collections
- Configure the revenue split for each campaign (standard: 99% to group)

---

WHY WE ARE ASKING YOU

{{#if facilitator_name}}
{{facilitator_name}} has recommended you.
{{else}}
Your eco-ops activity and community involvement at {{settlement_name}} stands out.
{{/if}}

You already understand the communities this platform serves. That is the
knowledge that cannot be trained — the rest we can teach you in 8 modules.

---

THE TRAINING PATHWAY

8 modules, self-paced:
  1. Platform overview and access tiers
  2. Building your first airdrop bundle
  3. Configuring revenue splits and custom contracts
  4. Community onboarding — the new settler experience
  5. Aftermarket promotion and collection management
  6. mule-bot corpus management for your community's settlements
  7. Security basics — phishing, wallet hygiene, what to tell community members
  8. Governance — sphere voting, POAP weight, DAO parameters

Capstone: run a real micro-airdrop (≤10 recipients) with admin co-sign.
On completion: Group Manager POAP + Tier 2 system access.

---

TO START

Reply to this email with:
- Confirmation that you want to proceed
- Your preferred language for training materials ({{lang}} assumed)
- One thing you want your community to be able to do on PON INK that they cannot do today

We will set up your training access within 48 hours.

---

{{settlement_name}} · {{planet_name}}
→ {{settlement_url}}

SCD Hub · Non-profit · GPL v3
Training materials are open source. What you learn, you own.

Unsubscribe: {{ponink_url}}/unsubscribe
```

---

## FOLLOW-UP — MODULE COMPLETION ACKNOWLEDGEMENT

**Subject:** `Module {{module_number}} complete — {{first_name}} · Group Manager pathway`

```
{{first_name}},

Module {{module_number}} logged: {{module_name}}.

{{modules_remaining}} modules remaining before your capstone.

Next: {{next_module_url}}

Keep going — you are building something your community will use.

SCD Hub
```

---

## NOTES FOR SENDER

- Only send when admin has reviewed the candidate and agreed to co-sign the capstone
- Include the `facilitator_name` if referral came from a known facilitator — personal referrals convert better
- Adjust the "8 modules" list if curriculum has changed — check SPEC_AIRDROP.MD §8 first
- Custom split: Group Managers can negotiate non-standard splits for special campaigns — mention this only if relevant to their context
