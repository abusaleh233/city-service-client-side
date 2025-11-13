
import React from 'react';

const MyContributionCard = ({contribution}) => {
    const {title, name, amount,date} = contribution
    return (
        <div className="card  bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="">
                    <h2 className="card-title text-3xl text-cyan-600">{title}</h2>
                    <div className="font-bold text-sm ">Contributor Name: {name}</div>
                    <div className="text-2xl font-bold text-blue-700">Pay Amount: {amount} taka</div>
                    <p>{date}</p>
                    {/*Details link */}
                    <div className="card-actions justify-between items-center mt-4">
                    <button className="btn rounded-full bg-linear-to-r from-cyan-500 to-blue-800 hover:from-blue-600 hover:to-cyan-500 text-white w-full btn-sm">Download</button>
                    </div>
                </div>
            </div>
    );
};

export default MyContributionCard;