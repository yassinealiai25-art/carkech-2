
import React from 'react';
import { vehicleTypes } from '../data/mockData';

interface VehicleFilterProps {
  selectedType: string;
  onSelectType: (type: string) => void;
}

const VehicleFilter: React.FC<VehicleFilterProps> = ({ selectedType, onSelectType }) => {
  return (
    <div className="mb-8 flex justify-center flex-wrap gap-2">
      {vehicleTypes.map((type) => (
        <button
          key={type}
          onClick={() => onSelectType(type)}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
            selectedType === type
              ? 'bg-brand-primary text-white shadow'
              : 'bg-white text-brand-dark hover:bg-gray-100'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default VehicleFilter;
