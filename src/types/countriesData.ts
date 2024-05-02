export interface ICountriesData {
    area: number;
    capital: string | string[];
    flags: {
        png: string;
        svg: string;
        alt: string;
    }
    name: {
        common: string;
        official: string;
    }
    population: string;
    region: string;
}