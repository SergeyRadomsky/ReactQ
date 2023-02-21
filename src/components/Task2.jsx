import { useState } from 'react';



const Task2 = (props) => {
  const [idValue, setIdValue] = useState("");
  // const [requestedId, setRequestedId] = useState(null);

  const fetchData = () => {
    setIdValue(idValue)
    // fakeRequest(requestedId);
    fakeRequest(idValue);
    
  }

  const submitHandler = () => {
    // setRequestedId(idValue);
    fetchData()
  }

  const inputChangeHandler = (ev) => {
    setIdValue(ev.target.value);
  }

  return (
    <div>
      <button onClick={submitHandler}>Submit</button>
      <input type="number" onChange={inputChangeHandler} value={idValue}/>
    </div>
  )

};

export default Task2;






// const fakeRequest = (id) => {
//     console.log('Id in request is:', id)
// }

async function fakeRequest(id) {
  await new Promise((res) => {
    setTimeout(() => {res(1)}, 0)
  });

  console.log('Id in request is:', id)
}