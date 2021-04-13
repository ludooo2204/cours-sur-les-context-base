import React, {useContext} from 'react'

import DataContext from "./DataContext";
function Test() {
    const { data, updateData } = useContext(DataContext);
    const prout= ()=>{
        updateData(23)
    }
    return (
        <div style={{backgroundColor:"lightblue"}}>
            <h1>
                composant enfant
            {data}

            <button onClick={prout}>clickez pour modifier le contexte</button>
            </h1>
        </div>
    )
}

export default Test
