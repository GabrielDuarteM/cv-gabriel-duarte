import React from 'react'
import { injectIntl } from 'react-intl'

import constants from '../../constants'

const sty = {
  place: {
    float: 'right',
    color: constants.highlightColor,
    marginLeft: 8,
  },
  data: {
    float: 'left',
    marginRight: 16,
  },
  expContainer: {
    color: constants.secondaryColor,
  },
  descSimples: {
    fontWeight: 600,
    marginBottom: 8,
  },
  descricao: {
    marginLeft: 116,
  },
  experiencia: {
    margin: '24px 0',
  },
}

const Experiencia = ({ experiencias, intl, traduzido }) => {
  return (
    <div style={sty.expContainer}>
      {experiencias.map((e, i) => {
        let dateOpt =
          e.data && e.data.formato === 'ano'
            ? { year: 'numeric' }
            : { month: '2-digit', year: '2-digit' }
        let dtFim =
          e.data && e.data.fim && e.data.fim !== 'hide'
            ? intl.formatDate(e.data.fim, dateOpt)
            : intl.formatMessage({ id: 'experiencia.agora' })

        const Wrapper = e.link ? 'a' : React.Fragment

        return (
          <div key={i} style={sty.experiencia}>
            {e.data && (
              <div style={sty.data}>
                {intl.formatDate(e.data.inicio, dateOpt)}
                {' - ' + dtFim}
              </div>
            )}
            <span style={sty.place}>
              {traduzido ? intl.formatMessage({ id: e.lugar }) : e.lugar}
            </span>
            <div style={(!e.link && sty.descricao) || undefined}>
              <Wrapper
                style={{ color: '#005784' }}
                href={e.link}
                target="_blank"
              >
                <div style={sty.descSimples}>
                  {traduzido
                    ? intl.formatMessage({ id: e.descSimples })
                    : e.descSimples}
                </div>
              </Wrapper>
              <div>
                {traduzido
                  ? intl.formatMessage({ id: e.descricao })
                  : e.descricao}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default injectIntl(Experiencia)
