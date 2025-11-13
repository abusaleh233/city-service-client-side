import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../conext/AuthContext';
import MyIssuesCard from '../components/MyIssuesCard';

const Myissues = () => {
    const {user} = useContext(AuthContext);
    const [issue,setIssue] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
    fetch(`http://localhost:3000/my-issues?email=${user.email}`)
    .then(res => res.json())
    .then(data =>{
        setIssue(data);
        setLoading(false)
    })

    },[user])

if(loading){
    return <div>Loading saleh ahmad</div>
}

    return (
       
   
            <div>
                <title>My issue-page</title>
              <div className="text-2xl text-center font-bold"> MY issue</div>
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 py-10">
                 {issue.map(issue => <MyIssuesCard key={issue._id} issue={issue}/>)}
              </div>
            </div>
        
    );
};

export default Myissues;