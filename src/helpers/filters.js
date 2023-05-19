export const replaceTags = (str) => (str.replace(/(\<(\/?[^>]+)>)/g, ''))

export const replaceLSEP = (str) => (str.replace(/\u2028/g, ''))