/* eslint-disable @typescript-eslint/no-unused-vars */
import NsStrategy from "types/strategy";


/**
 * Base class for strategy implementation.
 */
export default class Base {
    /**
     * Standardized way of returning the output data.
     */
    protected _output: NsStrategy.output = {
        rawProfits: [],
        buyTimestamps: [],
        buyPrices: [],
        sellTimestamps: [],
        sellPrices: []
    };

    /**
     * Main function to run the strategy.
     * @param input Standardized input data object.
     * @returns The output data.
     */
    run(input: NsStrategy.input): NsStrategy.output {
        return this._output;
    }
}