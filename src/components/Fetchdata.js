import {React, useState,useEffect} from 'react';

function FetchData ()
{
    const [user, setUser] = useState([]);
    const fetchdata = () =>
    {
        fetch("https://randomuser.me/api/")
          .then((response) => response.json())
          .then((data) => setUser(data));
    }


    useEffect(() =>
    {
        fetchdata();
    },[])



    return Object.keys(user).length > 0 ? (
        <div>
            
        <h1>Data Returned</h1>
        <h2>First Name:{user.results[0].name.first}</h2>
        <h2>Second Name:{user.results[0].name.last}</h2>

      </div>
    ) : (
      <h1>Data Pending...</h1>
    );
}

export default FetchData;