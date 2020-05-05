import React from 'react';

function Activities (props){
    let items = props.events.map((event, index)=>{
        let col1 =<td key = {"FatemEvent "+index+" name"}>{event.name}</td>
        let col2 =<td key = {"FatemEvent "+index+" dates"}>{event.dates}</td>
        return <tr>{col1} {col2}</tr>
    });

    return <main className = 'bodyStyle'>
            <h1 id = 'pageHeading'>Upcoming events</h1>
            <table id ="table">
                <thead>
                    <tr>
                        <th>Event Title</th>
                        <th>Daates of Event</th>
                    </tr>
                </thead> 
                    <tbody> {items} </tbody>
            </table>
            </main>;
}

export default Activities;