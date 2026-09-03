import React, {useState, useCallback} from 'react'
const Child= React.memo(function Child({onClick}){
    console.log("child rendered");

    return <button onClick={onClick}>Hello</button>
})

export default Child;