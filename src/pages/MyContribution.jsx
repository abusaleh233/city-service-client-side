import React from 'react';
import { useLoaderData } from 'react-router';


const MyContribution = () => {
    const contributions = useLoaderData();

   
    const handleDownloadReport = (contributionId) => {
        alert(`pari na sorry : ${contributionId}`);
        
    };

    return (
        <div className="p-4 md:p-8">
            <title>My-Contribution-page</title>
            <h2 className="text-3xl text-center font-bold mb-8 text-primary">💰 My Contributions</h2>
            
            {contributions && contributions.length > 0 ? (
                <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-200">
                    <table className="table w-full text-left">
                        {/* table header */}
                        <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                            <tr>
                                <th>Issue Title</th>
                                <th>Name</th>
                                <th>Paid Amount</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        
                        {/* table */}
                        <tbody>
                            {contributions.map((contribution, index) => (
                                <tr key={contribution._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                    <td className="font-medium text-gray-900">{contribution.title}</td>
                                    <td>{contribution.name}</td>
                                    <td className="text-green-600 font-semibold">{contribution.amount} Taka</td>
                                    <td>{new Date(contribution.date).toLocaleDateString()}</td>
                                    <td>
                                        {/* Download button */}
                                        <button 
                                            onClick={() => handleDownloadReport(contribution._id)}
                                            className="btn btn-sm btn-ghost btn-info"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            Report
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                
                <div className="text-center py-10">
                    <p className="text-xl text-gray-500">You haven't made any contributions yet.</p>
                </div>
            )}
        </div>
    );
};

export default MyContribution;




