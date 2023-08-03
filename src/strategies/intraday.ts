import { NsStrategy } from "utils/imports"


/**
 * Intraday strategy.
 * @param input Standard strategy I/O storage.
 * @returns Standard strategy I/O storage.
 * @source [Algovibes](https://www.youtube.com/watch?v=XA5EI0rmYeA)
 */
export default function intradayStrategy(
    input: NsStrategy.storage
): NsStrategy.storage {
    const storage = input;

    return {
        ...storage
    };
}