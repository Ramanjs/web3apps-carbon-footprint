# Hedera Carbon Footprint
**Web3Apps Hackathon by MLH**

**Update: Won the "Best use of Hedera" prize at the hackathon!**

## Inspiration
Right now, there is an urgent necessity to address environmental concerns and climate change. Although the environmental impact of blockchain transactions and mining hasn't been completely overlooked, we wanted to bring more attention to the topic. I saw an opportunity to create a tool that empowers users to understand and mitigate their web3 carbon footprint. As I am new to web3, I wanted to develop a beginner-friendly but impactful solution. I implemented this idea after researching the relevant resources and Hedera's documentation.

## What it does
"Hedera Carbon Footprint" is a web application that connects with a user's Metamask wallet to fetch their transaction history on the Hedera network and estimate their carbon footprint.

## How we built it
Hedera's carbon offsets page gave an insight into how they are working towards maintaining environmental balance by purchasing carbon offsets for each quarter of the year. As we can get the number of transactions that occurred on the network for the last year from dragon glass, estimating per transaction carbon emission is possible. Since Hedera matches their carbon emissions by purchasing equal offsets, it would be even greater that each person using the network could offset the emissions caused by their transactions. The more offsets the better, right? So we utilised Hedera's javascript SDK and Rest API to allow users to simply connect their Metamask wallet to the website and get information about their portion of carbon emissions. We fetch the user's account id with the evm address obtained from the Metamask connection and then fetch the number of transactions for that account to estimate their carbon emission.

## Demo
[Demo - Vimeo](https://vimeo.com/904924745)

## Challenges we ran into
The project is pretty simple, so we faced no hard blockers. But it was certainly fun to develop it and learn more about web3 and Hedera's SDK.

## What's next for Hedera Carbon Footprint
We could add support for multiple blockchains.

**[Devpost Project Page](https://devpost.com/software/hedera-carbon-footprint)**