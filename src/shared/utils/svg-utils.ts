function getSvgURL(name: string) {
    return new URL(`../../assets/icons/${name}.svg`, import.meta.url).href
}

export {getSvgURL}