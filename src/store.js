import {createStore} from 'redux';

const initialState = {
	name: '',
	category: '',
	authorName: '',
	authorSurName: '',
	ingredients: [],
	instructions: [],
	recipes: []
}

export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_AUTHOR_NAME = 'UPDATE_AUTHOR_NAME'
export const UPDATE_AUTHOR_SURNAME = 'UPDATE_AUTHOR_SURNAME'
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS'
export const UPDATE_RECIPES = 'UPDATE_RECIPES'
export const DELETE_RECIPE = 'DELETE_RECIPE'
export const RESET_RECIPE = 'RESET_RECIPE'

function reducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_NAME:
			return {...state, name: action.payload}
		case UPDATE_CATEGORY:
			return {...state, category: action.payload}
		case UPDATE_AUTHOR_NAME:
			return {...state, authorName: action.payload}
		case UPDATE_AUTHOR_SURNAME:
			return {...state, authorSurName: action.payload}
		case UPDATE_INGREDIENTS:
			return {...state, ingredients: [...state.ingredients, action.payload]}
		case UPDATE_INSTRUCTIONS:
			return {...state, instructions: [...state.instructions, action.payload]}
		case UPDATE_RECIPES:
			const {name, category, authorName, authorSurName, ingredients, instructions} = state
			return {...state, recipes: [...state.recipes, {
				name,
				category,
				authorName,
				authorSurName,
				ingredients,
				instructions
			}]}
		case DELETE_RECIPE:
			return {...state, recipes: 
				[
					...state.recipes.slice(0, action.payload), 
					...state.recipes.slice(action.payload + 1, state.recipes.length)
				]
			}
		case RESET_RECIPE:
			return {...initialState, recipes: state.recipes}
		default:
			return state
	}
}

export default createStore(reducer)