import React, { Component } from 'react'
import { injectIntl } from 'react-intl'

import Header from '../../components/Header/Header'
import LeftColumn from '../../components/LeftColumn/LeftColumn'
import ExperienciaList from '../../components/ExperienciaList/ExperienciaList'
import imgPerfil from '../../assets/img/profile.jpg'
import data from '../../data.json'

class Curriculum extends Component {
  render() {
    let { intl } = this.props

    const contatos = [
      {
        titulo: this.props.intl.formatMessage({ id: 'left-col.email' }),
        contatos: [
          { titulo: 'gabrielqduarte', link: 'mailto:GabrielQDuarte@gmail.com' },
          { titulo: '@gmail.com', link: 'mailto:GabrielQDuarte@gmail.com' },
        ],
      },
      {
        titulo: this.props.intl.formatMessage({ id: 'left-col.social' }),
        contatos: [
          {
            titulo: '/GabrielDuarteM',
            faIcon: 'fab fa-github',
            link: 'https://github.com/GabrielDuarteM/',
          },
          {
            titulo: '/GabrielDuarteM',
            faIcon: 'fab fa-linkedin',
            link: 'https://www.linkedin.com/in/GabrielDuarteM/',
          },
          {
            titulo: 'gabrielduarte.tech',
            faIcon: 'fas fa-external-link-alt',
            link: 'https://gabrielduarte.tech/',
          },
        ],
      },
    ]

    const linguagens = [
      { titulo: 'Javascript' },
      { titulo: 'React' },
      { titulo: 'Redux' },
      { titulo: 'Typescript' },
      { titulo: 'Node.js' },
      { titulo: 'Webpack' },
      { titulo: 'C#' },
      { titulo: 'SQL Server' },
      { titulo: 'MongoDB' },
    ]

    const competencias = [
      { titulo: intl.formatMessage({ id: 'competencias.proatividade' }) },
      { titulo: intl.formatMessage({ id: 'competencias.curiosidade' }) },
      { titulo: intl.formatMessage({ id: 'competencias.paixão' }) },
      { titulo: intl.formatMessage({ id: 'competencias.criatividade' }) },
      { titulo: intl.formatMessage({ id: 'competencias.ambição' }) },
    ]

    return (
      <div style={{ marginBottom: 80 }}>
        <Header
          img={imgPerfil}
          nome="Gabriel"
          sobrenome="Duarte"
          cargo={this.props.intl.formatMessage({ id: 'header.cargo' })}
          alterarIdioma={this.props.alterarIdioma}
        />
        <LeftColumn
          contatos={contatos}
          linguagens={linguagens}
          competencias={competencias}
        />
        {data.map((e, i) => (
          <React.Fragment>
            <ExperienciaList
              key={i}
              titulo={intl.formatMessage({ id: e.id })}
              experiencias={e.experiencias}
            />
            {i === 1 && (
              <ExperienciaList
                titulo="Open-source Projects"
                traduzido={false}
                experiencias={[
                  {
                    descSimples: 'pipe-now',
                    descricao:
                      'A pipe function that tries to replicate the pipeline operator proposal.',
                    link: 'https://github.com/GabrielDuarteM/pipe-now',
                  },
                  {
                    descSimples: 'gd-scripts',
                    descricao: 'CLI with common scripts for my projects.',
                    link: 'https://github.com/GabrielDuarteM/gd-scripts',
                  },
                  {
                    descSimples: 'semantic-release-chrome',
                    descricao:
                      'Set of semantic-release plugins for automating the process of publishing a Chrome extension release.',
                    link:
                      'https://github.com/GabrielDuarteM/semantic-release-chrome',
                  },
                  {
                    descSimples: 'copy-paste-component',
                    descricao:
                      'A tool to create components, by copying and pasting existing ones.',
                    link:
                      'https://github.com/GabrielDuarteM/copy-paste-component',
                  },
                  {
                    descSimples: 'copy-paste-component-vscode',
                    descricao:
                      'A visual studio code extension for you to create new components using "copy-paste-component".',
                    link:
                      'https://github.com/GabrielDuarteM/copy-paste-component-vscode',
                  },
                  {
                    descSimples: 'youtube-autoclose-ads',
                    descricao:
                      'Chrome extension to automatically close youtube ads after an amount of time.',
                    link:
                      'https://github.com/GabrielDuarteM/youtube-autoclose-ads',
                  },
                  {
                    descSimples: 'webplayer-hotkeys',
                    descricao:
                      'A Chrome extension that assigns hotkeys to play/pause, and switch musics (next and previous). Works with Spotify, Deezer, SoundCloud and Youtube',
                    link: 'https://github.com/GabrielDuarteM/webplayer-hotkeys',
                  },
                  {
                    descSimples: 'deckstream',
                    descricao:
                      '[WIP] A mobile app that allows you to control your computer through configurable macros.',
                    link: 'https://github.com/GabrielDuarteM/deckstream',
                  },
                  {
                    descSimples: 'generator-gd-scripts',
                    descricao: 'A generator to start up my projects',
                    link:
                      'https://github.com/GabrielDuarteM/generator-gd-scripts',
                  },
                ]}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    )
  }
}

export default injectIntl(Curriculum)
