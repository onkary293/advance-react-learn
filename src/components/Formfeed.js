import {React, useState} from 'react';

function Formfeed ()
{
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (Number(score) <= 5 || comment.length <= 10)
        {
            
            alert("Tell me something to improve");
            return;
        }
        console.log("Form Submited")
        console.log(`${score} ${comment}`)
        setComment("")
        setScore("10")
        
    }
    return (<div>
        <h1>Form Feedback</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <label>Score: {score}</label>
                    <input type="range"
                        min="0"
                        max="10"
                        value={score}
                        onChange={e => setScore(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="label">Comment:</label>
                    <textarea name="label" id="label" cols="30" rows="10" placeholder='Enter the Comment' value={comment} onChange={e => setComment(e.target.value)} />
                </div>
            </fieldset>
                <button type="submit">Submit</button>
        </form>
    </div>);
}

export default Formfeed;