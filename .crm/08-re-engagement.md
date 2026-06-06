# 08 — Re-engagement — Lapsed User / Dormant Settlement
**Trigger:** Automated — `days_since_last_checkin > 30` · Channel: SMS + Email · Tone: warm, no pressure

---

## CONTEXT

For settlement owners who have not submitted an eco-ops check-in or logged in
for more than 30 days. The settlement still exists — it is permanent — but
it is not growing. The mule-bot is at the same tier it was when they last logged in.

This letter should feel like a gentle nudge from a friend, not a marketing re-engagement.
Never pressure. Never shame. The settlement is theirs and it will keep being theirs.

Three versions:
A — 30 days inactive (gentle)
B — 60 days inactive (warmer, mention of community)
C — 90+ days inactive (offer of facilitator contact, no pressure to return)

---

## VERSION A — 30 DAYS (SMS first)

**SMS:**
```
PON INK: {{first_name}}, your settlement at {{planet_name}} is quiet.
{{days_inactive}} days since your last check-in.
One action: {{ponink_url}}
Reply STOP to opt out.
```

**Email:**
**Subject:** `Your settlement is still there — {{settlement_name}}`

```
Hello {{first_name}},

Your settlement at {{planet_name}} has been quiet for {{days_inactive}} days.

It is still there. It always will be. The dome, the stone circle, your
mule-bot at {{mule_tier}} tier — all of it is exactly as you left it.

One thing to do if you have five minutes:

Submit a check-in. Even a location ping. It adds to your eco-ops history
and earns ART tokens. Your mule-bot will log it and update its plan.

→ {{ponink_url}}

No pressure. Just letting you know the settlement is waiting.

SCD Hub
Unsubscribe: {{ponink_url}}/unsubscribe
```

---

## VERSION B — 60 DAYS (warmer, community mention)

**Subject:** `{{community_name}} is still active — {{first_name}}, your settlement too`

```
Hello {{first_name}},

It has been {{days_inactive}} days since your last check-in at {{settlement_name}}.

{{community_name}} has been active — {{community_checkin_count}} eco-ops check-ins
from your community in that time. The collective record is building.

Your settlement at {{planet_name}} is part of that record. When you come back,
everything is where you left it. Your mule-bot is at {{mule_tier}} tier, waiting.

What has changed since you were last here:

{{#if new_art_price}}
· ART token value: {{new_art_price}} (up from when you last logged in)
{{/if}}
{{#if new_security_bulletin}}
· New security bulletin affecting Polygon wallet users — worth a read
{{/if}}
{{#if community_event}}
· Upcoming community session: {{community_event}} · {{community_event_date}}
{{/if}}

→ {{settlement_url}}

{{#if facilitator_name}}
{{facilitator_name}} is your facilitator if you need a hand getting back in.
{{/if}}

SCD Hub · No pressure. The settlement is yours.
Unsubscribe: {{ponink_url}}/unsubscribe
```

---

## VERSION C — 90+ DAYS (offer of human contact, no chase)

**Subject:** `A note from SCD Hub — {{first_name}}`

```
Hello {{first_name}},

Your settlement at {{settlement_name}} has been quiet for {{days_inactive}} days.

We are not going to pressure you to come back. The settlement is permanent —
it will be there whether you use it daily or once a year. Your exolocation
address ({{exo_address}}) belongs to you. Nothing changes that.

We did want to write because we want to know if something is not working.

Is the platform hard to use?
Is the community not active enough to make it worth your time?
Is there something we should be building that we are not?

You can reply to this email. It reaches the SCD Hub team directly.
No ticket system. No automated follow-up. A person will read it.

{{#if facilitator_name}}
Your facilitator {{facilitator_name}} is also reachable if you prefer
to talk to someone who knows your local context.
{{/if}}

The settlement is yours. We hope to see you back when the time is right.

{{sender_name}}
SCD Hub

Unsubscribe: {{ponink_url}}/unsubscribe
P.S. If you would like to transfer your settlement to another community member,
that is possible — reply and we can walk you through it.
```

---

## AUTOMATION LOGIC

```
IF days_since_last_checkin == 30:
  send Version A SMS
  IF profile.email AND profile.email_opt_in:
    send Version A email (1 day delay after SMS)

IF days_since_last_checkin == 60:
  skip if already responded to Version A
  send Version B email only (no SMS for 60-day)

IF days_since_last_checkin == 90:
  skip if responded to A or B
  send Version C email only — personal tone, human reply address

IF days_since_last_checkin > 180:
  no further automated contact
  flag for facilitator manual outreach if community_name is known
```

---

## NOTES FOR SENDER

- Version C reply address must go to a real inbox, not a no-reply address
- The settlement transfer offer in Version C P.S. is genuine — have a process ready if someone requests it
- Never send all three versions to the same person within 90 days — once per tier only
- For Swahili users: Version A SMS in Swahili; Versions B/C in English unless translator available
- Suppression: if user has `email_opt_in = false`, email-only versions skip entirely; SMS only if `sms_opt_in = true`
- ART token price in Version B: pull from marketplace data only if a reliable price feed exists; otherwise omit
