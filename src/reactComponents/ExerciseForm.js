import { useState } from "react"
import {useExerciseContext} from '../hooks/useExerciseContext'


const ExerciseForm = () => {
    const { dispatch } = useExerciseContext()
    const [name, setName] = useState('')
    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
    const [sets, setSets] = useState('')
    const [restTime, setRestTime] = useState('')
    const [error, setError] = useState(null)

    const handleClick = async (e) => {
        e.preventDefault()
        const workout = {name, reps, weight, sets, restTime}
        const response = await fetch('/api/workout/', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'content-type': 'application/json'
            }
        })
        
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }

        if(response.ok){
            setError(null)
            setName('')
            setReps('')
            setWeight('')
            setSets('')
            setRestTime('')
            dispatch({type: 'CREATE_EXERCISE', payload: json})
        }

    }

    return (
        <form  className="newExercise" onSubmit={handleClick}>
            <h3>Add a new Workout</h3>
            <label>Name: </label>
            <input type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />

            <label>Reps: </label>
            <input type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            />

            <label>Weight in Kgs: </label>
            <input type="number"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            />

            <label>Sets: </label>
            <input type="number"
            onChange={(e) => setSets(e.target.value)}
            value={sets}
            />

            <label>Rest-minutes: </label>
            <input type="number"
            onChange={(e) => setRestTime(e.target.value)}
            value={restTime}
            />

            <button><strong>Add Workout</strong></button>
            {error && <div className="error">{error}</div>}
        </form>

    )

}

export default ExerciseForm