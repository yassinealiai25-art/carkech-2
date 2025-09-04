import React, { useEffect } from 'react';
import { services } from '../data/mockData';

const serviceDescriptions: string[] = [
    "Our fleet consists of modern, well-maintained vehicles to ensure a safe and comfortable journey. From compact cars to spacious SUVs, we have the perfect ride for you.",
    "Drive with peace of mind. All our rentals include comprehensive insurance coverage, protecting you against unforeseen circumstances during your trip.",
    "We are here for you anytime, day or night. Our dedicated support team is available around the clock to assist you with any inquiries or emergencies.",
    "Never get lost in the winding streets of Marrakech. Every vehicle is equipped with a modern GPS system to help you navigate with ease and confidence.",
    "Start your trip hassle-free. We offer convenient pickup and drop-off services directly at Marrakech-Menara Airport (RAK).",
    "Plans can change. We offer flexible booking options and a straightforward cancellation policy to accommodate your travel needs."
];

const ServicesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">Our Services</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        We are committed to providing you with the best car rental experience in Marrakech.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="bg-brand-secondary rounded-full p-5 mb-4 flex items-center justify-center w-24 h-24">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-2">{service.name}</h3>
                            <p className="text-gray-600">{serviceDescriptions[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
