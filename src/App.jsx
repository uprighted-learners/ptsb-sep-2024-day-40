import React from 'react'
import Counter from "./components/Counter"

import './App.css'

export default function App(props) {
    const { favoriteFood, name } = props
    return (
        <div className='App'>
            <p>Some static text in App.js</p>
            <p>Some {props.word} text in App.js</p>
            <p>{name}'s favorite food is {favoriteFood}</p>
            <Counter />
        </div>
    )
}
