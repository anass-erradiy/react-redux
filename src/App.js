import { useDispatch , useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {ADD,SEE} from './redux/functionsCreators' ;
import './App.css'
function App() {
  const [name,setName] = useState('') ;
  const [prenom,setPrenom] = useState('') ;
  const [age,setAge] = useState('') ;
  const [users,setUsrs] = useState([]) ;

  const data = useSelector(data => data.users) ;
    useEffect(() =>{  
      console.log(data)
      setUsrs(data)}
    
    ,[data])
    
  const dispatch = useDispatch() ;
  const handleAddUser = () => {
    const newUser = {name,prenom,age} ;
    dispatch(ADD(newUser))
  }
  return (
    <div className="App">
      <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Name' />
      <input type="text" onChange={(e) => setPrenom(e.target.value)} placeholder='Prenom' />
      <input type="number" onChange={(e) => setAge(e.target.value)} placeholder='Age' />
      <button onClick={handleAddUser}>add User</button>
      <div>
        <ul>
          {users.map((user,index)=><li key={index}>{user.name} / {user.prenom} / {user.age} </li>)}
        </ul>
      </div>
      {/* <p>{number}</p>
      <button onClick={() => dispatch({type:'INC'})}>INC</button>
      <button onClick={() => dispatch({type:'DEC'})}>DEC</button>
      <button onClick={() => dispatch({type:'RES'})}>RES</button> */}
    </div>
  );
}

export default App;
