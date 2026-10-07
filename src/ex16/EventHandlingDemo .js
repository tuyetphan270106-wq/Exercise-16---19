import React, { useState } from 'react'

function EventHandlingDemo() {
    const [count, setCount] = useState(0);
    const handleButtonClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Event Handling Demo</h1>
            <h2>Count: {count}</h2>
            <button style={{ cursor: 'pointer' }} onClick={handleButtonClick}>Increment</button>
        </div>
    )
}

export default EventHandlingDemo 
