import React from "react"
import { injectIntl } from "react-intl"

const styles = {
  paper: {
    color: "rgba(0, 0, 0, 0.87)",
    backgroundColor: "rgb(255, 255, 255)",
    transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
    boxSizing: "border-box",
    fontFamily: "Roboto, sans-serif",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
    boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px",
    borderRadius: "50%",
    height: 150,
    width: 150,
    margin: 20,
    textAlign: "center",
    display: "inline-block",
    overflow: "hidden",
  },
  image: {
    width: 190,
    marginLeft: -21,
  },
}

const Avatar = ({ img, intl }) => (
  <div style={styles.paper}>
    <img style={styles.image} src={img} alt={intl.formatMessage({ id: "avatar.alt" })} />
  </div>
)

export default injectIntl(Avatar)
