import React from 'react'
import { injectIntl } from 'react-intl'

import ContatosList from '../ContatoList/ContatoList'
import ChipList from '../ChipList/ChipList'
import pluralsightJs from '../../assets/img/pluralsight-js.png'
import pluralsightReact from '../../assets/img/pluralsight-react.png'

const styles = {
  container: {
    height: '100%',
    float: 'left',
    textAlign: 'right',
    marginTop: 90,
    marginLeft: 40,
    width: 176,
  },
}

const LeftColumn = ({ intl, contatos, linguagens, competencias }) => {
  return (
    <div style={styles.container}>
      <ContatosList contatos={contatos} />
      <ChipList titleId={'left-col.linguagens'} chipList={linguagens} />
      <br />
      <a href="https://www.pluralsight.com/product/skill-iq" target="_blank">
        <img style={{ width: '100%', marginBottom: 16 }} src={pluralsightJs} />
      </a>
      <a href="https://www.pluralsight.com/product/skill-iq" target="_blank">
        <img style={{ width: '100%' }} src={pluralsightReact} />
      </a>
      {/* <ChipList titleId={"left-col.competencias"} chipList={competencias} /> */}
    </div>
  )
}

export default injectIntl(LeftColumn)
