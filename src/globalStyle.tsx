'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        width: calc(100vw - (100vw - 100%));
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        font-family: var(--font-gilroy);
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        letter-spacing: 0.1px;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    ol,
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul[class],
    ol[class],
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd,
    hr {
        margin: 0;
    }

    a {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        display: block;
    }

    article>*+* {
        margin-top: 1em;
    }

    input,
    button,
    textarea,
    select {
        border: none;
        outline: none;
        padding: 0;
        font: inherit;
    }

    button {
        cursor: pointer;
        background: none;
        >*{
            pointer-events: none;
        }
    }

    address {
        font-style: normal;
    }

    video::-webkit-media-controls-start-playback-button {
        display: none !important;
    }
    
    video::-webkit-media-controls-enclosure {
        overflow: hidden;
        width: 0;
        height: 0;
        opacity: 0;
    }
`