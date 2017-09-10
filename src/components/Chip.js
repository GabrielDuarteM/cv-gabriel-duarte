import React from 'react'

const styles = {
  root: {
    border: 10,
    boxSizing: 'border-box',
    display: 'flex',
    fontFamily: 'Roboto, sans-serif',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    cursor: 'default',
    textDecoration: 'none',
    margin: 4,
    outline: 'none',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgb(224, 224, 224)',
    borderRadius: 16,
    whiteSpace: 'nowrap',
    width: '-webkit-fit-content'
  },
  chip: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '32px',
    paddingLeft: 12,
    paddingRight: 12,
    userSelect: 'none',
    whiteSpace: 'nowrap'
  }
}

const Chip = ({children}) =>
  <div style={styles.root}>
    <span style={styles.chip}>{children}</span>
  </div>

export default Chip
