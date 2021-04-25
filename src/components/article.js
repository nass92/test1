import React from "react"
import ListArticle from "./articleList"
import { coins } from "../listcoin"

const BlockArticle = ({ crypto }) => {
  const tab = []
  if (crypto === ' ') {
    for (let i = 0; i < coins.length; i++) {
      tab.push(<ListArticle title={coins[i].title} text={coins[i].text} button={coins[i].button} />)
    }
  } else {
    for (let i = 0; i < coins.length; i++) {
      if (coins[i].button.startsWith(crypto))
        tab.push(<ListArticle title={coins[i].title} text={coins[i].text} button={coins[i].button} />)
    }
  }


  return (tab.map(a => a))
}
export default BlockArticle