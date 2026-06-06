# .crm — Local Role-Based Correspondence Templates
**SCD Hub · PON INK / Exotopia / Ecocity / Worldbridger · Internal only · GPL v3**

Sovereign local CRM. No third-party tracking. No cloud sync. Files here are
draft letter templates used for community outreach, onboarding, and engagement.
All variables use `{{double_brace}}` Handlebars syntax (Mailgun / Supabase compatible).

---

## Template index

| File | Role / Context | Primary channel |
|---|---|---|
| [01-new-settler.md](01-new-settler.md) | New user — first settlement minted | Email + SMS |
| [02-artist-musician.md](02-artist-musician.md) | Artist invited to mint $SUNLIGHT | Email |
| [03-field-worker.md](03-field-worker.md) | Eco-ops field worker — ART token onboarding | SMS + audio |
| [04-group-manager.md](04-group-manager.md) | Group Manager training pathway invitation | Email |
| [05-ngo-partner.md](05-ngo-partner.md) | NGO / institutional partnership inquiry | Email (formal) |
| [06-security-contributor.md](06-security-contributor.md) | Security bulletin contributor recruitment | Email |
| [07-facilitator-mentor.md](07-facilitator-mentor.md) | Facilitator / mentor onboarding | Email |
| [08-re-engagement.md](08-re-engagement.md) | Lapsed user — settlement needs activity | SMS + email |
| [09-producer-designer.md](09-producer-designer.md) | Videographer, web designer, event producer, choreographer, lighting | Email + SMS |

---

## Shared variable reference

| Variable | Source | Example |
|---|---|---|
| `{{first_name}}` | artist_profiles.display_name (first word) | `Amara` |
| `{{full_name}}` | artist_profiles.display_name | `Amara Okonkwo` |
| `{{handle}}` | artist_profiles.handle | `@amara_eco` |
| `{{community_name}}` | artist_profiles.community | `Uni-Kibaoni-Peace-Youth-SHG` |
| `{{role}}` | artist_profiles.role | `Eco / Health Educator` |
| `{{planet_name}}` | user_addresses.pl_name | `Kepler-442b` |
| `{{settlement_name}}` | user_addresses.region_name | `Mpeketoni Basin Station` |
| `{{exo_address}}` | user_addresses.exo_address | `exo-surface-v1:Kepler-442b:14.5,-23.1` |
| `{{mule_tier}}` | mule_corpus.tier | `Foal` |
| `{{eco_ops_count}}` | eco_ops_checkins COUNT | `12` |
| `{{art_balance}}` | art_tokens.balance | `47` |
| `{{sunlight_balance}}` | sunlight_tokens.balance | `3.2 $SUNLIGHT` |
| `{{facilitator_name}}` | event_schedule.facilitator | `Grace Mwende` |
| `{{invite_code}}` | event_schedule.claim_code | `FANA-2026-042` |
| `{{settlement_url}}` | computed | `https://exotopia.org/surface/…` |
| `{{ponink_url}}` | computed | `https://pon.ink/@amara_eco` |
| `{{net_amount_kes}}` | resonance split 99% | `643` |
| `{{days_inactive}}` | computed from last_checkin | `47` |

---

## Tone rules (all templates)

- Address person directly. No passive voice.
- Plain language — Grade 8 English reading level.
- Never: crypto jargon ("ARC-3 NFT"), promises of financial return, `Total = Yield - Gas`.
- Always show the resonance split (99 / 0.75 / 0.25) before any transaction is confirmed.
- Seed phrase / private key: never included in any channel, ever.
- Localization priority: Swahili (Lamu/Nairobi), English (default), Patois (OT Kulcha — develop with community).

---

*Maintained locally. Sync to Mailgun template library before sending campaign.*
