import React from 'react'
import Contato from './Contato'

const ContatoList = ({ contatos }) => {
  return (
    <div>
      {
        contatos.map((e, i) => {
          return <div key={i}><Contato contato={e} /><br /></div>
        })
      }
    </div>
  )
}

export default ContatoList
