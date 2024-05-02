import styled, { css, keyframes } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { smoke, dark, yellow }, device } = theme

export const SSection = styled.section`
    padding: 20px 72px;
`

export const SH1 = styled.h1`
    font-size: 30px;
    margin-top: 20px;
    font-family: var(--font-road-radio);
`

export const SBlok = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`

export const SInfoBlock = styled.div`
    font-size: 30px;
`