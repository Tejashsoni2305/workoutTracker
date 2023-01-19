import { createContext, useReducer } from "react";

export const ExerciseContext = createContext()

export const exerciseReducer = (state, action) => {
    switch (action.type) {
        case 'VIEW_EXERCISES':
            return {
                exercises: action.payload
            }
        case 'CREATE_EXERCISE':
            return {
                exercises: [action.payload, ...state.exercises]
            }
        case 'DELETE_EXERCISE':
            return {
                exercises: state.exercises.filter((e) => e._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const ExerciseContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(exerciseReducer, {
        exercises: null
    })
    return (
        <ExerciseContext.Provider value={{...state, dispatch}}>
            {children}
        </ExerciseContext.Provider>
    )
}