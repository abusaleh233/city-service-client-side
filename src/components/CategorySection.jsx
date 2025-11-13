import React from 'react';
import { Trash2, HardHat, Wrench, TrafficCone } from 'lucide-react'; 


const categories = [
    { title: 'Garbage', icon: Trash2, description: 'Report issues related to uncollected waste or accumulated garbage.', bgColor: 'bg-green-100', hoverColor: 'hover:bg-green-200', iconColor: 'text-green-600' },
    { title: 'Illegal Construction', icon: HardHat, description: 'Report unauthorized or illegal construction activities.', bgColor: 'bg-red-100', hoverColor: 'hover:bg-red-200', iconColor: 'text-red-600' },
    { title: 'Broken Public Property', icon: Wrench, description: 'Report damage to public assets like benches, lights, or signs.', bgColor: 'bg-blue-100', hoverColor: 'hover:bg-blue-200', iconColor: 'text-blue-600' },
    { title: 'Road Damage', icon: TrafficCone, description: 'Report potholes, cracks, or other damage affecting roads and pavements.', bgColor: 'bg-yellow-110', hoverColor: 'hover:bg-yellow-200', iconColor: 'text-yellow-600' },
];

const CategorySection = () => {
    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-6 p-4 sm:p-8">
            {categories.map((category, index) => {
                const IconComponent = category.icon; 

                return (
                    
                    <div 
                        key={index} 
                        className={`
                            flex flex-col items-center p-6 w-full sm:w-64 lg:w-72 
                            rounded-xl shadow-lg 
                            ${category.bgColor} 
                            ${category.hoverColor} 
                            transform transition duration-300 ease-in-out 
                            hover:scale-[1.02] hover:shadow-xl 
                            cursor-pointer border border-gray-200
                        `}
                    >
                        
                        <div className={`p-3 rounded-full mb-3 ${category.iconColor} bg-white shadow-md`}>
                            <IconComponent size={30} strokeWidth={2} />
                        </div>
                        
                        
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                            {category.title}
                        </h3>
                        
                        
                        
                        <p className="text-sm text-gray-600 text-center">
                            {category.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default CategorySection;