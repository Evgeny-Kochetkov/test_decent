'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/redux/store'
import { toggleMenu } from '@/redux/features/menuReduser'

import { useSession, signOut } from 'next-auth/react'

import {
    SHeader,
    SNav,
    SNavUl,
    SNavLi,
    SMenuBtn
} from './style'

import { navUlConfig } from './config'

import logo from '../../../../public/images/logo.png'

export const Header = () => {

    const dispatch = useDispatch()
    const session = useSession()

    const menuState = useAppSelector((state) => state.menuReduser.menuState)
    
    return (
        <SHeader>
            <Link href='/'>
                <Image
                    src={logo}
                    alt='Country'
                    height={80}
                    priority
                    style={{ 'objectFit': 'contain' }}
                />
            </Link>
            <SNav>
                <SNavUl>
                    {navUlConfig.map(({name, path, numCountry}) => {
                        return (
                            <SNavLi
                                key={name}
                                data-country={numCountry}
                                $numCountry={numCountry}
                            >
                                <Link
                                    id={name}
                                    href={`/${path}`}
                                >
                                    {name}
                                </Link>
                            </SNavLi>
                        )
                    })}
                    {session?.data
                        ? <SNavLi>
                            <Link href='/profile'>
                                Profile
                            </Link>
                          </SNavLi>
                        : null
                    }
                    {session?.data
                        ? <SNavLi>
                            <Link
                                href='#'
                                onClick={() => signOut({callbackUrl: '/'})}
                            >
                                Sign Out
                            </Link>
                          </SNavLi>
                        : <SNavLi>
                            <Link href='/signin'>
                                Sign In
                            </Link>
                          </SNavLi>
                    }
                </SNavUl>
                <SMenuBtn
                    onClick={() => dispatch(toggleMenu())}
                    $activeMenu={menuState}
                >
                    <svg>
                        <use xlinkHref='#menu'/>
                        <use xlinkHref='#menu'/>
                    </svg>
                    <span>
                        {menuState ? 'CLOSE': 'MENU'}
                    </span>
                </SMenuBtn>
                <svg xmlns='http://www.w3.org/2000/svg' style={{'display': 'none'}}>
                    <symbol xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 56' id='menu'>
                        <path d='M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4'/>
                    </symbol>
                </svg>
            </SNav>
        </SHeader>
    )
}