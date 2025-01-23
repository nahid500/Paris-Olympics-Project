import React from 'react';



const highlightsData = [
    { title: "Opening Ceremony", description: "Experience the grandeur of the opening ceremony in the heart of Paris.", imageUrl: "https://img.olympics.com/images/image/private/t_16-9_640/f_auto/primary/hxmgguxaxqb70yyfd3jq" },
    { title: "Historic Performances", description: "Witness athletes breaking records and achieving their dreams.", imageUrl: "https://img.olympics.com/images/image/private/t_16-9_640/f_auto/primary/so3meyypjsrnpjvrdwnt" },
    { title: "Cultural Events", description: "Enjoy a variety of cultural displays celebrating global diversity.", imageUrl: "https://img.olympics.com/images/image/private/t_16-9_640/f_auto/primary/gm0gdkirijds03bnjram" },
    { title: "Medal Highlights", description: "Follow the journey of athletes as they compete for glory.", imageUrl: "https://img.olympics.com/images/image/private/t_16-9_380/f_auto/primary/rfzeyejqvcmgtixbgttf" },
    { title: "Opening Ceremony", description: "Experience the grandeur of the opening ceremony in the heart of Paris.", imageUrl: "https://img.olympics.com/images/image/private/t_16-9_640/f_auto/primary/hxmgguxaxqb70yyfd3jq" },
    { title: "Historic Performances", description: "Witness athletes breaking records and achieving their dreams.", imageUrl: "https://img.olympics.com/images/image/private/t_16-9_640/f_auto/primary/so3meyypjsrnpjvrdwnt" },
    { title: "Cultural Events", description: "Enjoy a variety of cultural displays celebrating global diversity.", imageUrl: "https://img.olympics.com/images/image/private/t_16-9_640/f_auto/primary/gm0gdkirijds03bnjram" },
    { title: "Medal Highlights", description: "Follow the journey of athletes as they compete for glory.", imageUrl: "https://img.olympics.com/images/image/private/t_16-9_380/f_auto/primary/rfzeyejqvcmgtixbgttf" }
];


const Highlights_card = () => {
    // return (
    //     <div className=''>

    //     <h1 className='text-2xl font-bold text-center my-4 text-gray-800'>Highlights</h1>
    //         <div className=''>


    //         </div>
    //     </div>
    // );

    return (
        <div className="p-6 bg-gray-100 rounded-lg">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Highlights</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlightsData.map((highlight, index) => (
                    <div key={index} className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <img
                            src={highlight.imageUrl}
                            alt={highlight.title}
                            className="w-full h-40 object-cover rounded-t-lg mb-2"
                        />
                        <h2 className="text-lg font-semibold text-blue-600">{highlight.title}</h2>
                        <p className="text-sm text-gray-600">{highlight.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Highlights_card;