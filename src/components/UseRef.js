import React from 'react';

function UseRef ()
{
    const formInputRef = React.useRef(null)
    const focusInput = () =>
    {
        formInputRef.current.focus();
    } 
    return <div>
        <h1>UseRef</h1>
        <input ref={formInputRef} />
        <button onClick={focusInput}>Focus</button>
    </div>
}

export default UseRef;