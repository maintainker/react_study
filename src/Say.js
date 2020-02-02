import React,{useState} from 'react';

const Say =() =>{
    const [message,setMessage] = useState('');
    const onClickEnter =()=>setMessage('Hi!!! Hello!!');
    const onClickLeave =()=>setMessage('Bye..TT Seeya');
    const [color , setColor] = useState('black');


    return (
        <>
          <button onClick ={onClickEnter}>Enter</button>  
          <button onClick ={onClickLeave}>Leave</button>  
          <h1 style = {{color}}>{message}</h1>
          <button style={{color:'red'}} onClick={()=>setColor('red')}>Red</button>
          <button style={{color:'green'}} onClick={()=>setColor('green')}>Green</button>
          <button style={{color:'blue'}} onClick={()=>setColor('blue')}>Blue</button>
        </>
    );
} ;
export default Say;