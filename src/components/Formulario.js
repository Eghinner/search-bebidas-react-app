import React, { useState, useContext} from 'react'
import { CategoriasContext } from '../context/CategoriasContext.js'
import { RecetasContext } from '../context/RecetasContext.js'

const Formulario = () => {

	const { categorias } = useContext(CategoriasContext)

	const { setBusquedaRecetas, setConsultar } = useContext(RecetasContext)

	const [busqueda, setBusqueda] = useState({
		nombre: '',
		categoria: ''
	})

	const handleChange = e => {
		setBusqueda({
			...busqueda,
			[e.target.name] : e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		setBusquedaRecetas(busqueda)
		setConsultar(true)
	}

	return (
		<React.Fragment>
			<form
				onSubmit={handleSubmit}
				className="col-12"
			>
				<fieldset className="text-center">
					<legend>Busca bebidas por categorias o ingredientes</legend>
				</fieldset>
				<div className="row mt-4">
					<div className="col-md-4">
						<input
							placeholder="Buscar por Ingrediente"
							name="nombre"
							type="text"
							className="form-control"
							onChange={handleChange}
						/>
					</div>
					<div className="col-md-4">
						<select
							className="form-control"
							name="categoria"
							id="categoria"
							onChange={handleChange}
						>
						<option value="">Select</option>
							{
								categorias.map(categoria=>(
								<option
									key={categoria.strCategory}
									value={categoria.strCategory}
								>
									{categoria.strCategory}
								</option>
								))
								}
						</select>
					</div>
					<div className="col-md-4">
						<input
							type="submit"
							className="btn btn-block btn-primary"
							value="Buscar"
						/>
					</div>
				</div>
			</form>
		</React.Fragment>
	)
}

export default Formulario