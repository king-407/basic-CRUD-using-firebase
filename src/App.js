
import { useState,useEffect} from 'react';
import './App.css';
import { db } from './firebase-config';
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore'
import { async } from '@firebase/util';
function App() {

  const [user,set]=useState([])
  const [name,setname]=useState("")
  const [age,setage]=useState(0)
  const userCollection=collection(db,"users")
  const create=async()=>{
    await addDoc(userCollection,{name:name,age:Number(age)});
      }
      const update=async(id,age)=>{
const field={age:age+1}

const userdoc=doc(db,"users",id)
await updateDoc(userdoc,field)
      }
      const deleteUser=async(id)=>{
const userdoc=doc(db,"users",id);
await deleteDoc(userdoc);
      }
  useEffect(() => {
    const getUser=async()=>{
const data=await getDocs(userCollection);
console.log(data.docs.data);
set(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
// console.log(user)
    }
  getUser()
   
  }, [])
  
  return (
    <>
          <div className="app">
            <input placeholder="name" onChange={(event)=>{setname(event.target.value)}}/>
            <input type="number" placeholder="age" onChange={(event)=>{setage(event.target.value)}}/>
            <button onClick={create}>Add</button>{user.map((user)=>{return(<div>
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>
            <button onClick={()=>{update(user.id,user.age)}}>Increase Age</button>
            <button onClick={()=>{deleteUser(user.id)}}>Delete</button></div>)
          })}</div>
      
  
    </>
  );
}

export default App;
