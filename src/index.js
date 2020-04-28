import React from "react";
import ReactDOM from "react-dom";

import Home from './Home';
import About from './About';
import Members from './Members';
import Activity from './Activities';

import users from './public/clubUsersHash.json';
import events from './public/eventData.json';

class App extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {show: "Home"};
    }
    stateChanger(id){
        console.log(id);
        this.setState({show: id});
    }
    render() {
        let menu = <section id = 'button'> 
                <h3 style={{fontFamily: 'sans-serif'}}>Where would you like to go next?</h3>
                <button onClick={this.stateChanger.bind(this,'Members')}>Members page</button>
                <button onClick={this.stateChanger.bind(this,'About')}>About</button>
                <button onClick={this.stateChanger.bind(this, 'Activity')}>Activity</button>
        </section>;

        switch (this.state.show) {
            case 'About':
                return <div>{menu} <About /> </div>;
                
            case 'Home':
                return <div>{menu} <Home />  </div>;
                
            case 'Activity':
                return <div>{menu} <Activity events = {events}/> </div>;
                
            case 'Members':
                return <div>{menu} <Members users={users}/> </div>;

            default:
                return <div>{menu} <h2>Some type of problem!</h2></div>;
        }
    }
}


ReactDOM.render(<div>
    <App />
</div>,
    document.getElementById('root')
);