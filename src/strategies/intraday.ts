import { NsStrategy } from "utils/imports"


/**
 * Intraday strategy.
 * @param input Standard strategy input.
 * @param index Index of the current data to process.
 * @source [Algovibes](https://www.youtube.com/watch?v=XA5EI0rmYeA)
 */
export default function intradayStrategy(
    input: NsStrategy.input,
    index: number
): NsStrategy.output {
    return {
        symbol: input.symbol
    };
}