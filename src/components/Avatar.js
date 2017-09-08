import React from 'react'
import Paper from 'material-ui/Paper'
import { injectIntl } from 'react-intl'

const styles = {
  paper: {
    height: 150,
    width: 150,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    overflow: 'hidden'
  },
  image: {
    width: 190,
    marginLeft: -21
  }
}

const Avatar = ({ img, intl }) => (
  <Paper style={styles.paper} zDepth={3} circle>
    <img style={styles.image} src={img} alt={intl.formatMessage({ id: 'avatar.alt' })} />
  </Paper>
)

export default injectIntl(Avatar)
