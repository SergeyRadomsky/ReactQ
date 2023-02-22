import { useState } from 'react';



const Task2 = (props) => {
  const [idValue, setIdValue] = useState("");

  const fetchData = () => {
    setIdValue(idValue)
    fakeRequest(idValue);

  }

  const submitHandler = () => {
    fetchData()
  }

  const inputChangeHandler = (ev) => {
    setIdValue(ev.target.value);
  }

  return (
    <div>
      <button onClick={submitHandler}>Submit</button>
      <input type="number" onChange={inputChangeHandler} value={idValue} />
    </div>
  )

};

export default Task2;

async function fakeRequest(id) {
  await new Promise((res) => {
    setTimeout(() => { res(1) }, 0)
  });

  console.log('Id in request is:', id)
}