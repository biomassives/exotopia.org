# 02 — Artist / Musician — $SUNLIGHT Minting Invitation
**Trigger:** Manual or airdrop campaign · Channel: Email · Tone: peer-to-peer, creative

---

## CONTEXT

Sent to musicians, sound artists, and cultural producers being invited to mint
their first $SUNLIGHT NFT. This may come from a Group Manager running an OT Kulcha,
Fana Ka, or Worldbridger event, or from SCD Hub admin for a new artist partner.

Key points for this audience:
- 99% of any resale goes back to them — forever, on every secondary sale
- The NFT records the work; it is not a speculative instrument
- mule-bot will curate their work into Hub Approvideo if quality thresholds met
- They do not need to understand blockchain to participate

---

## EMAIL

**Subject:** `Your sound — permanently on record · PON INK + {{community_name}}`

```
Hello {{first_name}},

{{#if facilitator_name}}{{facilitator_name}} from {{community_name}}{{else}}The SCD Hub team{{/if}}
has invited you to record your work permanently on PON INK.

---

WHAT THIS IS

$SUNLIGHT is a sound NFT — a record of ownership and licensing rights to a
track, a performance, a field recording, or any creative audio you make.
Once minted, it lives on the blockchain. The licensing terms you set are
encoded in it. Every time it sells, 99% of the sale price returns to you.
Not 70%. Not 80%. Ninety-nine percent.

The 0.75% that goes to the Community Hardware Fund supports the field
infrastructure that communities like yours depend on. The 0.25% platform
share keeps the network running.

---

YOUR SETTLEMENT AT {{planet_name}}

You have a virtual settlement in Exotopia at {{settlement_name}}.
→ {{settlement_url}}

Your mule-bot holds the knowledge base for your settlement. As you add
your work — tracks, recordings, performance history — it learns to represent
you to visitors without you having to be there.

---

TO MINT YOUR FIRST $SUNLIGHT

1. Open your pon.ink dashboard: {{ponink_url}}
2. Go to Sound Lab → New Recording
3. Upload or record your track (WAV / MP3 / FLAC — up to 50 MB)
4. Set your license terms (personal use / commercial / sync / exclusive)
5. Confirm — your split: 99% to your wallet on every sale

{{#if event_name}}
---
UPCOMING SESSION
{{event_name}} · {{event_date_local}}
Your claim code: {{invite_code}}
{{/if}}

---

If you have questions about how this works, reply to this email or contact
{{#if facilitator_name}}{{facilitator_name}}{{else}}your community facilitator{{/if}}.

SCD Hub · Non-profit · GPL v3
Nothing in this message is financial advice.
Unsubscribe: {{ponink_url}}/unsubscribe
```

---

## SMS VARIANT (for follow-up)

```
PON INK: {{first_name}}, your $SUNLIGHT invite from {{community_name}} is ready.
99% to you on every sale. Mint here: {{ponink_url}}
Reply HELP for guide.
```

---

## NOTES FOR SENDER

- Personalise the opening with the inviting artist or facilitator name if known
- If the artist already has a settlement, reference `{{settlement_name}}` in the subject
- For OT Kulcha / Patois community: swap "field recording" copy for "live session" copy
- For Swahili: translate the key lines; keep "PON INK", "$SUNLIGHT", and URLs in Latin script
- Never describe $SUNLIGHT as an "investment" or mention price speculation
