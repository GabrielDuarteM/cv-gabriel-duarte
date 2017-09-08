import React from 'react'
import { injectIntl } from 'react-intl'

import constants from '../constants'

const sty = {
  place: {
    float: 'right',
    color: constants.highlightColor
  },
  data: {
    float: 'left'
  },
  expContainer: {
    color: constants.secondaryColor
  },
  descSimples: {
    fontWeight: 600
  },
  descricao: {
    marginLeft: 100
  },
  experiencia: {
    marginTop: 10,
    marginBottom: 10
  }
}

const Experiencia = ({ experiencias, intl }) => {
  return (
    <div style={sty.expContainer}>
      {
        experiencias.map((e, i) => {
          let dateOpt = e.data.formato === 'ano' ? { year: 'numeric' } : { month: '2-digit', year: '2-digit' }
          let dtFim = e.data.fim && e.data.fim !== 'hide' ? intl.formatDate(e.data.fim, dateOpt) : intl.formatMessage({ id: 'experiencia.agora' })

          return (
            <div key={i} style={sty.experiencia}>
              <div style={sty.data}>
                {intl.formatDate(e.data.inicio, dateOpt)}{e.data.fim !== 'hide' ? ' - ' + dtFim : ''}
              </div>
              <span style={sty.place}>
                {intl.formatMessage({ id: e.lugar })}
              </span>
              <div style={sty.descricao}>
                <div style={sty.descSimples}>{intl.formatMessage({ id: e.descSimples })}</div>
                <div>{intl.formatMessage({ id: e.descricao })}</div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default injectIntl(Experiencia)
