# 03 — Field Worker — Eco-Ops + ART Token Onboarding
**Trigger:** First eco-ops check-in confirmed · Channel: SMS + audio · Tone: direct, practical

---

## CONTEXT

For water quality mappers, farm mappers, WATSAN field teams, and community
environmental monitors. This audience is often mobile-first, lower data, sometimes
offline. SMS is the primary channel. Audio call for key milestones. Email secondary.

Key points for this audience:
- Each check-in earns ART tokens — real value, resellable
- The data they collect is permanently on-chain — they own the record
- Their settlement earns eco-ops history that makes it more valuable
- mule-bot tracks their participation and plans next steps

---

## SMS — FIRST CHECK-IN CONFIRMED

**English:**
```
PON INK: {{first_name}}, your eco-ops check-in at {{planet_name}} is recorded.
You earned ART tokens. Balance: {{art_balance}} ART.
Next: {{ponink_url}}
Reply HELP for guide.
```

**Swahili:**
```
PON INK: {{first_name}}, ukaguzi wako wa eco-ops kwenye {{planet_name}} umerekodiwa.
Umepata tokeni za ART. Salio: {{art_balance}} ART.
Hatua inayofuata: {{ponink_url}}
```

---

## EMAIL — ART TOKEN EXPLAINER (Day 1 if email available)

**Subject:** `Your first eco-ops record is on the blockchain — {{first_name}}`

```
Hello {{first_name}},

Your eco-ops check-in has been recorded permanently on the blockchain.

Here is what that means:

YOUR DATA, YOUR RECORD
The water quality / field data you submitted is yours. It is stored with your
settlement at {{planet_name}}. Nobody can delete it. Your mule-bot has logged
it in its corpus and can explain it to anyone who visits your settlement.

YOUR ART TOKENS
You earned {{art_balance}} ART (Activity Reward Tokens) for this check-in.
ART tokens are resellable. People who want to support field work — NGOs,
art partners, event organisers — buy ART from people like you.

WHO BUYS ART?
- Event promoters airdropping tokens to participants
- Art partners buying as a participation signal
- People who want to support field work but can't do it themselves
- Supply chain groups — e.g. plastic recycling co-ops that earn ART together

YOUR SETTLEMENT
Every check-in builds your settlement at {{settlement_name}}.
The more eco-ops history your settlement has, the more it is worth.
→ {{settlement_url}}

---

NEXT STEPS FOR YOUR mule-bot

Your mule-bot is at tier {{mule_tier}}.
Add a note about today's check-in to help it explain your work to visitors:
→ {{ponink_url}}/mulebot

---

{{#if facilitator_name}}
Your facilitator is {{facilitator_name}} — contact them with any questions.
{{/if}}

SCD Hub · Non-profit · GPL v3 · You own your data.
Unsubscribe: {{ponink_url}}/unsubscribe
```

---

## AUDIO SCRIPT — MILESTONE CALL (~20 seconds)

*Use when `eco_ops_count` reaches 5, 10, 25, 50, 100.*

```
Hello {{first_name}}. This is PON INK.

You have reached {{eco_ops_count}} eco-ops check-ins at {{planet_name}}.

Your estimated reward is {{net_amount_kes}} Kenyan shillings — ninety-nine
percent of the total goes to your wallet.

A new object has been added to your settlement. Visit your dashboard to see it.

To hear your ART balance, press 1. To speak with your facilitator, press 2.
```

---

## NOTES FOR SENDER

- Primary send channel is SMS for +254 numbers; email only if available and opted in
- Audio milestone call: only if `audio_call_opt_in = true` in profile
- For WATSAN-specific check-ins: include the parameter measured (pH, turbidity, etc.) in the SMS
- For farm map check-ins: swap "water quality" copy for "farm map" copy
- Do not include raw wallet address or ART token contract address in any SMS
