import React, { useState } from 'react'



function Todo() {

    const defaultİtem = [
        {
            name: "İtem1"
        },
        {
            name: "İtem2"
        },
        {
            name: "İtem3"
        }
    ]
    const [text, setText] = useState("")
    const [item, setItem] = useState(defaultİtem)

    const handleClick = () => {
        setItem((prev) => [...prev, { name: text }])
        setText("")
    }
    const changeText = (e) => {
        setText(e.target.value)
    }




    return (
        <div>
            <label> Text <input value={text} onChange={changeText} /></label>
            <button onClick={handleClick}>Add</button>
            {
                item.map((item, key) => <div key={key}>{item.name}</div>)
            }

        </div>
    )
}

export default Todo
