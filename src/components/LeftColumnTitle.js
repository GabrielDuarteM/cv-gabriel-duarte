import React from 'react'

const styles = {
  title: {
    fontWeight: 600,
    fontSize: 18,
    color: 'rgb(3, 148, 222)'
  }
}

const LeftColumnTitle = ({ titulo }) => {
  return (
    <div style={styles.title}>
      {titulo}
    </div>
  )
}

export default LeftColumnTitle
