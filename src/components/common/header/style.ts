import styled, { css, keyframes } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { smoke, dark, yellow }, device } = theme

export const SHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 72px;
    padding: 20px 0 15px 0;
    min-height: 80px;
    border-bottom: 2px solid ${smoke};
`

export const SNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 52px;
`

export const SNavUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 32px;
`

const numCountry = css`
    &:before {
        content: attr(data-сountry);
        position: absolute;
        right: -12px;
        top: -2px;
        font-size: 10px;
        cursor: pointer;
    }
`

export const lineLink = css`
    &:after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0%;
        height: 1px;
        background-color: ${dark};
        transition: width 0.3s ease-out;
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
`

export const SNavLi = styled.li<{ $numCountry?: number; }>`
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    color: ${dark};

    ${({$numCountry}) => $numCountry ? numCountry: null}

    ${lineLink}
`

const strokeAnimation = keyframes`
    0% {
        stroke-dashoffset: 295;
        stroke-dasharray: 25 270;
    }
    50% {
        stroke-dashoffset: 68;
        stroke-dasharray: 59 236;
    }
    65% {
        stroke-dashoffset: 59;
        stroke-dasharray: 59 236;
    }
    100% {
        stroke-dashoffset: 68;
        stroke-dasharray: 59 236;
    }
`

const strokeAnimationReverse = keyframes`
    0% {
        stroke-dashoffset: 68;
        stroke-dasharray: 59 236;
    }
    50% {
        stroke-dashoffset: 290;
        stroke-dasharray: 25 270;
    }
    65% {
        stroke-dashoffset: 295;
        stroke-dasharray: 25 270;
    }
    100% {
        stroke-dashoffset: 290;
        stroke-dasharray: 25 270;
    }
`

const closeMenu = css`
    svg {
        & > use:nth-of-type(1) {
            opacity: 1;
            stroke-dashoffset: 221;
            stroke-dasharray: 46 249;
            transition: stroke-dashoffset 0.12s linear 0.2s,
            stroke-dasharray 0.12s linear 0.2s,
            opacity 0s linear 0.2s;
        }

        & > use:nth-of-type(2) {
            animation: ${strokeAnimationReverse} 1.2s ease-out forwards;
        }
    }
`

const openMenu = css`
    svg {
        use {
            &:nth-of-type(1) {
                stroke-dashoffset: 175;
                stroke-dasharray: 0 295;
                opacity: 0;
                transition: stroke-dashoffset 0.07s linear 0.07s,
                stroke-dasharray 0.07s linear 0.07s,
                opacity 0s linear 0.14s;
            }

            &:nth-of-type(2) {
                animation: ${strokeAnimation} 1.2s ease-out forwards;
            }
        }
    }
`

export const SMenuBtn = styled.button<{ $activeMenu: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    font-family: var(--font-road-radio);
    font-size: 18px;
    font-weight: bold;
    color: ${dark};
    max-width: 115px;

    > span {
        margin-top: 3px;
        width: 60px;
        text-align: end;
    }

    svg {
        fill: none;
        stroke: ${dark};
        stroke-width: 5px;
        stroke-linecap: round;
        stroke-linejoin: round;
        height: 25px;
        width: 50px;
    }

    ${({$activeMenu}) => $activeMenu ? openMenu : closeMenu}
`