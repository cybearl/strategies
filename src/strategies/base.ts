/* eslint-disable @typescript-eslint/no-unused-vars */
import NsStrategy from "types/strategy";


/**
 * Default class for strategy implementation.
 */
export default class BaseStrategy {
    protected percentage = 0;

    protected _inPosition = false;
    protected _inPositionArray = [false, false];

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
     * @param input The input data.
     * @returns The output data.
     */
    run(input: NsStrategy.input): NsStrategy.output {
        return this._output;
    }
}