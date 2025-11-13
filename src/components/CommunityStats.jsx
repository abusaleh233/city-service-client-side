import React from 'react';


const statsData = [
    {
        id: 1,
        title: "Total Users",
        value: 1250, 
        icon: "👥", 
        color: "bg-blue-100 text-blue-800"
    },
    {
        id: 2,
        title: "Issues Resolved",
        value: 480, 
        icon: "✅",
        color: "bg-green-100 text-green-800"
    },
    {
        id: 3,
        title: "Issues Pending",
        value: 125, 
        icon: "⚠️",
        color: "bg-yellow-100 text-yellow-800"
    },
];

const CommunityStats = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
                Community Stats
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {statsData.map(stat => (
                    
                    <div
                        key={stat.id}
                        className={`p-6 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl ${stat.color} flex items-center space-x-4`}
                    >
                        
                        <div className="text-4xl">
                            {stat.icon}
                        </div>
                        
                        <div>
                            <p className="text-sm font-medium uppercase opacity-80">
                                {stat.title}
                            </p>
                            <p className="text-4xl font-bold">
                                {stat.value.toLocaleString()} 
                              
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommunityStats;