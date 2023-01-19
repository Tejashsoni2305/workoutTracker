import ExerciseDetails from '../reactComponents/exerciseDetails'
import { useEffect } from "react"
import ExerciseForm from '../reactComponents/ExerciseForm'
import {useExerciseContext} from '../hooks/useExerciseContext'
const Home = () => {
  const {exercises, dispatch} = useExerciseContext()

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch('/api/workout/')
      const json = await response.json()

      if(response.ok){
        dispatch({type: 'VIEW_EXERCISES', payload: json})
      }

    }

    fetchExercises()
  }, [dispatch])
    return (
        <div className="Home">
          <div className="exercises">
            {exercises && exercises.map((workout) => (
              <ExerciseDetails workout={workout} key={workout._id}  />
            ))}
          </div>
          <ExerciseForm />
        </div>
    )
}
export default Home