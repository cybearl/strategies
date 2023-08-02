import NsStrategy from "types/strategy";

import BaseStrategy from "strategies/base";


/**
 * Strategy 1 implementation (Intraday Trading Strategy).
 * @link https://www.youtube.com/watch?v=XA5EI0rmYeA
 */
export default class Strategy1__INTRADAY extends BaseStrategy {
    /**
     * Main function to run the strategy.
     * @param input The input data.
     * @returns The output data.
     */
    run(input: NsStrategy.input): NsStrategy.output {
        let buyPrice = 0;

        for (const priceBar of input.priceBars) {
            priceBar.pctChange = priceBar.close / priceBar.open - 1;
            this.percentage = 0.002;

            let boughtAt = 0;
            let tp = 0;
            let sl = 0;

            let index = 1;

            if (!this._inPosition) {
                if (priceBar.pctChange > this.percentage / 2) {
                    buyPrice = priceBar.close; // Close
                    boughtAt = index;

                    this._output.buyTimestamps.push(priceBar.timestamp);
                    this._output.buyPrices.push(buyPrice);

                    tp = buyPrice * (1 + this.percentage);
                    sl = buyPrice * (1 - this.percentage);

                    this._inPosition = true;
                }
            } else if (index > boughtAt) {
                if (priceBar.high > tp) {
                    // High
                    this._output.rawProfits.push(priceBar.close - buyPrice);

                    this._output.sellTimestamps.push(priceBar.timestamp);
                    this._output.sellPrices.push(priceBar.close);
                } else if (priceBar.low < sl) {
                    // Low
                    this._output.rawProfits.push(priceBar.close - buyPrice);

                    this._output.sellTimestamps.push(priceBar.timestamp);
                    this._output.sellPrices.push(priceBar.close);
                }

                this._inPosition = false;
            }

            index++;
        }

        return this._output;
    }
}