import React from 'react'
import LeftColumnTitle from '../LeftColumnTitle/LeftColumnTitle'

const sty = {
  linklessLink: {
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    margin: '4px 0',
  },
}

const Contato = ({ contato }) => {
  return (
    <div>
      <LeftColumnTitle titulo={contato.titulo} />
      {contato.contatos.map((e, i) => {
        let icone = e.faIcon ? (
          <i
            style={{ fontSize: '1.5em' }}
            className={e.faIcon}
            aria-hidden="true"
          />
        ) : (
          ''
        )

        let textHtml = (
          <div
            style={
              icone
                ? {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }
                : { textAlign: 'end', width: '100%' }
            }
          >
            {icone} {e.titulo}
          </div>
        )
        let contatoHtml = textHtml

        if (e.link) {
          contatoHtml = (
            <a target="_blank" style={sty.linklessLink} href={e.link}>
              {textHtml}
            </a>
          )
        }

        return <span key={i}>{contatoHtml}</span>
      })}
    </div>
  )
}

export default Contato
