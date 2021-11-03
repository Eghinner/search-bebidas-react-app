import React, {createContext, useState, useEffect} from 'react'

export const RecetasContext = createContext()

const RecetasProvider = (props) => {

	const [recetas, setRecetas] = useState([])
	const [consultar, setConsultar] = useState(false)
	const [busquedarecetas, setBusquedaRecetas] = useState({
		nombre: '',
		categoria: ''
	})

	useEffect(() => {
		if (consultar) {
			const cosultarApi = async () => {
				const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busquedarecetas.nombre}&c=${busquedarecetas.categoria}`
				const consulta = await fetch(url)
				const resultado = await consulta.json()
				setRecetas(resultado.drinks)
			}
			cosultarApi()
		}
	}, [busquedarecetas, consultar])

	return (
		<RecetasContext.Provider
			value={{
				recetas,
				setBusquedaRecetas,
				setConsultar
				}}
		>
			{props.children}
		</RecetasContext.Provider>
	)
}

export default RecetasProvider