import styled, { css, keyframes } from 'styled-components'

import { theme } from '../../../theme'

const { colors: { smoke, dark, yellow }, device } = theme

export const SSection = styled.section`
    padding: 20px 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SInput = styled.input`
    margin-top: 15px;
    height: 40px;
    width: 100%;
    max-width: 500px;
    background: transparent;
    border-radius: 10px;
    border: 1px solid ${smoke};
    color: ${dark};
    padding: 0 20px;    

    &::placeholder {
        color: rgba(18, 3, 9, 0.50);
    }

    @media (${device.mobileL}) {
        margin-top: 20px;
    }

    .error {
        border: 1px solid #EB5757;
    }
`

export const SBtnWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const SButton = styled.button<{$marginTop: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({$marginTop}) => $marginTop};
    height: 64px;
    max-width: 200px;
    width: 100%;
    border-radius: 100px;
    font-size: 24px;
    font-weight: 700;
    color: #FFF;
    background-color: ${smoke};
    transition: 0.1s all;

    &:hover {
        background-color: ${dark};
        color: #FFF;
        border: none;
    }
`