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

Standard strategy format
------------------------
Each strategy should be a function that takes a single object as input and returns a standardized object as output.
Such as this (replace xxx with the strategy name).

```typescript
/**
 * Xxx strategy.
 * @param input Standard strategy input.
 * @param index Index of the current data to process.
 * @source [AUTHOR_NAME](SOURCE_LINK)
 */
export default function xxxStrategy(
    input: NsStrategy.input,
    index: number
): NsStrategy.output {
    return {

    };
}
```

Definition file import
----------------------
The `strategy.d.ts` file is imported from the main Genesis repository and is used to define the standard strategy format.
As these types are spread across multiple files, it is easier to import them from the main repository instead of
copying them here and having to update them manually.

**But** we made it simple for you, all imports of this definition file from the strategies points to the `utils/imports.ts` file,
so you don't have to change all of them.

So, if you want to use this repo as a standalone, you will need to copy the `strategy.d.ts` file from the main repo
and place it in a `src/types` folder.

You should also change the NsStrategy `import` statement in the `utils/imports.ts` file to point to the local file instead of the main repo.
