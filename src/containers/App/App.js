import React, { Component } from "react"
import { IntlProvider, addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import pt from "react-intl/locale-data/pt"

import Curriculum from "../Curriculum/Curriculum"

class App extends Component {
  constructor(props) {
    super(props)
    const navLocale = navigator.language.split("-")[0]
    const allowedLocales = ["pt", "en"]
    const defaultLocale = allowedLocales.includes(navLocale) ? navLocale : "pt"
    this.state = { locale: defaultLocale }

    addLocaleData([...en, ...pt])
  }

  render() {
    return (
      <IntlProvider locale={this.state.locale} messages={this.getMessages(this.state.locale)}>
        <Curriculum alterarIdioma={this.alterarIdioma.bind(this)} />
      </IntlProvider>
    )
  }

  alterarIdioma(locale) {
    this.setState({
      locale,
    })
  }

  getMessages(locale) {
    return require(`../../locales/${locale}.json`)
  }
}

export default App
