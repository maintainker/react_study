import React,{useState} from 'react';
import './index.css';

const InterationSample = () =>{
    let [nums] = useState([0,0,0,0,0,0,0,0,0]);//랜덤칸에 입력을 위한
    let [err_name,setErr_name] = useState('error');
    let [con_name,setCon_name] = useState('congra');
    const [number, setNumber] = useState (1);//지금현재 몇번을 클릭해야되는가?
    const [gamescore, setGamescore] = useState (0);//현재 게임 단계수
    if(number ===1){
        for(let t,i = 0 ; i<nums.length ; i++){
            let a = Math.ceil(Math.random()*9);
            t=0;
            for(let j = 0 ; j < i ; j++){
                if(a===nums[j]){
                    i--;
                    t=1;
                    break;
                }
            }
            if(t===0){nums[i]=a;}
        }
    }    
    const clicked = (nums)=>{
        if(number!==9&&number===nums){setNumber(number+1); }
        else if(number===9&&number===nums){setNumber(number+1);setCon_name(con_name+' active')}
        else {setErr_name(err_name+' active')}
    }
    const numsList = nums.map((nums,index) => <div key = {nums} className = {nums<number? 'box active '+nums:'box '+nums} onClick = {()=>clicked(nums)}><span>{nums}</span></div>);

    const err_remove = ()=>{
        setErr_name('error');
        setNumber(1);
    }
    const game_score=()=> {
        if(gamescore===0){return '첫번째 '; }
        else if(gamescore===1){return '두번째 '; }
        else if(gamescore===2){return '세번째'; }
    }
    
    const con_remove=()=>{
        gamescore!==2? setGamescore(gamescore+1):setGamescore(0);
        setNumber(1);
        setCon_name('congra');
    }
    const congraturation = ()=>{
        return (
        <div className ={con_name}>
            <span>{gamescore!==2? '완료를 축하합니다. 다시하시려면 다시하기를 눌러주세요.':'축하합니다! 모든판을 완료하였습니다.'}</span>
            <button onClick={()=>con_remove()}>{gamescore!==2? '다시하기':'처음부터 다시하기'}</button>
        </div>
        );
    }

    return (
    <div id='num_game'>
        {numsList}
        <div className ={err_name} onClick={()=>err_remove()}><span>순서가 틀렸습니다 클릭하면 처음부터 다시시작합니다.</span></div>
        {congraturation()}
        <div className='score'>현재 {game_score()}판을 진행중입니다.</div>
    </div>);
}

export default InterationSample;