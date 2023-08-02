/* eslint-disable @typescript-eslint/no-unused-vars */
import NsStrategy from "types/strategy";
import logger from "utils/logger";

import BaseStrategy from "strategies/base";


/**
 * Strategy 4 implementation (CRYPTOcurrencies Trading Strategy).
 * @link https://www.youtube.com/watch?v=xy4gpC4rCZ8
 */
export default class Strategy4__CRYPTOCURRENCIES extends BaseStrategy {
    /**
     * Main function to run the strategy.
     * @param input The input data.
     * @returns The output data.
     */
    run(input: NsStrategy.input): NsStrategy.output {
        let slAnchor = 0;
        let buyPrice = 0;

        for (const priceBar of input.priceBars) {
            if (!this._inPosition) {
                slAnchor = priceBar.close;
                buyPrice = priceBar.close;
                this._output.buyTimestamps.push(priceBar.timestamp);
                this._output.buyPrices.push(buyPrice);
                this._inPosition = true;
            } else {
                if (priceBar.close > slAnchor) {
                    slAnchor = priceBar.close;
                } else if (priceBar.close < slAnchor * 0.97 || priceBar.close > buyPrice * 1.01) {
                    this._output.sellTimestamps.push(priceBar.timestamp);
                    this._output.sellPrices.push(priceBar.close);
                    this._inPosition = false;
                }
            }
        }

        for (let i = 0; i < this._output.buyPrices.length - 1; i++) {
            this._output.rawProfits.push(
                this._output.sellPrices[i] - this._output.buyPrices[i]
            );
        }

        return this._output;
    }
}