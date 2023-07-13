import {React,useState,useEffect} from 'react'

function UseEffectsHook ()
{

    const [toggle, setTag] = useState(true);
    
    useEffect(() =>
    {
        document.title=toggle?"Welcome to hotel":"Using the useEffect Hook"
    },[])
    const clickHandler = () =>
    {
        setTag(!toggle);
    }





    return <div>
        <h1>Hooks</h1>
        <button onClick={clickHandler}>Toggle message</button>
        {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
}

export default UseEffectsHook