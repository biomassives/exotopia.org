# 06 — Security Bulletin Contributor Recruitment
**Trigger:** Manual — outreach to security researchers / developers · Channel: Email · Tone: peer, technical

---

## CONTEXT

The Exotopia Security Bulletin is a community-curated CVE feed filtered for NFT,
smart contract, and wallet relevance. Contributors earn ART tokens for submitting,
verifying, and curating entries. This letter recruits the first wave of contributors
from the security research and blockchain developer community.

This audience: security researchers, smart contract auditors, blockchain developers,
bug bounty hunters, Web3 developer community members.

Key offer:
- ART tokens for verified contributions (5 Submitter / 3 Verifier / 8 Curator / 2 Action-taker)
- Critical bulletins can be minted as $SUNLIGHT NFTs — knowledge on-chain permanently
- GPL v3 — all bulletin content is open source and citable
- Responsible disclosure pathway with attribution and ART reward
- Real community impact: bulletins reach NFT creators and field communities in East Africa

---

## EMAIL

**Subject:** `Curating security intelligence for NFT communities — paid with ART tokens · Exotopia`

```
Hello {{first_name}},

I am reaching out because you work in the area where blockchain security
meets real communities — and we are building something that needs that eye.

---

WHAT WE ARE DOING

Exotopia is an open-source platform for community NFT minting and field data
recording, used primarily by communities in East Africa and globally through the
SCD Hub network. Our users — field workers, artists, WATSAN teams — hold wallets,
mint NFTs, and transact on Polygon and Celo. They are not security researchers.

The CVE Program is under significant structural strain right now (as you know).
The gap between a CVE disclosure and useful community guidance for non-specialist
audiences is getting wider. We want to close it for our specific stack.

---

THE BULLETIN

We are building the Exotopia Security Bulletin — a curated feed of CVEs and
smart contract disclosures filtered for:

· EVM clients (geth, Nethermind, Besu)
· Smart contract libraries (OpenZeppelin, Solmate)
· JS/TS chain libraries (ethers.js v6, viem, wagmi)
· Wallet software (MetaMask, WalletConnect)
· IPFS / NFT storage layers
· Polygon, Celo, Algorand, Solana infrastructure

Each bulletin entry is reviewed by at least two people, assigned an NFT Impact
Rating (separate from CVSS), and accompanied by plain-language action steps.

---

HOW CONTRIBUTORS ARE REWARDED

Four roles per bulletin:

  Submitter  — finds the CVE, writes the initial draft       → 5 ART
  Verifier   — second person confirms accuracy + impact       → 3 ART
  Curator    — adds plain language summary + action steps     → 8 ART
  Action-taker — settlement owner marks bulletin acted upon   → 2 ART

ART (Activity Reward Tokens) are on-chain, resellable, and earned by the same
mechanism as field workers doing water quality checks. This is intentional —
we treat security intelligence as community field work.

For Critical / High impact bulletins: the Curator may mint the bulletin as a
$SUNLIGHT NFT. 99% of any secondary sale goes to the Curator. The bulletin
becomes a citable, permanent knowledge record on the blockchain.

---

RESPONSIBLE DISCLOSURE

If you discover a vulnerability affecting Exotopia contracts or dependencies:
- Report privately — 90-day embargo, same as Google Project Zero standard
- We assess within 48 hours
- Confirmed reporters receive ART reward and attribution in the bulletin
- Full spec: SPEC_SECURITY_BULLETIN.md (GPL v3, in our public repo)

---

TO GET INVOLVED

Reply with:
- One CVE you have seen recently that you think deserved better community guidance
- Your preferred role (Submitter / Verifier / Curator — or all three)
- Your wallet address if you want ART rewards sent directly

We are starting with a small group. No KYC, no platform account required for
the first cohort — just a wallet address and a genuine security eye.

{{sender_name}}
{{sender_role}} · SCD Hub
{{sender_email}}

GPL v3 · All bulletin content open source · No NDAs
Full spec: SPEC_SECURITY_BULLETIN.md
```

---

## FOLLOW-UP — AFTER FIRST CONTRIBUTION

**Subject:** `Your first bulletin entry is live — {{first_name}} · Exotopia Security`

```
{{first_name}},

Your submission for {{cve_id}} has been verified and published.

ART disbursement: {{art_earned}} ART → {{wallet_address_short}}…
Bulletin ID: {{bulletin_id}}
Published: {{bulletin_url}}

{{#if minted_as_sunlight}}
This bulletin was minted as a $SUNLIGHT NFT — permanent knowledge record.
Your Curator credit is on-chain.
{{/if}}

Thank you. This reached {{reach_count}} settlement owners.

SCD Hub
```

---

## NOTES FOR SENDER

- Target audiences: Trail of Bits community, Immunefi contributors, Ethereum security Discord, Web3 security Twitter/X community, blockchain developer meetups
- Lead with the CVE Program strain angle — it's genuinely resonant right now (2025-2026)
- Do not oversell ART tokens financially — describe them as "recognition currency" not "income"
- Emphasise GPL v3 and open source — this audience values sovereignty and citeability
- For auditors at firms: note the bulletin is separate from their day job — informal contribution welcome
