import styled, { css, keyframes } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { smoke, dark, yellow }, device } = theme

export const SMainScreen = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const STitle = styled.h1`
    font-size: 30px;
    margin-top: 80px;
    font-family: var(--font-road-radio);
    color: ${smoke}
`

export const SSubtitle = styled.h2`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 140px;
`

const bounce = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(7px);
    }
`

export const SPath = styled.path`
    animation: ${bounce} 2s infinite;
`