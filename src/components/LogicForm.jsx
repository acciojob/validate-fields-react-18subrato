import React, { useState } from 'react'

const LogicForm = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('')
    const[error,setError] = useState(false);
    function handleSubmit(e){
        e.preventDefault();
        if(!username){

           setError('Both username and password are required.');
           
            return;
        }

        if(!password){
           setError('Both username and password are required.')
            return;
        }
        setUsername('');
        setPassword('');
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input id='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
      {error ? <div id='errorMessage' style={{color:'red'}}>{error}</div>:''}
    </div>
  )
}

export default LogicForm
