import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../conext/AuthContext';
import { toast } from 'react-toastify';

const AddIssues = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
        title: e.target.title.value,
        category: e.target.category.value,
        location: e.target.location.value,
        description: e.target.description.value,
        image: e.target.image.value,
        amount: e.target.amount.value,
        email: user.email,
        date: new Date(),
        
        }

        fetch('https://city-service-server-sitd.vercel.app/issues', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data=> {
        toast.success("Successfully Added")
        navigate('/allissues')
        console.log(data)
        })
        .catch(err => {
        console.log(err)
        })
    
    }




    return (
            <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
                <title>Add issue-page</title>
            <div className="card-body p-3 relative">
                <h2 className="text-2xl font-bold text-center mb-6">Add New Issue</h2>

            {/* ful form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                
                {/*Title Field */}
                <div className="text-start">
                    <label className="label font-medium">Title</label>
                    <input
                    type="text"
                    name="title"
                    required
                    className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                    placeholder="Enter Title"/>
                </div>
                 {/* Location Field */}
                <div className="text-start">
                    <label className="label font-medium">Location</label>
                    <input
                    type="text"
                    name="location"
                    required
                    className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                    placeholder="Enter location"
                    />
                </div>
                {/* amount Field */}
                <div className="text-start">
                    <label className="label font-medium">Amount</label>
                    <input
                    type="text"
                    name="amount"
                    required
                    className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                    placeholder="Enter amount"
                    />
                </div>

                {/* Category Dropdown */}
                <div className="text-start">
                    <label className="label font-medium">Category</label>
                    <select
                    defaultValue={""}
                    name="category"
                    required
                    className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                    >
                    <option value="" disabled>
                        Select category
                    </option>
                    <option value="Garbage">Garbage</option>
                    <option value="Illegal Construction">Illegal Construction</option>
                    <option value="Broken Public Property">Broken Public Property</option>
                    <option value="Road Damage">Road Damage</option>
                    </select>
                </div>

                {/* Description Textarea */}
                <div className="text-start">
                    <label className="label font-medium">Description</label>
                    <textarea
                    name="description"
                    required
                    rows="3"
                    className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[150px]"
                    placeholder="Enter description"
                    ></textarea>
                </div>

                {/* image URL */}
                <div className="text-start">
                    <label className="label font-medium">image URL</label>
                    <input
                    type="url"
                    name="image"
                    required
                    className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                    placeholder="https://example.com/image.jpg"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-cyan-500 to-blue-800 hover:from-blue-6800 hover:to-cyan-500"
                >
                    Add Issue
                </button>
                </form>
            </div>
        </div>
    );
};

export default AddIssues;