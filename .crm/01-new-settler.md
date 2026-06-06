# 01 — New Settler Welcome
**Trigger:** First settlement NFT minted · Channel: Email + SMS · Tone: warm, grounded

---

## CONTEXT

Sent automatically when a user's exolocation deed is confirmed on-chain.
This is their first contact with the platform as a verified settlement owner.
The main welcome-letter.md in /exotopia.org holds the full HTML/SMS/audio version.
This file is the plain-text CRM record and follow-up variants.

---

## EMAIL — Subject line variants (A/B test)

A: `Your settlement is established — {{settlement_name}} · PON INK`
B: `{{first_name}}, you have a permanent address in the cosmos`
C: `{{planet_name}} is waiting — your settlement is ready`

---

## EMAIL BODY (plain text variant)

```
Hello {{first_name}},

Your settlement is established.

{{settlement_name}}
{{planet_name}} · {{dist_pc}} parsecs from Earth
Your address: {{exo_address}}

This address is recorded on the Algorand blockchain.
It is yours permanently. Nobody can revoke it.

---

THREE THINGS TO DO THIS WEEK

1. Submit your first eco-ops check-in.
   Even a location ping counts — it activates your starter settlement objects.

2. Add three items to your mule-bot.
   A bio note, a project description, one thing you want visitors to know.
   This moves you from Foal to Colt tier.

3. Enter your settlement in Exotopia.
   → {{settlement_url}}

---

HOW THE MONEY MOVES

Every transaction on PON INK shows you the net amount before you confirm.
The split: 99% to you · 0.75% to the Community Hardware Fund · 0.25% platform.
We never combine these numbers. What you see is what arrives.

---

{{#if community_name}}
You are joining through {{community_name}}.
{{#if facilitator_name}}Your facilitator is {{facilitator_name}} — reach out to them with questions.{{/if}}
{{/if}}

{{#if event_name}}
Upcoming: {{event_name}} · {{event_date_local}}
Your claim code: {{invite_code}}
{{/if}}

SCD Hub · Non-profit · GPL v3 · Community owns its data
Nothing in this message is financial advice.

Unsubscribe: {{ponink_url}}/unsubscribe
```

---

## SMS VARIANT (2 segments max)

**English:**
```
PON INK: {{first_name}}, your settlement is live at {{planet_name}}.
Address: {{exo_address}}
Enter: {{settlement_url}}
First check-in unlocks your starter objects. Reply HELP for guide.
```

**Swahili (+254):**
```
PON INK: Habari {{first_name}}! Makazi yako yako tayari kwenye {{planet_name}}.
Ingiza hapa: {{settlement_url}}
Msaada: jibu MSAADA
```

---

## DAY 3 FOLLOW-UP (if no check-in logged)

**Subject:** `Still waiting — {{settlement_name}} · PON INK`

```
Hello {{first_name}},

Your settlement at {{planet_name}} is ready but no check-in yet.

One action: submit a single eco-ops ping from wherever you are.
It takes 2 minutes and unlocks your starter objects.

→ {{ponink_url}}

{{#if facilitator_name}}
Your facilitator {{facilitator_name}} can walk you through it.
{{/if}}

SCD Hub · Reply STOP to opt out
```

---

## NOTES FOR SENDER

- Check `language` field before sending — Swahili SMS for +254 numbers
- If `facilitator_name` is blank, remove that line entirely
- Do not include exo_address in SMS if over 160 chars — abbreviate to settlement_url only
