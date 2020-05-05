import React from 'react';

const menu = (props)=>{
        <section id= 'buttons'> 
                <h3 style={{fontFamily: 'sans-serif'}}>Where would you like to go next?</h3>
                <button onClick={this.stateChanger.bind(this,'Members')}>Members page</button>
                <button onClick={this.stateChanger.bind(this,'About')}>About Page</button>
                <button onClick={this.stateChanger.bind(this, 'Activity')}>Activity Page</button>
                <button onClick={this.stateChanger.bind(this, 'Log')}>Login Page</button>
        </section>;
}; 

export default menu;