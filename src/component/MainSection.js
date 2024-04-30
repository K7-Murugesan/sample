import { Component } from "react";

class MainSection extends Component{

    //Stateful 
    state = {
        count : 0,
        show : false,
        id : 1
    }

    increase(){
        this.setState(
            {
                ...this.state,
                count : this.state.count+1
            }
        )
    }

    decrease(){
        this.setState(  
            {
                ...this.state,
                count : this.state.count-1
            }
        )
    }

    render(){
        return (
            <main>
                <h2> Im Gonna make CRUD Operation </h2>
                <button onClick={ ()=> this.increase() } >+ class</button>
                <span><b> {this.state.count} </b></span>
                <button onClick={ ()=> this.decrease() }>- class</button>
            </main>
        )
    }
}

export default MainSection;