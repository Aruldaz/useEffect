import React, {useState, useEffect} from 'react'

export const App = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `${count} New Messages..!`;
  })
  return (
    <div>
      <h1>{count} New Messages..!</h1>
      <button onClick={()=> setCount(count+1)}>increase</button>
    </div>
  )
}
 export default App;