import CompoC from "./CompoC";
import {UserConsumer} from "./userContext";

function CompoB ()
{
    return <UserConsumer>
        {
            (username) =>
            {
                return <div>
                    <h1>Hi {username}</h1>
                    
                </div>
            }
        }
    </UserConsumer>
}

export default CompoB;