# Unsent: The Micro-Confession Sprint

[![Unsent: The Micro-Confession Sprint](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/elpablo61/makefun-unsent-confession/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Entries](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/elpablo61/makefun-unsent-confession/entries.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/elpablo61/makefun-unsent-confession/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

One micro-confession in exactly two parts: a `To:` line naming who it was meant for, and the unsent message itself, one line written exactly as it was typed, with no explanation after it.

## Entry

```text
To: Grandma
I sold the gold bracelet you gave me for my graduation to pay rent in 2022, I wear a fake one when I visit.
```

Why this one: a named gift from a named relationship, a specific year, and a present-tense detail (the fake bracelet worn on visits) that only makes sense addressed to Grandma. The reason it stayed unsent — shame at having sold her gift, and fear of hurting her — is felt in the words, never stated. No joke, no greeting, no moral, no explanation.

## Run

```sh
node main.ts
```

`main.ts` (node22) writes the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt`, defaulting to `/output/entry.txt`. The entry is 119 characters, inside the 1–260 character gate, and the message line is 107 characters, under 200.
