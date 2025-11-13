import React from 'react';
import { useLoaderData } from 'react-router';
import AllissuesCard from '../components/AllissuesCard';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const AllIssues = () => {
    //  const data = useLoaderData()
     const allIssues = useLoaderData()
     const garbageIssues = allIssues.filter(issue => issue.category === 'Garbage');
     const IllegalConstructionIssues = allIssues.filter(issue => issue.category === 'Illegal Construction');
     const BrokenPublicPropertyIssues = allIssues.filter(issue => issue.category === 'Broken Public Property');
     const RoadDamageIssues = allIssues.filter(issue => issue.category === 'Road Damage');
    
    // TyperWrit section
     const { text } = useTypewriter({
        words: ['Latest issues', ''],
        loop: {}, 
        typeSpeed: 80, 
        deleteSpeed: 80, 
        delaySpeed: 1000, 
    });

    return (
        <div>
            {/* typeCursor */}
             <div className="text-center text-4xl font-extrabold mt-10 text-green-600">
                {text}
                <Cursor cursorStyle='All Issues' cursorColor='#4CAF50' />
            </div>
            

            {/* Road Damage card */}
            <div className="text-2xl text-center font-bold"> Road Damage</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
                {RoadDamageIssues.map(issue => (<AllissuesCard key={issue._id} issue={issue} />))}
            </div>

            {/* Illegal Construction card */}
            <div className="text-2xl text-center font-bold"> Illegal Construction</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
                {IllegalConstructionIssues.map(issue => (<AllissuesCard key={issue._id} issue={issue} />))}
            </div>

            {/* Broken Public Property card */}
            <div className="text-2xl text-center font-bold"> Broken Public Property</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
                {BrokenPublicPropertyIssues.map(issue => (<AllissuesCard key={issue._id} issue={issue} />))}
            </div>
            
             {/* Garbage Issues card */}
            <div className="text-2xl text-center font-bold"> Garbage Issues</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
                {garbageIssues.map(issue => (<AllissuesCard key={issue._id} issue={issue} />))}
            </div>


            
        </div>
    );
};

export default AllIssues;