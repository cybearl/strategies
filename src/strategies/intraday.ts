import { NsStrategy } from "../utils/imports"


/**
 * Strategy main function.
 * @param storage Standard strategy I/O input storage.
 * @returns Standard strategy I/O output storage.
 * @source [Algovibes.](https://www.youtube.com/watch?v=XA5EI0rmYeA)
 */
export default function run(
    storage: NsStrategy.storage
): NsStrategy.storage {

    console.log("Intraday strategy running...");

    return storage;
}