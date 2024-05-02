import styled, { css, keyframes } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { smoke, dark, yellow }, device } = theme

export const SFooter = styled.footer`
    margin: 0 72px;
    padding: 20px 0 15px 0;
`

export const SHr = styled.hr`
    width: 100%;
    margin: 20px 0;
    border: none;
    border: 1px solid ${smoke};
`

export const SNavUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    font-size: 30px;

    >li{
        &::before{
            font-size: 14px;
        }
    }
`

export const SBottomFooter = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SPolicy = styled.p`
    display: flex;
    flex-direction: column;
    gap: 5px;
`