import React from "react";
import headerPhoto from "./header.png"

function Home(props){
    return <main className = 'bodyStyle'>
            <figure className="photos">
                <img src = {headerPhoto} style={{width : '700px'}} alt = "code"/>
            </figure>
            <figcaption>
                A snippet of Java code
            </figcaption>
            <h1 id = 'pageHeading'>It's a REACT website</h1>
            <p>This club has memebers, events, and even a log in capability. It's so cool you don't know.</p>
            
        </main>;
}

export default Home;