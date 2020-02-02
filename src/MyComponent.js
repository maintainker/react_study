import React,{Component} from "react";
//import PropType from "prop-types";
/*
const MyComponent = (props) =>{
    const {name, children} = props;
return (
    <>
    <div>{name}의 멋진 컴포넌트</div>
    <div>{children} 이 내 목표!</div>
    </>
    );
}*/

class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            number : 0,
        };
    }
    render(){
        const {name , children} = this.props;
        return( 
         <>
            이글은 클래스형 컴포넌트 입니다. <br />
            {name}이 만든 것입니다. <br />
            {children}
            <h1>{this.state.number}</h1>
            <button 
                onClick ={ () =>{
                    this.setState({number :this.state.number +1,});
                }}
            > +1 </button>
         </>
        );
    }
}

MyComponent.defaultProps = {
    name : "SYH",
}


export default MyComponent;