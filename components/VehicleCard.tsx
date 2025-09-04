import React from 'react';
import { Link } from 'react-router-dom';
import { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <Link to={`/vehicles/${vehicle.id}`} className="group block overflow-hidden">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out p-4 flex flex-col items-center text-center relative">
        <div className="absolute top-2 right-2 text-brand-primary opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 0-5 5c0 1.5.7 2.8 1.7 3.7L6 13h12l-2.7-2.3c1-1 1.7-2.2 1.7-3.7a5 5 0 0 0-5-5zM8 15h8v2H8zM7 19h10v2H7z"/></svg>
        </div>
         <img
            src={vehicle.imageUrl}
            alt={vehicle.name}
            className="w-full h-40 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-300"
        />
        <h3 className="text-lg font-bold text-brand-dark">{vehicle.name}</h3>
        <p className="text-sm text-gray-500">From <span className="text-brand-primary font-semibold text-lg">{vehicle.pricePerDay} DH</span>/day</p>
      </div>
    </Link>
  );
};

export default VehicleCard;