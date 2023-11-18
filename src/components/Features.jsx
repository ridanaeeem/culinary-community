import React from "react";

// const Feature = styled.div`
//     background-color: #D7EBD6;
//     width: 25%;
// `;

export function Features() {
    return(
        <div classname="flex flex-row">
            <div className="flex flex-column bg-#D7EBD6">
                <h1>Feature 1</h1>   
                <br></br> 
                <p>jskalfjkds</p>  
            </div>
            <div className= "flex flex-column">
                <h1>Feature 2</h1>
            </div>
        </div>
    )
}