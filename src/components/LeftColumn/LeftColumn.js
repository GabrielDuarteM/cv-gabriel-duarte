import React from "react"
import { injectIntl } from "react-intl"

import ContatosList from "../ContatoList/ContatoList"
import ChipList from "../ChipList/ChipList"

const styles = {
  container: {
    height: "100%",
    float: "left",
    textAlign: "right",
    marginTop: 90,
    marginLeft: 40,
  },
}

const LeftColumn = ({ intl, contatos, linguagens, competencias }) => {
  return (
    <div style={styles.container}>
      <ContatosList contatos={contatos} />
      <ChipList titleId={"left-col.linguagens"} chipList={linguagens} />
      <br />
      <ChipList titleId={"left-col.competencias"} chipList={competencias} />
    </div>
  )
}

export default injectIntl(LeftColumn)
