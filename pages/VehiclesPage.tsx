
import React, { useState, useMemo } from 'react';
import VehicleCard from '../components/VehicleCard';
import VehicleFilter from '../components/VehicleFilter';
import { vehicles } from '../data/mockData';

const VehiclesPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState('All');

  const filteredVehicles = useMemo(() => {
    if (selectedType === 'All') {
      return vehicles;
    }
    return vehicles.filter(vehicle => vehicle.type === selectedType);
  }, [selectedType]);

  return (
    <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-center mb-4 text-brand-dark">Our Fleet</h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Find the perfect vehicle for your Moroccan adventure. From compact city cars to rugged SUVs, we have a ride for every journey.
            </p>

            <VehicleFilter selectedType={selectedType} onSelectType={setSelectedType} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
            </div>
            {filteredVehicles.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No vehicles found for the selected type.</p>
            )}
        </div>
    </div>
  );
};

export default VehiclesPage;
