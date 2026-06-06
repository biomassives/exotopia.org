# 07 — Facilitator / Mentor — Onboarding and Role Activation
**Trigger:** Manual — admin assigns facilitator role to community leader · Channel: Email · Tone: collegial, trust-based

---

## CONTEXT

Facilitators are the human layer between the platform and community members.
They run sessions, answer questions, walk new settlers through their first check-in,
and are the named contact in welcome letters sent to people they introduce.

Unlike Group Managers (who run technical airdrop campaigns), facilitators
focus on the human side: holding sessions, building trust, translating the
platform's purpose into language that fits their community.

This letter activates a facilitator — acknowledging their role and explaining
what the platform will do with their name in community-facing comms.

---

## EMAIL

**Subject:** `Your role as facilitator is confirmed — PON INK · {{community_name}}`

```
Hello {{first_name}},

Your role as a facilitator for {{community_name}} on PON INK is confirmed.

---

WHAT THIS MEANS

When new members join through {{community_name}}, they will receive a welcome
message that includes your name as their point of contact. They will be told
to reach out to you with questions. This is intentional — the platform works
better when there is a real person in the loop, not a help desk.

Your name in their message:
"Your facilitator is {{full_name}} — reach out to them with any questions."

---

YOUR RESPONSIBILITIES

There is no formal contract. The responsibilities are relational:

1. Be reachable when new members contact you — within a few days is fine.
2. Walk them through their first eco-ops check-in if they are stuck.
3. Help them add at least three items to their mule-bot in the first week.
4. Let us know if something about the platform is not working for your community.

You do not need to be a technical expert. Your knowledge of the community
and its context is more valuable than any blockchain skill.

---

YOUR SETTLEMENT

Your settlement at {{settlement_name}} · {{planet_name}} shows your facilitator history.
Every new member you onboard is part of your community's eco-ops record.
→ {{settlement_url}}

---

WHAT THE PLATFORM WILL DO

- Send you a notification when each new member you introduce submits their first check-in
- Attribute your facilitation in the payment_splits_ledger (visible in the community dashboard)
- Issue you a Facilitator POAP for each session you run (if you provide event code)

---

SESSIONS

{{#if event_name}}
Your next session is logged: {{event_name}} · {{event_date_local}}
Claim code for participants: {{invite_code}}
{{else}}
When you run your next session, send us the date, location, and expected
participant count — we will generate a claim code for you.
{{/if}}

---

COMMUNITY LANGUAGES

Your primary language is logged as {{lang}}.
If you run sessions in Swahili, French, or other languages, let us know —
we will ensure member communications match the language of your sessions.

---

Thank you for being the human layer that makes this work.

{{sender_name}}
SCD Hub

SCD Hub · Non-profit · GPL v3 · Community owns its data
Unsubscribe: {{ponink_url}}/unsubscribe
```

---

## FOLLOW-UP — AFTER SESSION

**Subject:** `Session summary — {{event_name}} · {{community_name}}`

```
Hello {{first_name}},

Session logged: {{event_name}} · {{event_date_local}}

Participants who claimed: {{claim_count}}
First check-ins logged: {{checkin_count}}
mule-bot items added: {{corpus_items_added}}

A Facilitator POAP has been added to your wallet for this session.

Next session: {{next_event_date}} (if scheduled)

SCD Hub
```

---

## NOTES FOR SENDER

- Facilitators should be confirmed with their consent before being named in any member communication
- Language field is critical: a Swahili-speaking facilitator in Lamu will get English comms unless `lang=sw` is set
- Do not promise payment for facilitation — facilitators earn governance weight through POAP accumulation, not direct pay
- If facilitator is also a Group Manager: both roles can coexist; clarify which hat they are wearing in each campaign
