
# Cardano

## Compliments

Cardano has a great marketing team, and a [very effective MLM like recruiting scheme](https://twitter.com/jackniewold/status/1466823469564248068)

There is a lot of ADA, making the individual price lower, which confuses newbies who think it's "cheap" because they don't understand market caps.

## Criticisms

### Bad Tech

Cardano currently has 20s block times, little data availability, and problems with concurrency. On a technical level it's similar to Ethereum in 2016.

### Concurrency Problem

Cardano uses UTXO's to manage state. You can think of these like little pipes that money or data is sent through. Once they're done on their task they create a new UTXO that all their money + data goes into, and they self destruct. Your wallet is just a collection of all the UTXO's that you own. This is also how Bitcoin works.

The problems occur when there is one big pool of money or data in a smart contract that multiple people want to access, like say in a Liquidity pool for a Decentralized exchange.

Multiple people want to trade against these liquidity pools, and it's best to keep assets in as few pools as possible so that they aren't drained when people trade against them. Each liquidity pool has a UTXO.

When Alice trades with that liquidity pool, she destroys that UTXO and creates a new one for the liquidity pool.

When Bob trades with that liquidity pool, he needs to point to the current Liquidity pool UTXO. If he uses the one he knows about, it was just destroyed by Alice, so cannot be used.

Bob could trade against the UTXO that Alice just created, but a block hasn't been published yet, so it hasn't been created yet. Bob has to wait for the next block to trade against the UTXO that Alice created.

This means Decentralized Exchanges on Cardano can only handle one interaction per block.

This can be fixed with a sequencer, that for each block it ties the transactions together in an order. But Cardano has no sequencers, so the sequencer would need to be run off-chain by someone in a centralized way, which gives them powers to censor transactions, front-run them etc. This defeats the point of having a decentralized exchange.

A Decentralized sequencer could be made eventually, or some kind of side chain that handles the coordination problem. But this requires a lot more development thought and time, when other chains don't have this problem. 

### No Fee Market




### Bad Choice of Programming Language

Cardano uses Haskell as it's primary language. While it is a nice language, there are [very few developers who understand and enjoy programming in haskell](https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies)

### Slower Development

Cardano has been in development since 2016, and only just released smart contracts in 2021. It still (as of December 10, 2021) has no working dapps on mainnet.

While some see this as an advantage, that they are "taking their time to make sure it's right" this hasn't proven to be better in practice, as Cardano is only now 
releasing similar technology to what Ethereum had 5 years prior, and is releasing upgrades even slower than Ethereum.