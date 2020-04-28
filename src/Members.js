import React from 'react';
import { precompileString } from 'nunjucks';

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
    console.log(typeof props.users);
    [
        {
          "firstName": "Orval",
          "lastName": "Dotson",
          "email": "kazatske2053@outlook.com",
          "password": "$2a$15$JmZ1hLY4rqhe/LDWBzs20.bTXQm29lI5cebKf3xI.2RTTQ4QkPTKa",
          "role": "admin"
        }]
    return <main>
        <ol>{numberedList}</ol>
    </main>
}

export default Members;