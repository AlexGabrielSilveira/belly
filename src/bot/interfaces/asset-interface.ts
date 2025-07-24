export interface AssetInterface {
    price: number;
    priceopen?: number;
    high: number;
    low: number;
    volume: number;
    marketcap?: number;
    tradetime?: Date;
    volumeavg: number;
    pe?: number;
    eps?: number;
    high52?: number;
    low52?: number;
    change: number;
    changepct?: number;
    closeyest?: number;
    shares: number;
    ticker: string;
}