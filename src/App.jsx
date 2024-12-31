import React from 'react'

export default function App(props) {
    const { favoriteFood, name } = props
    return (
        <div>
            <p>Some static text in App.js</p>
            <p>Some {props.word} text in App.js</p>
            <p>{name}'s favorite food is {favoriteFood}</p>
        </div>
    )
}
