import React, {useContext, useState} from 'react'
import {ModalContext} from '../context/ModalContext.js'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'

function getModalStyle() {
    const top = 50 ;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'scroll',
    height: '100%',
    maxHeight: 500,
    display: 'block',
    overflowX: 'hidden'
    }
}));

const Receta = ({receta}) => {

	// Config material-ui
	const [modalStyle] = useState(getModalStyle)
	const [open, setOpen] = useState(false)

	const classes = useStyles()

	const handleOpen = () => {
		setOpen(true)
	}

	const hanleClose = () => {
		setOpen(false)
	}
	// -------------------
	const {informacion, setIdReceta, setReceta} = useContext(ModalContext)

	const addIngredientes = () => {
		let ingredientes=[]

		for (var i = 1; i < 16; i++) {
			if (informacion[`strIngredient${i}`]) {
				ingredientes.push(
					<li>{informacion[`strIngredient${i}`]} -
						 {informacion[`strMeasure${i}`]}
					</li>
					)
			}
		}
		return ingredientes
	}

	return (
		<div className="col-md-4 mb-3">
			<div className="card shadow">
				<h2 className="card-header">{receta.strDrink}</h2>
				<img
					className="card-img-top"
					src={receta.strDrinkThumb}
					alt={`Imagen de ${receta.strDrinkThumb}`}
					title={receta.strDrink}
				/>
				<div className="card-body">
					<button
						onClick={() => {
							setIdReceta(receta.idDrink)
							handleOpen()
							}}
						className="btn btn-block btn-primary"
					>
						Ver Receta
					</button>

					<Modal
						onClose={()=>{
							setIdReceta(null)
							hanleClose()
							setReceta({})
							}}
						open={open}
					>
						<div style={modalStyle} className={classes.paper}>
							<div className={classes.header}>
								<h2>{informacion.strDrink}</h2>
							</div>
								<h3 className="mt-4">Instrucciones</h3>
								<p>
									{informacion.strInstructions}
								</p>
								<img
									className="img-fluid my-4"
									src={informacion.strDrinkThumb}
									alt={informacion.strDrink}
									title={informacion.strDrink}
								/>
								<h3>Ingredientes y cantidades</h3>
								<ul>
									{addIngredientes()}
								</ul>
						</div>
					</Modal>
				</div>
			</div>

		</div>
	)
}

export default Receta