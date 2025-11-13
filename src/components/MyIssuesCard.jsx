import React from 'react';
import { Link } from 'react-router';

const MyIssuesCard = ({issue}) => {

    const {title, category, location,amount, _id, image} = issue

    return (
         <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <figure className="h-48 overflow-hidden">
                <img
                src={image}
                alt={name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
            </figure>
            <div className="">
                <h2 className="card-title text-cyan-600">{title}</h2>
                <div className="font-bold text-sm ">{category}</div>
                <div className='flex justify-between py-3 items-center'>
                    <div className="text-xs text-blue-700">{location}</div>
                    <p className="font-semibold bg-cyan-200 px-2 rounded-full">{amount}</p>
                </div>
                {/*Details link */}
                <div className="card-actions justify-between items-center mt-4">
                <Link to={`/my-issue-details/${_id}`} className="btn rounded-full bg-linear-to-r from-cyan-500 to-blue-800 hover:from-blue-600 hover:to-cyan-500 text-white w-full btn-sm">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default MyIssuesCard;