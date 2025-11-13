import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from "sweetalert2";
import { toast } from 'react-toastify';

const MyIssueDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();


const handleSubmit = (e) => {
        e.preventDefault();

    const formData = {
        title: e.target.title.value,
        category: e.target.category.value,
        description: e.target.description.value,
        amount: e.target.amount.value,
    };
       
        fetch(`http://localhost:3000/issues/${data._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("Successfully updated!");
                navigate('/myissues')
            })
            .catch((err) => {
                console.log(err);
            });
    };




const handleDlete = () => {
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
    }).then((result) => {
  if (result.isConfirmed) {
     
    fetch(`http://localhost:3000/issues/${data._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
        .then(data=> {
        console.log(data)
        navigate('/myissues')

        Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
        });
    })
    .catch(err => {
        console.log(err)
        })

      }
    });
 }










    return (
         <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
            <title>My-Issue-Details-page</title>
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
        


                    {/* update modal */}

                    <div>
                            {/* Update Button */}
                            <button className="btn btn-sm px-5 rounded-full bg-linear-to-r from-cyan-500 to-blue-800 text-white border-0 hover:from-blue-800 hover:to-cyan-500"
                            onClick={() => document.getElementById('my_modal_1').showModal()}>
                             Update</button>

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
                                                defaultValue={data.title}
                                                name="title"
                                                placeholder="Pothole on main road"
                                                className="input input-bordered w-full"
                                                required/>
                                        </div>

                                        {/* Category */}
                                        <div className='text-start'>
                                            <label className="label">
                                                <span className="label-text">Category</span>
                                            </label>
                                            <select
                                                name="category"
                                                className="select select-bordered w-full"
                                                required
                                            >
                                                <option value="" disabled>Select Category</option>
                                                <option value="Garbage">Garbage</option>
                                                <option value="Illegal Construction">Illegal Construction</option>
                                                <option value="Broken Public Property">Broken Public Property</option>
                                                <option value="Road Damage">Road Damage</option>
                                            </select>
                                        </div>

                                        {/* Amount */}
                                        <div className='text-start'>
                                            <label className="label">
                                                <span className="label-text">Amount (Taka)</span>
                                            </label>
                                            <input
                                                type="number"
                                                defaultValue={data.amount}
                                                name="amount"
                                                placeholder="1000"
                                                className="input input-bordered w-full"
                                                required
                                            />
                                        </div>

                                        {/* Description */}
                                        <div className='text-start'>
                                            <label className="label">
                                                <span className="label-text">Description</span>
                                            </label>
                                            <textarea
                                                name="description"
                                                defaultValue={data.description}
                                                placeholder="Detailed description of the issue..."
                                                className="textarea textarea-bordered h-24 w-full"
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="modal-action flex justify-center mt-6 mb-3">
                                            {/* Update Button */}
                                            <button type="submit" className="btn btn-p w-full rounded-full bg-linear-to-r from-cyan-500 to-blue-800 text-white border-0 hover:from-blue-800 hover:to-cyan-500">
                                                Update
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


                    <button onClick={handleDlete}  className="btn btn-sm px-5 rounded-full bg-linear-to-r from-pink-500 to-red-600 text-white border-0 hover:from-red-600 hover:to-pink-500">
                        Delete
                    </button>

                    </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default MyIssueDetails;