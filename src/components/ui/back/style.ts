import styled from 'styled-components'

import { theme } from '../../../theme'

const { colors: { smoke, dark, yellow }, device } = theme

export const SBackWrap = styled.div`
    display: flex;
    width: 100%;
`

export const SBack = styled.a`
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${dark};
    font-family: var(--font-road-radio);
    font-size: 20px;
`