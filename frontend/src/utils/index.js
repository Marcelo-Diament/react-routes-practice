const cleanString = (string, spaceToHyphen = false, keepHyphen = true) => {
  let stringClean = string
    .replace(/á|ä|â|à|ã/gi, 'a')
    .replace(/é|ë|ê|è/gi, 'e')
    .replace(/í|ï|î|ì/gi, 'i')
    .replace(/ó|ö|ô|ò|õ/gi, 'o')
    .replace(/ú|ü|û|ù/gi, 'u')
    .replace(/ç/gi, 'c')
    .toLowerCase()
  let stringHyphenKeep = !keepHyphen ? stringClean.replace(/-/gi, '') : stringClean
  stringClean = spaceToHyphen ? stringHyphenKeep.replace(/\s/gi, '-') : stringHyphenKeep.replace(/\s/gi, '')
  return stringClean
}

export { cleanString }