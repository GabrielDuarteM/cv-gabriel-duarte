import React from "react"

import flagBr from "../../assets/img/flag-brazil.png"
import flagUsa from "../../assets/img/flag-usa.png"

const styles = {
  img: {
    cursor: "pointer",
    height: 20,
  },
  imgContainer: {
    float: "right",
    marginTop: 70,
  },
}

const BarraIdiomas = ({ alterarIdioma }) => {
  return (
    <div style={styles.imgContainer}>
      <img style={styles.img} src={flagBr} alt="Português" onClick={() => alterarIdioma("pt")} />{" "}
      <img style={styles.img} src={flagUsa} alt="English" onClick={() => alterarIdioma("en")} />
    </div>
  )
}

export default BarraIdiomas
