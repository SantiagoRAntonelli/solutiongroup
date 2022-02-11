import React from 'react'
import {Paginas} from './Paginas'
import logo from './logo.png'

export const Display = () => {
  return (
      <div className="container">
            <div className="row">
                  <img src={logo} className="app-logo"  alt='' />
            </div>
            <div className="row">
            <h1 className="Text">Bienvenidos a Solution Box</h1> 
            <br/>
            <h2 className="Text">Mayorista de informática y telecomunicaciones con sedes en</h2>
            <h2 className="Text">Centro América, Caribe y LATAM.</h2> 
            <br/>
            <h3 className="Text">Contando con oficinas comerciales e inventario en cada sucursal.</h3>
            </div>
            <div className="row mt-40px">
                          <Paginas/>
            </div>
        </div>
  )
}
