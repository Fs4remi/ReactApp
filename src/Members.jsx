import React from 'react';

//sorts them by their last name and then produces a numbered list or table of members and their emails. 
function Members(props){
    props.users.sort( (item1, item2)=>{
        if(item1.lastName.toLowerCase() < item2.lastName.toLowerCase()) return -1;
        if(item1.lastName.toLowerCase() > item2.lastName.toLowerCase()) return 1;
        else return 0;
    });

    let numberedList = props.users.map((user, index) => {
        return <li key={user.email} style = {{color: 'white'}}> {user.firstName}  {user.lastName}  {user.email} </li>
    });
    
    return <main className = 'bodyStyle'>
        <h1 id = 'pageHeading' >List of wonderful members</h1>
        <ol>{numberedList}</ol>
    </main>
}

export default Members;