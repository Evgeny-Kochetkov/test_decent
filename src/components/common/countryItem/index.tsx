'use client'

import Image from 'next/image'

import { ICountriesData } from '@/types/countriesData' 

import { Back } from '@/components/ui/back'

import {
    SSection,
    SH1,
    SBlok,
    SInfoBlock
} from './style'

export const СountryItem = ({ item } : { item: ICountriesData }) => {
    return (
        <SSection>
            <Back/>
            {item ? 
                <>
                    <SH1>
                        {`${item.name.common}`}
                    </SH1>
                    <SBlok>
                        {item.flags
                            ? <Image
                                src={item.flags.png}
                                alt='auto'
                                priority
                                width={690}
                                height={380}
                                style={{ 'objectFit': 'contain', 'marginTop': '50px' }}
                            />
                            : null
                        }
                        <SInfoBlock>
                            <p>
                                <strong>Capital:</strong> {item.capital}
                            </p>
                            <p>
                                <strong>Population:</strong> {item.population}
                            </p>
                            <p>
                                <strong>Region:</strong> {item.region}
                            </p>
                        </SInfoBlock>
                    </SBlok>
                </>
                :
                <div style={{'display': 'flex', 'justifyContent': 'center', 'fontSize': '34px', 'marginTop': '40px'}}>
                    Server error
                </div>
            }
            
        </SSection>
    )
}