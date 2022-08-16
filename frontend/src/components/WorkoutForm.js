import { useState } from "react"

const WorkoutForm = () => {
     const [title, setTitle] = useState('');
     const [reps, setReps] = useState('');
     const [loads, setLoads]=useState('')

//SUbmit Handler
const handleSubmit = async (event) => {

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
