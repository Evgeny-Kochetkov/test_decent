import styled, { css, keyframes } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { smoke, dark, yellow }, device } = theme

export const SSectionCountries = styled.section`
    margin-top: 130px;   
    display: flex;
    flex-direction: column;
    align-items: center;    
    padding: 0 72px;
`

export const SH2 = styled.h2`
    font-family: var(--font-road-radio);
    font-size: 50px;
    color: ${dark};
    margin-bottom: 40px;
`

export const SCountries = styled.ul`
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr 1fr;
    gap: 20px;
`

export const SAutoCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${smoke};
    border-radius: 30px;
    padding: 0 15px 20px 15px;
    min-height: 100%;
    transition: background ease-in-out 200ms;

    &:hover {
        background: rgba(0, 0, 0, 0.05);
    }
`

export const SMenu = styled.menu`
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const SLabel = styled.label`
    display: flex;
    align-items: center;
    padding: 0 10px;
    border: 1px solid ${smoke};
    border-radius: 10px;
    min-height: 50px;
    font-weight: 500;
    font-size: 18px;
`

export const SFilter = styled.select`
    height: 50px;
    cursor: pointer;
`