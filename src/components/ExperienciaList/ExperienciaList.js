import React from 'react'

import Experiencia from '../Experiencia/Experiencia'
import constants from '../../constants'

const sty = {
  titulo: {
    fontWeight: '600',
    fontSize: 23,
  },
  firstLetters: {
    color: constants.highlightColor,
  },
  expList: {
    marginLeft: 240,
    marginTop: 30,
  },
}

const ExperienciaList = ({ titulo, experiencias, traduzido = true, intl }) => {
  const firstLetters = titulo.substr(0, 3)
  const rest = titulo.substr(3, titulo.length)

  return (
    <div style={sty.expList}>
      <div style={sty.titulo}>
        <span style={sty.firstLetters}>{firstLetters}</span>
        {rest}
      </div>
      <Experiencia traduzido={traduzido} experiencias={experiencias} />
    </div>
  )
}

export default ExperienciaList
