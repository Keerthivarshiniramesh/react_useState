import { useState } from 'react'; //Step 1: Import useState
import './App.css';
import Contact from './Contact';

function App() {

  const [countValue, setCountValue] = useState(0) // Step2: Declaring and assigning default value to usestate variable

  const [name, setName] = useState('')



  let count = 0

  // const addCount = () => {
  //   count = count + 1
  //   console.log("count after updation: ",count)
  // }

  const addCount = () => {
    setCountValue(countValue+1)
  }

  const subtractCount = () => {
    setCountValue(countValue-1)
  }



    
  const [students, setStudents] = useState({
    name: 'Aravindan',
    course: 'MERN'
  })

  function updateObj() {

    // setStudents({
    // name: 'Pradeep',
    // course: 'MERN'
    // })
    
    setStudents(prev => {
      const tempObj = { ...prev }
      tempObj.roll = 1
      return tempObj
    })
  }

  console.log('obj: ', students)



  const [colors, setColrs] = useState(['blue', 'black', 'red', 'gray'])

  function updateColors() {
    setColrs(prev => {
      let tempArr = [...prev]
      tempArr[0] = 'black'
      return tempArr
    })
  }
  console.log('Colors Array: ', colors)
  
  
  const [users, setUsers] = useState([
    {
      username: 'gowri',
      contact: 987386836
    },
    {
      usename: 'dharnesh',
      contact: 879378688
    }
  ])
  

  function updateUsers() {
    setUsers(prevv => {
      let tempArr = [...prevv]
      tempArr[0].username = 'sks'
      return tempArr
    })
  }

  console.log('users: ',users)




  return (
    <div>
      <button onClick={subtractCount}>-</button>
      <p>Count: {countValue}</p>
      {/* <button onClick={()=>addCount()}>+</button> */}
      <button onClick={addCount}>+</button>

      <p onClick={() => setName('Gowri')}>String Value: {name}</p>
      <div onClick={updateObj}>
        <p>Obj Name: { students.name}</p>
        <p>Obj Course: { students.course}</p>
        <p>Obj rollno: { students.roll}</p>
      </div>

      <button onClick={updateColors}>Update Colors</button>



      <button onClick={updateUsers}>Update Users</button>


      <Contact/>
    </div>
  );
}

export default App;
