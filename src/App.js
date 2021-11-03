import React from 'react'
import Formulario from './components/Formulario.js'
import ListaRecetas from './components/ListaRecetas.js'

import CategoriasProvider from './context/CategoriasContext.js'
import RecetasProvider from './context/RecetasContext.js'
import ModalProvider from './context/ModalContext.js'

function App() {


  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <header className="bg-alert">
            <h1>Buscador de recetas</h1>
          </header>
          <div className="container mt-5">
            <div className="row">
              <Formulario/>
            </div>
            <ListaRecetas/>
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;