import React, { Component } from "react"
import { injectIntl } from "react-intl"

import Header from "../../components/Header/Header"
import LeftColumn from "../../components/LeftColumn/LeftColumn"
import ExperienciaList from "../../components/ExperienciaList/ExperienciaList"
import imgPerfil from "../../assets/img/profile.jpg"
import data from "../../data.json"

class Curriculum extends Component {
  render() {
    let { intl } = this.props

    const contatos = [
      {
        titulo: this.props.intl.formatMessage({ id: "left-col.email" }),
        contatos: [
          { titulo: "gabrielqduarte", link: "mailto:GabrielQDuarte@gmail.com" },
          { titulo: "@gmail.com", link: "mailto:GabrielQDuarte@gmail.com" },
        ],
      },
      {
        titulo: this.props.intl.formatMessage({ id: "left-col.social" }),
        contatos: [
          { titulo: "/GabrielDuarteM", faIcon: "fa-github", link: "https://github.com/GabrielDuarteM/" },
          {
            titulo: "/GabrielDuarteM",
            faIcon: "fa-linkedin-square",
            link: "https://www.linkedin.com/in/GabrielDuarteM/",
          },
        ],
      },
    ]

    const linguagens = [
      { titulo: "JS (ES6)" },
      { titulo: "React" },
      { titulo: "Redux" },
      { titulo: "Node.js" },
      { titulo: "Webpack" },
      { titulo: "C#" },
      { titulo: "Oracle" },
      { titulo: "SQL Server" },
    ]

    const competencias = [
      { titulo: intl.formatMessage({ id: "competencias.proatividade" }) },
      { titulo: intl.formatMessage({ id: "competencias.curiosidade" }) },
      { titulo: intl.formatMessage({ id: "competencias.paixão" }) },
      { titulo: intl.formatMessage({ id: "competencias.criatividade" }) },
      { titulo: intl.formatMessage({ id: "competencias.ambição" }) },
    ]

    return (
      <div>
        <Header
          img={imgPerfil}
          nome="Gabriel"
          sobrenome="Duarte"
          cargo={this.props.intl.formatMessage({ id: "header.cargo" })}
          alterarIdioma={this.props.alterarIdioma}
        />
        <LeftColumn contatos={contatos} linguagens={linguagens} competencias={competencias} />
        {data.map((e, i) => (
          <ExperienciaList key={i} titulo={intl.formatMessage({ id: e.id })} experiencias={e.experiencias} />
        ))}
      </div>
    )
  }
}

export default injectIntl(Curriculum)
