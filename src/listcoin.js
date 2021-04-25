export const coins = [
  {
    name: "Bitcoin",
    start: "Bitcoin est un réseau de paiement novateur et une nouvelle forme d'argent.",
    tags: ["BTC", "btc", "bit", "bitcoin"],
  },
]

export const allTags = (list) => {
  /* retourner la liste des tags uniques */
  let listTotal = []
  for (let element of list) {
    if ("tags" in element) {
      listTotal = listTotal.concat(element.tags)
    }
  }
  const listTagsUnique = []
  listTotal.forEach((el) => {
    if (!listTagsUnique.includes(el)) {
      //listTagsUnique = listTagsUnique.concat([el])
      listTagsUnique.push(el)
    }
  })
  return listTagsUnique
}

export const uniqueTags = allTags(coins)



export default coins