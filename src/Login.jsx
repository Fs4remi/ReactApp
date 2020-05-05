import React from 'react';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }; 

    constructor(props){
        super(props);
    }

    getInputFields = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    
    handleLogin = () => { 
        const {email, password} = this.state;
        if (email.length !== 0 && password.length !== 0){
            if(email === 'admin@email.org'){
                this.props.emit('Queen of beauty','admin');
            }
            else if(email === 'member@email.org'){
                this.props.emit('Queen of beauty','member');
            }
        } 
        else{
            console.log("Nice try buster");
        }
    }

    render() {  
        return (
            <main className = 'bodyStyle'>
                <h1 id = 'pageHeading'>Log in to your account</h1>
                <section style = {this.getGridDisplay()}>
                    <label 
                        name = 'emailLabel' 
                        style = {{gridRow:1},{gridColumn: 1},{justifySelf: 'end'}}
                        >email
                    </label>
                    <input type = 'email' 
                        name = 'email' 
                        style = {{gridRow:1},{gridColumn: 2/4}} 
                        onChange = {this.getInputFields}
                        required/>

                    <label 
                        name = 'passwordLabel' 
                        style = {{gridRow:2},{gridColumn: 1}, {justifySelf: 'end'}}
                        >password
                    </label>
                    <input 
                        type = 'password' 
                        name = 'password' 
                        style = {{gridRow:2},{gridColumn: 2/4}} 
                        onChange = {this.getInputFields}
                        required    
                    />

                    <button 
                        type = 'submit'
                        onClick={this.handleLogin} 
                        style = {{gridRow:3},{gridColumn: 1}, {border: '5px solid #00FF00'}}
                    >Let's see if you remembered your password
                    </button>
                </section>
            </main> );
    } 

    getGridDisplay() {
        return ({
            display: 'grid',
            gridGap: "10px",
            gridTemplateColumns: '30% 70%',
            gridTemplateRows: '30% 30% 50%',
            padding: '20px'
        });
    }
}
 
export default Login; 