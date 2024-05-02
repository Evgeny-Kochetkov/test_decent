'use client'

import Link from 'next/link'
import Image from 'next/image'

import {
    useState,
    useCallback
} from 'react'

import { ICountriesData } from '@/types/countriesData' 

import {
    SSectionCountries,
    SCountries,
    SAutoCard,
    SH2,
    SMenu,
    SLabel,
    SFilter
} from './style'

import noImage from '../../../../public/images/no_image.png'

export const Countries = ({ countries } : { countries: ICountriesData[]; }) => {
    console.log(countries) 
    const [sortRegion, setSortRegion] = useState('0')

    const handleSortChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        const id = event.target.id
        switch(id) {
            case 'product-region':
                setSortRegion(value)
                break
            default:
                break
        }
    }, [])

    return (
        <SSectionCountries id='countries'>
            <SH2>
                AVAILABLE COUNTRIES
            </SH2>
            <SMenu>
                <SLabel htmlFor='product-region'>
                    Region:
                    <SFilter
                        name='product-region'
                        id='product-region'
                        value={sortRegion}
                        onChange={handleSortChange}
                    >
                        <option value='0'>All</option>
                        {Array.from(new Set(countries.map(item => item.region))).map((item, i) => {
                            return (
                                <option key={i+1} value={item}>
                                    {item}
                                </option>
                            )
                        })}
                    </SFilter>
                </SLabel>
            </SMenu>
            <SCountries>
                {countries
                .filter((item) => sortRegion !== '0' ? item.region === sortRegion : item)
                .map(({area, capital, flags, name, population, region}) => {
                    return (
                        <li key={area+name.common}>
                            <Link href={`/country/${name.common.toLocaleLowerCase().replace(/\s+/g, '_')}`}>
                                <SAutoCard>
                                    <Image
                                        src={flags.png ? flags.png : noImage}
                                        alt={flags.alt}
                                        height={250}
                                        width={300}
                                        style={{ 'objectFit': 'contain' }}
                                    />
                                    <p>
                                        <strong>Name:</strong> {name.common}
                                    </p>
                                    <p>
                                        <strong>Capital:</strong> {Array.isArray(capital) ? capital[0] : capital}
                                    </p>
                                    <p>
                                        <strong>Region:</strong> {region}
                                    </p>
                                    <p>
                                        <strong>Population:</strong> {population}
                                    </p>
                                </SAutoCard>
                            </Link>
                        </li>
                    )
                })}
            </SCountries>
        </SSectionCountries>
    )
}