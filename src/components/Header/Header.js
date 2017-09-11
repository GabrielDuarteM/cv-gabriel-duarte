import React from "react"

import Avatar from "../Avatar/Avatar"
import BarraIdiomas from "../BarraIdiomas/BarraIdiomas"
import constants from "../../constants"

const styles = {
  divider: {
    height: 13,
    backgroundColor: constants.secondaryColor,
    marginTop: -100,
    marginLeft: 70,
  },
  headerText: {
    textAlign: "center",
    fontSize: 40,
    color: constants.secondaryColor,
    marginBottom: -90,
  },
  nome: {
    fontWeight: 100,
  },
  cargo: {
    fontSize: 25,
    color: constants.highlightColor,
  },
}

const Header = ({ img, nome, sobrenome, cargo, alterarIdioma }) => {
  return (
    <div>
      <div style={styles.headerText}>
        <span style={styles.nome}>{nome}</span>
        <span>{sobrenome}</span>
        <div style={styles.cargo}>{cargo}</div>
      </div>
      <Avatar img={img} />
      <BarraIdiomas alterarIdioma={alterarIdioma} />
      <div style={styles.divider} />
    </div>
  )
}

export default Header
