import React,{useState} from 'react';

// class EventPratice extends Component {
//     state ={
//         message : '',
//         username : ''
//     }
//     handleChange= (e)=> {
//         this.setState({
//             [e.target.name] : e.target.value
//         });
//     }
//     handleClick= ()=>{
//         alert(this.state.username +' : '+this.state.message);
//         this.setState({
//             message : '',
//             username : ''
//         });
//     }
//     handleKeyPress= (e)=>{
//         if(e.key === 'Enter'){
//             this.handleClick();
//         }
//     }
//     render() {
//         return (
//             <>
//                 <h1>Event Practice</h1> 
//                 <input 
//                     type = 'text'
//                     name = 'username'
//                     placeholder ='username'
//                     value = {this.state.username}
//                     onChange = {this.handleChange}
//                 />
//                 <input 
//                     type = 'text'
//                     name = 'message'
//                     placeholder ='Input Anything'
//                     value = {this.state.message}
//                     onChange = {this.handleChange}
//                     onKeyPress = {this.handleKeyPress}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </>
//         );
//     }
// }

// const EventPratice = () => {
//     const [username, setUsername] = useState('');
//     const [message, setMessage] = useState('');
//     const onChangeUsername = e=> setUsername(e.target.value);
//     const onChangeMessage = e => setMessage(e.target.value);
//     const onClick = () =>{
//         alert(username + ' : ' +message);
//         setUsername('');
//         setMessage('');
//     }
//     const onKeyPress = (e) =>{
//         if(e.key === 'Enter'){
//             onClick();
//         }
//     }

//     return (
//         <>
//             <h1>이벤트 연습2</h1>
//             <input 
//             type = 'text'
//             name = 'username'
//             placeholder = 'username'
//             value = {username}
//             onChange = {onChangeUsername}
//             />
//             <input 
//             type = 'text'
//             name = 'message'
//             placeholder = 'press anything'
//             value = {message}
//             onChange = {onChangeMessage}
//             onKeyPress = {onKeyPress}
//             />
//             <button onClick = {onClick}>확인</button>
//         </>
//     );
// }

const EventPratice = () => {
    const [form, setForm] = useState ({
        username : '',
        message : ''
    });
    const {username, message} =form;
    const onChange = (e)=>{
        const nextForm = {
            ...form,
            [e.target.name] :e.target.value
        };
        setForm(nextForm);
    }
    const onClick  = ()=>{
        alert(username + ' : '+message);
        setForm({
            username:'',
            message : ''
        })
    };
    const onKeyPress =(e)=>{
        if(e.key === 'Enter'){
            onclick();
        }
    }
    return(
        <>
            <h1>이벤트연습3</h1>
            <input 
            type = 'text'
            name = 'username'
            placeholder = 'Username'
            value = 'username'
            onChange = 'onChange'
            />
            <input 
            type = 'text'
            name = 'message'
            placeholder = 'press anyThing'
            value = 'username'
            onChange = {onChange}
            onKeyPress = {onKeyPress}
            />
            <button onClick = {onClick}>확인</button>
        </>
    );
}


export default EventPratice;