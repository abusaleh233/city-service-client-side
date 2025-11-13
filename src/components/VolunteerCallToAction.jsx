import React from 'react';

const VolunteerCallToAction = () => {
    // এখানে আপনি হ্যান্ডলার ফাংশন যোগ করতে পারেন, যেমন:
    const handleJoinClick = () => {
        // এই ফাংশনটি ইউজারকে রেজিস্ট্রেশন পেজ বা কন্টাক্ট ফর্মে রিডাইরেক্ট করবে
        alert('Thank you for your interest! Redirecting to the Volunteer Sign-up Page...');
        // window.location.href = '/volunteer-signup'; 
    };

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* হেডিং এবং বর্ণনা */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    🤝 Join Our Clean Drive!
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Join us in making your city cleaner and more beautiful. Your small efforts can make a big difference.
                </p>
                
                {/* CTA Button */}
                <button
                    onClick={handleJoinClick}
                    className="
                        px-10 py-4 
                        bg-cyan-500 text-white 
                        text-lg font-semibold 
                        rounded-full 
                        shadow-lg 
                        hover:bg-blue-600 
                        focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50
                        transition duration-300 transform hover:scale-105
                    "
                >
                    Become a Volunteer Today!
                </button>

                {/* অতিরিক্ত তথ্য */}
                <p className="mt-8 text-sm text-gray-500">
                    Any questions? Check out our FAQ section or contact us directly.
                </p>
            </div>
        </section>
    );
};

export default VolunteerCallToAction;