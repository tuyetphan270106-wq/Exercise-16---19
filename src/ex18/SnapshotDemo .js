import React, { useState } from 'react'

function SnapshotDemo() {
    const [count, setCount] = useState(0);
    const [snapshot, setSnapshot] = useState(null);

    const handleButtonClick = () => {
        setCount(count + 1);
    }
    const handleSnapshot = () => {
        setSnapshot(count);
    }
    const handleRestore = () => {
        if (snapshot != null) {
            setCount(snapshot);
        }
    }


    return (
        <div>
            <h1>State as a Snapshot Demo</h1>
            <h2>Count: {count}</h2>
            <button onClick={handleButtonClick}>Increment</button>
            <button onClick={handleSnapshot}>Take Snapshot</button>
            <button onClick={handleRestore}>Restore Snapshot</button>
        </div>
    )
}

export default SnapshotDemo 
