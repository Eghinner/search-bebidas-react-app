import React, {createContext, useState, useEffect} from 'react'

// Crear el Context
export const CategoriasContext = createContext()

// Provider - donde se encuentran las funciones y states

const CategoriasProvider = (props) => {

	const [categorias, setCategoria] = useState([])

	useEffect(() => {
	  const apiConsult = async () => {
	    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
	    const consulta = await fetch(url)
	    const resupuesta = await consulta.json()
	    setCategoria(resupuesta.drinks)
	  }
	  apiConsult()
	}, [])

	return (
		<CategoriasContext.Provider
			value={{
				categorias
			}}
		>
			{props.children}
		</CategoriasContext.Provider>
	)
}

export default CategoriasProvider