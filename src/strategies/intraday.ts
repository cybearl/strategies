import { NsStrategy } from "../utils/imports";
import logger from "../utils/logger";


/**
 * Strategy main function.
 * @param storage Standard strategy I/O input storage.
 * @returns Standard strategy I/O output storage.
 * @source [Algovibes.](https://www.youtube.com/watch?v=XA5EI0rmYeA)
 */
export default function run(
    storage: NsStrategy.storage
): NsStrategy.storage {
    const priceBar = storage.priceBars[
        storage.priceBars.length - 1
    ];

    if (!storage.inPosition) {
        if (priceBar.pctChange && priceBar.pctChange > 0.001 && priceBar.forwardLookingBias) {
            storage.lastBuyPrice = priceBar.forwardLookingBias;
            storage.targetProfit = storage.lastBuyPrice * 1.0015;
            storage.stopLoss = 0;

            storage.inPosition = true;

            logger.info(
                `Bought at ${storage.lastBuyPrice} (target profit: ${storage.targetProfit}, stop loss: ${storage.stopLoss})`
            );

            storage.stats.buyIndexes.push(storage.index);
        }
    }

    if (storage.inPosition) {
        if (priceBar.high > storage.targetProfit) {
            storage.inPosition = false;

            logger.info(`Sold at ${storage.targetProfit} (target profit)`);

            storage.stats.sellIndexes.push(storage.index);
            storage.stats.tradesWon++;
            storage.stats.trades++;

            storage.stats.profitsInBaseCurrency.push(
                storage.targetProfit - storage.lastBuyPrice
            );

            storage.stats.profitsInQuoteCurrency.push(
                (storage.targetProfit - storage.lastBuyPrice) * storage.lastBuyPrice
            );

            storage.stats.tradesWonPct = (storage.stats.tradesWon / storage.stats.trades) * 100;
            storage.stats.tradesLostPct = (storage.stats.tradesLost / storage.stats.trades) * 100;
        }

        if (priceBar.low < storage.stopLoss) {
            storage.inPosition = false;

            logger.info(`Sold at ${storage.stopLoss} (stop loss)`);

            storage.stats.sellIndexes.push(storage.index);
            storage.stats.tradesLost++;
            storage.stats.trades++;

            storage.stats.profitsInBaseCurrency.push(
                storage.stopLoss - storage.lastBuyPrice
            );

            storage.stats.profitsInQuoteCurrency.push(
                (storage.stopLoss - storage.lastBuyPrice) * storage.lastBuyPrice
            );

            storage.stats.tradesWonPct = (storage.stats.tradesWon / storage.stats.trades) * 100;
            storage.stats.tradesLostPct = (storage.stats.tradesLost / storage.stats.trades) * 100;
        }
    }

    return storage;
}