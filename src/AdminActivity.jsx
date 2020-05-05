import React from 'react';

class AdminEvents extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { 
            name: '',
            date: '',
            events: props.events
        }
    }
    getInputFields = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    
    handleAdd = () => { 
        const {name, date} = this.state;
        if (name.length !== 0 && date.length !== 0){ 
            let newEventsList = this.state.events;
            newEventsList.push({"name":name, "dates":date});
            this.setState({events: newEventsList})
        } 
        else{
            console.log("Nice try buster");
        }
    }

    getGridDisplay() {
        return ({
            display: 'grid',
            gridGap: "10px",
            gridTemplateColumns: '30% 70%',
            gridTemplateRows: '30% 30% 50%',
            width: '570px'
        });
    }

    deleteHandel = (event) =>{  
        let currentList = this.state.events.filter((activity)=>{
            return activity.name !== event.target.value;
        });
        this.setState({events:currentList});
    };

    render() { 
        let items = this.state.events.map((event, index)=>{
            return (<tr key ={index}>
                <td style = {{width: '100px'}}> 
                    <button value={event.name} type = 'submit' name = 'delete' style={{width: '80px'}} onClick = {this.deleteHandel}>
                        Delete
                    </button>
                </td>
                <td>{event.name}</td>
                <td>{event.dates}</td>
            </tr>);
            }
        );
        
        return ( <main className = 'bodyStyle'>
                <h1 id = 'pageHeading'>Events management</h1>

                <h2>Add an Activity</h2>
                <section style = {this.getGridDisplay()}>
                    <label  
                        style = {{gridRow:1},{gridColumn: 1},{justifySelf: 'end'}}
                        >Name
                    </label>
                    <input type = 'text' 
                        name = 'name' 
                        style = {{gridRow:1},{gridColumn: 2/4}} 
                        onChange = {this.getInputFields}
                        required/>

                    <label  
                        style = {{gridRow:2},{gridColumn: 1}, {justifySelf: 'end'}}
                        >Dates
                    </label>
                    <input 
                        type = 'text' 
                        name = 'date' 
                        style = {{gridRow:2},{gridColumn: 2/4}} 
                        onChange = {this.getInputFields}
                        required    
                    />

                    <button 
                        type = 'submit'
                        onClick={this.handleAdd} 
                        style = {{gridRow:3},{gridColumn: 1}, {border: '5px solid #00FF00'}}
                    >Add
                    </button> 
                </section>

                <h2>Activities</h2>
                <table id ="table">
                    <thead>
                        <tr>
                            <th>edit</th>
                            <th>Activity Title</th>
                            <th>Dates of Event</th>
                        </tr>
                    </thead> 
                        <tbody> {items}</tbody>
                </table>
            </main>);
    }
}
 
export default AdminEvents;

