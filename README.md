<p align="center">
    <a href="https://github.com/cybearl/genesis" target="_blank">
        <img src="https://raw.githubusercontent.com/cybearl/genesis/main/assets/logo.png" width="350" alt="Genesis logo">
    </a>
</p>

<p align="center">
    <a href="https://github.com/yoratoni" target="_blank">
        <img src="https://img.shields.io/badge/made%20by-Yoratoni-858FF0?style=flat-square">
    </a>
    <a href="https://github.com/cybearl/strategies/blob/main/LICENSE" target="_blank">
        <img src="https://img.shields.io/github/license/cybearl/strategies?color=D962F2&style=flat-square">
    </a>
    <a href="https://github.com/cybearl/strategies/issues" target="_blank">
        <img src="https://img.shields.io/github/issues-raw/cybearl/strategies?color=FF8D70&style=flat-square">
    </a>
    <a href="https://github.com/cybearl/strategies/blob/main/package.json" target="_blank">
        <img src="https://img.shields.io/github/package-json/v/cybearl/strategies?color=FDD384&style=flat-square">
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

Standard strategy format
------------------------
Each strategy should be a function that takes a single object as input
and returns a standardized object as output.

Such as this:
```typescript
/**
 * Strategy main function.
 * @param storage Standard strategy I/O input storage.
 * @returns Standard strategy I/O output storage.
 * @source [author.](video link)
 */
export default function run(storage: NsStrategy.storage): NsStrategy.storage {


    return storage;
}
```

Dependant of Genesis
--------------------
This repository is an entire part of the Genesis project, we are using two TS endpoints
to link the Genesis repo and the sub strategies repo together.

These two endpoints can be found inside the `src/utils` directory of this repository.
it allows better control of the imports between the two repositories. Now,
this repo can be used alone without the need of Genesis, you just have to change the imports
and exports inside the endpoint files, add the missing files locally, to make it work.

Note that you should also check the `tsconfig.json` file, certainly by setting "composite" to true
and commenting out "rootDirs" to replace it by the classic "rootDir" option set to "./src".

Not really useful but it's a good thing to know.