import React from "react"
import LeftColumnTitle from "../LeftColumnTitle/LeftColumnTitle"

const sty = {
  linklessLink: { color: "inherit", textDecoration: "none" },
}

const Contato = ({ contato }) => {
  return (
    <div>
      <LeftColumnTitle titulo={contato.titulo} />
      {contato.contatos.map((e, i) => {
        let icone = e.faIcon ? <i className={"fa " + e.faIcon + " fa-2x"} aria-hidden="true" /> : ""
        let textHtml = (
          <div>
            {icone} {e.titulo}
          </div>
        )
        let contatoHtml = textHtml

        if (e.link) {
          contatoHtml = (
            <a style={sty.linklessLink} href={e.link}>
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
