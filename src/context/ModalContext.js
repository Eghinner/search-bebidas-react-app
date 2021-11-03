import React, {createContext, useState, useEffect} from 'react'

export const ModalContext = createContext()

const ModalProvider = (props) => {

	const [idreceta, setIdReceta] = useState(null)
	const [informacion, setReceta] = useState({})

	useEffect(() => {

		const consultarApi = async () => {
			if (!idreceta) return
			const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
			const consulta = await fetch(url)
			const resultado = await consulta.json()
			setReceta(resultado.drinks[0])
		}
		consultarApi()
	}, [idreceta])

	return (
		<ModalContext.Provider
			value={{
				informacion,
				setIdReceta,
				setReceta
			}}
		>
			{props.children}
		</ModalContext.Provider>
	)
}

export default ModalProvider