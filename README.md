<p align="center">
    <a href="https://github.com/cybearl/genesis" target="_blank">
        <img src="https://raw.githubusercontent.com/cybearl/genesis/main/assets/logo.png" width="350" alt="Genesis logo">
    </a>
</p>

<p align="center">
    <a href="https://github.com/yoratoni" target="_blank">
        <img src="https://img.shields.io/badge/made%20by-Yoratoni-858FF0?style=flat-square">
    </a>
    <a href="https://github.com/cybearl/genesis/blob/main/LICENSE" target="_blank">
        <img src="https://img.shields.io/github/license/cybearl/genesis?color=D962F2&style=flat-square">
    </a>
</p>


Work in progress..
------------------
This repository contains a list of strategies than can be used by the governance system of the bot.
The strategies are based on the [technical analysis](https://en.wikipedia.org/wiki/Technical_analysis) of the market.

Each of these strategies are represented by a single linear function that will be used to determine if a trade should be made or not
based on the input data, returning a standardized object that contains a single set of statistics and the decision to make.

We decided to use a linear function as each strategy will be called by the SP (Strategy Pool).
It is easier and more performant to store single sets of data (outputs) per strategy inside the SP
than storing them individually for each strategy, as they could be represented by a class instead of a function.

The reason why it is easier/faster is simply because using classes would require to instantiate each strategy
and keep them in memory, which is not really a good idea as we want to keep the SP as light as possible.

**More details later..**