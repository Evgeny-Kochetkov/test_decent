'use client'

import { Header } from '../common/header'
import { Footer } from '../common/footer'
import { CustomTooltip } from '../ui/customTooltip'

export const Layout = ({ children } : { children: React.ReactNode; }) => {
    return (
        <>
            <Header/>
                {children}
                <CustomTooltip/>
            <Footer/>
        </>
    )
}