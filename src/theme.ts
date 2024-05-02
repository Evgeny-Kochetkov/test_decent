const black = '#212121'
const smoke = '#D8D7DB'
const dark = '#1A1A1A'
const yellow = '#FDDD0A'

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktopS: '1680px',
    desktopM: '1920px',
    desktopL: '2560px'
}

export const device = {
    mobileS: `max-width: ${size.mobileS}`,
    mobileM: `max-width: ${size.mobileM}`,
    mobileL: `max-width: ${size.mobileL}`,
    tablet: `max-width: ${size.tablet}`,
    laptop: `max-width: ${size.laptop}`,
    laptopL: `max-width: ${size.laptopL}`,
    desktopS: `max-width: ${size.desktopS}`,
    desktopM: `max-width: ${size.desktopM}`,
    desktopL: `max-width: ${size.desktopL}`
}

export const theme = {
    colors: {
        black,
        smoke,
        dark,
        yellow
    },
    device
}