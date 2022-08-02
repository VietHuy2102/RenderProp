import React from "react";
// function Tech2(){
//     return(
//         <>
//         <h1>Render Props</h1>
//         </>
//     )
// }

export const Tech2 =(props)=>{
    return(
        <div>
            {props.render({
                value:"Tech 2"
            })}
        </div>
    )
}
