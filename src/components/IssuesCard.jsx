import React from 'react';
import { Link } from 'react-router';

const IssuesCard = ({issue}) => {


    const {title, category, location,description, _id} = issue

    return (
    <div className="card p-5 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="grid grid-cols-1 gap-3">
                    <h2 className="card-title text-cyan-600 font-extrabold">{title}</h2>
                    <div className="font-bold text-sm ">{category}</div>
                    <div className="text-xs text-blue-700">{location}</div>
                    <p>{description}</p>
                    {/*Details link */}
                    <div className="card-actions justify-between items-center mt-4">
                    <Link to={`/issue-details/${_id}`} className="btn rounded-full bg-linear-to-r from-cyan-500 to-blue-800 hover:from-blue-600 hover:to-cyan-500 text-white w-full btn-sm">See Details</Link>
                    </div>
                </div>
            </div>
    );
};

export default IssuesCard;