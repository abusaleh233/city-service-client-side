import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../conext/AuthContext';

const IssueDetails = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        const formData = {
            title: e.target.title.value,
            amount: e.target.amount.value,
            name: e.target.name.value,
            number: e.target.number.value,
            address: e.target.address.value,
            email: user.email,
            date: new Date(),
        };
        console.log(formData);
           
            fetch("http://localhost:3000/contribution", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    toast.success("Successfully Pay!");
                    navigate('/mycontribution')
                })
                .catch((err) => {
                    console.log(err);
                });
        };



    return (
        <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
            <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
                <div className="shrink-0 w-full md:w-1/2">
                    <img
                    src={data.image}
                    alt=""
                    className="w-full object-cover rounded-xl shadow-md"
                    />
                </div>

                <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
                
                    <h1 className="text-start text-sm md:text-xl font-bold text-gray-800">
                    {data.title}
                    </h1>

                
                    <div className='flex justify-between'>
                        <div className="badge badge-lg badge-outline text-cyan-500 border-blue-800 font-medium">
                        {data.category}
                        </div>
                        <div className="badge badge-lg badge-outline text-cyan-500 border-blue-800 font-medium">
                        {data.amount}
                        </div>
                    </div>

                    
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {data.description}
                    </p>

                     <div className='flex justify-between'>
                        <div className="  text-gray-500  font-medium">
                        {data.location}
                        </div>
                        <div className="  text-gray-500  font-medium">
                        {data.date}
                        </div>
                    </div>

                    
                    <div className="flex gap-3 mt-6">
                        

                        <div>
                            {/* Update Button */}
                            <button className="btn btn-sm px-5 rounded-full bg-linear-to-r from-cyan-500 to-blue-800 text-white border-0 hover:from-blue-800 hover:to-cyan-500"
                            onClick={() => document.getElementById('my_modal_1').showModal()}>
                              Pay Clean-Up</button>

                            {/* Modal Dialog */}
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-xl mb-4 text-primary">Update Issue Details</h3>
                                    
                                    {/* --- Update Form ---   */}
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        
                                        {/* Title */}
                                        <div className='text-start'>
                                            <label className="label">
                                             <span className="label-text">Title</span></label>
                                            <input
                                                type="text"
                                                name="title"
                                                placeholder="Pothole on main road"
                                                className="input input-bordered w-full"
                                                required/>
                                        </div>

                                        {/* Amount */}
                                        <div className='text-start'>
                                            <label className="label">
                                                <span className="label-text">Amount (Taka)</span>
                                            </label>
                                            <input
                                                type="number"
                                                name="amount"
                                                placeholder="1000"
                                                className="input input-bordered w-full"
                                                required
                                            />
                                        </div>
                                        {/* Name */}
                                        <div className='text-start'>
                                            <label className="label">
                                             <span className="label-text">Name</span></label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                className="input input-bordered w-full"
                                                required/>
                                        </div>

                                        {/* Phone Number */}
                                        <div className='text-start'>
                                            <label className="label">
                                             <span className="label-text">Phone Number</span></label>
                                            <input
                                                type="number"
                                                name="number"
                                                placeholder="Your Phone Number"
                                                className="input input-bordered w-full"
                                                required/>
                                        </div>
                                           {/* Name */}
                                        <div className='text-start'>
                                            <label className="label">
                                             <span className="label-text">Address</span></label>
                                            <input
                                                type="text"
                                                name="address"
                                                placeholder="Your Adress"
                                                className="input input-bordered w-full"
                                                required/>
                                        </div>

                                    

                                        <div className="modal-action flex justify-center mt-6 mb-3">
                                            {/* Update Button */}
                                            <button type="submit" className="btn btn-p w-full rounded-full bg-linear-to-r from-cyan-500 to-blue-800 text-white border-0 hover:from-blue-800 hover:to-cyan-500">
                                                Pay Clean-Up
                                            </button>

                                        </div>

                                    </form>
                                    {/* --- End of Form --- */}
                                    {/* Close Button (using form method="dialog") */}
                                    <form method="dialog">
                                        <button className="btn btn-p w-full rounded-full bg-linear-to-r from-cyan-500 to-blue-800 text-white border-0 hover:from-blue-800 hover:to-cyan-500">Cancel</button>
                                    </form>
                                </div>
                            </dialog>
                    </div>


            

                    </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default IssueDetails;