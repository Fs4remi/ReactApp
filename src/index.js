  
import React from "react";
import ReactDOM from "react-dom";

import Home from './Home';
import About from './About';
import Members from './Members';
import Activity from './Activities';
import AdminActivity from './AdminActivity';
import Login from './Login';

import users from './public/clubUsersHash.json';
import events from './public/eventData.json';

class App extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            show: 'AA',
            role: 'guest',
            user: ''
        };
    }
    stateChanger(id){
        this.setState({show: id});
    }

    logout= () => {
        this.setState({
            user: null,
            show: 'Home',
            role: 'guest'
        });
    }
    getInfoOutOfLogin = (userName, role) => {
        this.setState({
            user:userName,
            role: role 
        }); 
    }
    render() { 
        let content;
        switch (this.state.show) {
            case 'About':
               content = <About />;
               break;

            case 'Log':
                content = <Login emit = {this.getInfoOutOfLogin}/>;
                break;

            case 'AA':
                content = <AdminActivity events = {events}/>;
                break;

            case 'Home':
                content = <Home />;
                break;

            case 'Activity':
                content = <Activity events = {events}/>;
                break;

            case 'Members':
                content = <Members users = {users}/>; 
                break;

            default:
                content = <h2>Some type of problem!</h2>;
        }

        let menu;
        switch(this.state.role){
            case 'admin':
                menu = this.AdminViewMenu();
                break;

            case 'member':
                menu = this.MemberViewMenu();
                break;

            case 'guest':
                menu = this.GuestViewMenu();
                break;

            default:
                menu = <h3>No menu for you Jose</h3>;
        }

        return (<div> {menu} {content}</div>);
    }

    GuestViewMenu = ()=>{
        return( 
            <section id= 'buttons'> 
                <h3 style={{fontFamily: 'sans-serif'}}>Where would you like to go next?</h3> 
                <button onClick={this.stateChanger.bind(this,'About')}>About Page</button> 
                <button onClick={this.stateChanger.bind(this, 'Log')}>Login Page</button>
            </section>); 
    }
    AdminViewMenu = () =>{
        return( 
            <section id= 'buttons'> 
                <h3 style={{fontFamily: 'sans-serif'}}>Where would you like to go next?</h3>
                <button onClick={this.stateChanger.bind(this,'Members')}>Members page</button>
                <button onClick={this.stateChanger.bind(this,'About')}>About Page</button>
                <button onClick={this.stateChanger.bind(this, 'Activity')}>Activity Page</button>
                <button onClick={this.stateChanger.bind(this, 'Log')}>Login Page</button>
                <button onClick={this.logout}>Logout</button>
            </section>); 
    }
    MemberViewMenu = () =>{
        return( 
            <section id= 'buttons'> 
                <h3 style={{fontFamily: 'sans-serif'}}>Where would you like to go next?</h3> 
                <button onClick={this.stateChanger.bind(this,'About')}>About Page</button>
                <button onClick={this.stateChanger.bind(this, 'Activity')}>Activity Page</button>
                <button onClick={this.stateChanger.bind(this, 'Log')}>Login Page</button>
                <button onClick={this.logout}>Logout</button>
            </section>); 
    }
}
ReactDOM.render(<App />,
    document.getElementById('root')
); 