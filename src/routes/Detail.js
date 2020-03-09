import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        console.log(this.props);
        const { location, history } = this.props;
        if(location.state == undefined){
            history.push('/'); // home으로 가기
        }
    }
    render(){
        const { location } = this.props;
        if (location.state) {
            return <h1>{location.state.title}</h1>; 
        } else {
            return null;
        }
        
        //조심! render가 먼저 실행되고 componentDidMount가 실행되므로
        // if로 제어해주지 않으면 locatino에 값이 없을 떄 에러가 뜰 수 있다.
    }
}

export default Detail;