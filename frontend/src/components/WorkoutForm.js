import { useState } from "react"

const WorkoutForm = () => {
     const [title, setTitle] = useState('');
     const [reps, setReps] = useState('');
     const [loads, setLoads]=useState('')
     const [error, setError] = useState(null)

//SUbmit Handler
const handleSubmit = async (event) => {
    event.preventDefault()

    const workout = {title, reps, loads}

    const response = await fetch('/api/workout', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()

    //checking for error
    if(!response.ok) {
        setTitle('')
        setLoads('')
        setReps('')
        setError(json.error)
    }
    if(response.ok) {
        setError(null)
        console.log('new workout found ', json)
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
    onChange={(e) => setLoads (e.target.value)}
    value={loads}
    />


<label>Reps: </label>
    <input 
    type='number'
    onChange={(e) => setReps (e.target.value)}
    value={reps}
    />
    <button> Add Workout </button>    
 </form>
  )
}

export default WorkoutForm