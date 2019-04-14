import React from 'react'
import { injectIntl } from 'react-intl'

import LeftColumnTitle from '../LeftColumnTitle/LeftColumnTitle'
import Chip from '../Chip/Chip'

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row-reverse',
  },
}

const ChipList = ({ intl, titleId, chipList }) => {
  return (
    <div>
      <LeftColumnTitle titulo="Skills" />
      <div style={styles.wrapper}>
        {chipList.map((e, i) => (
          <Chip key={i} style={styles.chip}>
            {e.titulo}
          </Chip>
        ))}
      </div>
    </div>
  )
}

export default injectIntl(ChipList)
