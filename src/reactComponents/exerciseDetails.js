import { useExerciseContext } from "../hooks/useExerciseContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ExerciseDetails = ({workout}) => {
    const {dispatch} = useExerciseContext()

    const handleClick = async () => {
        const response = await fetch('/api/workout/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_EXERCISE', payload: json})
        }
    }
    return (
        <div className="details">
            <h4>{workout.name}</h4>
            <p><strong>Reps:</strong> {workout.reps}</p>
            <p><strong>Weight in Kgs:</strong> {workout.weight}</p>
            <p><strong>Sets:</strong> {workout.sets}</p>
            <p><strong>Rest-minutes:</strong> {workout.restTime}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}> Delete </span>
        </div>
    )
}

export default ExerciseDetails