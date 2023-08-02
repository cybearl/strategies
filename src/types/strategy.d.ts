declare namespace NsStrategy {
    /**
     * Interface for a price bar (converted from OHLCV data array).
     */
    interface priceBar {
        timestamp: number;
        open: number;
        high: number;
        low: number;
        close: number;
        volume: number;
        pctChange: number | null;
        price: number;
    }

    /**
     * Standardized interface for strategy input data.
     */
    interface input {
        priceBars: priceBar[];
    }

    /**
     * Standardized interface for strategy output data.
     */
    interface output {
        rawProfits: number[];
        buyTimestamps: number[];
        buyPrices: number[];
        sellTimestamps: number[];
        sellPrices: number[];
    }
}


export default NsStrategy;