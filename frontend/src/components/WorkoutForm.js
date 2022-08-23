import { useState } from "react";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()

     const [title, setTitle] = useState('');
     const [reps, setReps] = useState('');
     const [load, setLoad] = useState('')
     const [error, setError] = useState(null)

//SUbmit Handler
const handleSubmit = async (event) => {
    event.preventDefault()

    const workout = {title, reps, load}

    const response = await fetch('/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()

    //checking for error
    if(!response.ok) {
        setError(json.error)
    }
    if(response.ok) {
        setTitle('')
        setLoad('')
        setReps('')
        setError(null)
        console.log('new workout found ', json)

        dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
} 

     return (
 <form className="create" onSubmit={handleSubmit}>
    <h3>Add a New Workout</h3>

    <label>Excersize Title</label>
    <input 
    type='text'
    onChange={(e) => setTitle (e.target.value)}
    value={title}
    />

<label>Load (in Kg) :</label>
    <input 
    type='number'
    onChange={(e) => setLoad (e.target.value)}
    value={load}
    />


<label>Reps: </label>
    <input 
    type='number'
    onChange={(e) => setReps (e.target.value)}
    value={reps}
    />
    <button> Add Workout </button>  
    {error && <div className="error"> {error} </div>}  
 </form>
  )
}

export default WorkoutForm