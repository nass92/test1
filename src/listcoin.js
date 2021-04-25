export const coins = [
  {
    title: "Bitcoin",
    text: "Bitcoin est un réseau de paiement novateur et une nouvelle forme d'argent.",
    button: "bitcoin",
  },
  {
    title: "ETHEREUM",
    text: "Bitcoin est un réseau de paiement novateur et une nouvelle forme d'argent.",
    button: "ethereum",
  },
  {
    title: "BinanceCoin",
    text: "Bitcoin est un réseau de paiement novateur et une nouvelle forme d'argent.",
    button: "binancecoin",
  },
  {
    title: "Monero",
    text: "Bitcoin est un réseau de paiement novateur et une nouvelle forme d'argent.",
    button: "monero",
  },
]
export const allbutton = (list) => {
  /* retourner la liste des button uniques */
  let listTotal = []
  for (let element of list) {
    if ("button" in element) {
      listTotal = listTotal.concat(element.button)
    }
  }
  const listbuttonUnique = []
  listTotal.forEach((el) => {
    if (!listbuttonUnique.includes(el)) {
      //listbuttonUnique = listbuttonUnique.concat([el])
      listbuttonUnique.push(el)
    }
  })
  return listbuttonUnique
}

export const uniquebutton = allbutton(coins)



export default coins