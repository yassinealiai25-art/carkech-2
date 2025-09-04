import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { vehicles } from '../data/mockData';

const VehicleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = vehicles.find(v => v.id === parseInt(id || ''));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!vehicle) {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-2xl font-bold">Vehicle not found</h1>
        </div>
    );
  }

  const WHATSAPP_NUMBER = "212600000000"; // Use your actual number without '+' or '00'
  const message = `Hello Marrakech Rentals, I'm interested in renting the ${vehicle.name}.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const telUrl = `tel:+${WHATSAPP_NUMBER}`;


  return (
    <div className="bg-brand-secondary py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden md:grid md:grid-cols-2 md:gap-x-12">
                <div className="p-4 md:p-0">
                    <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full h-full object-cover"/>
                </div>

                <div className="p-8">
                    <h1 className="text-4xl font-extrabold text-brand-dark mb-2">{vehicle.name}</h1>
                    <p className="text-2xl font-semibold text-brand-primary mb-6">
                        {vehicle.pricePerDay} DH <span className="text-sm font-normal text-gray-500">/ per day</span>
                    </p>
                    
                    <p className="text-gray-600 mb-8">{vehicle.description}</p>
                    
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-brand-dark mb-4">Specifications</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-gray-100 p-3 rounded-lg"><strong>Type:</strong> {vehicle.type}</div>
                            <div className="bg-gray-100 p-3 rounded-lg"><strong>Transmission:</strong> {vehicle.specs.transmission}</div>
                            <div className="bg-gray-100 p-3 rounded-lg"><strong>Seats:</strong> {vehicle.specs.seats}</div>
                            <div className="bg-gray-100 p-3 rounded-lg"><strong>Fuel:</strong> {vehicle.specs.fuel}</div>
                            <div className="bg-gray-100 p-3 rounded-lg"><strong>Doors:</strong> {vehicle.specs.doors}</div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href={telUrl} className="flex-1 text-center bg-brand-dark text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300">
                            Reserve by Phone
                        </a>
                         <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-all duration-300">
                            Reserve on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default VehicleDetailPage;