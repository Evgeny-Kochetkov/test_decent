import { $apiRestcountries } from '.'

import { AxiosResponse } from 'axios'

export default class restcountriesServise {
    static async countries(): Promise<AxiosResponse> {
        return $apiRestcountries.get('/all?fields=area,name,capital,flags,population,region')
    }   

    static async countryItem(name: string): Promise<AxiosResponse> {
        return $apiRestcountries.get(`/name/${name}`)
    }
}