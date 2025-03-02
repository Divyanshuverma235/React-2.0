import { useRef, useState } from "react";

const Self = () => {

    const [data,setData]= useState([]);
    const inputRef = useRef(null);
  return (
    <div>
      <input ref = {inputRef} type = "text"/>
      <button onClick={()=>{setData([...data,inputRef.current.value])}}>Submit</button>
      {data.map((item,index)=>{return <h2 key = {index}>{item}</h2>})};
    </div>
  )
}

export default Self
//this is for input field after clicking on the submit it will show 
//the message on the same page 
