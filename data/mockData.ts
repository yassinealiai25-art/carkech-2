import { Vehicle, Service } from '../types';
import React from 'react';

// FIX: Replaced JSX with React.createElement calls to fix parsing errors in a .ts file.
// The file extension should ideally be .tsx to use JSX syntax.
const CarIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-brand-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 17H5.667l.38-1.52A2 2 0 018.007 14h5.986a2 2 0 011.967 1.48L17 17H13m-2-5l-1-4H5m14 0h-2.586a1 1 0 00-.949.684l-1.063 3.19A1 1 0 0113.316 12H11" })
);
const ShieldIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-brand-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.318-2.572A4 4 0 0112 16a4 4 0 013.682 1.845l5.318 2.572A12.02 12.02 0 0021 11.417a11.955 11.955 0 01-3.382-2.433z" })
);
const ClockIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-brand-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" })
);
const MapIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-brand-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })
);
const PlaneIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-brand-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }));
const CalendarIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-10 w-10 text-brand-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }));


export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: 'Renault Clio',
    pricePerDay: 250,
    imageUrl: 'https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'Economy',
    specs: { transmission: 'Manual', seats: 5, fuel: 'Gasoline', doors: 5 },
    description: 'The Renault Clio is a stylish, efficient, and comfortable supermini, perfect for navigating the vibrant streets of Marrakech and exploring the surrounding landscapes.'
  },
  {
    id: 2,
    name: 'Dacia Duster',
    pricePerDay: 350,
    imageUrl: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'SUV',
    specs: { transmission: 'Manual', seats: 5, fuel: 'Diesel', doors: 5 },
    description: 'Rugged and reliable, the Dacia Duster is your ideal companion for adventures into the Atlas Mountains or the Moroccan desert, offering space and performance.'
  },
  {
    id: 3,
    name: 'Hyundai Accent',
    pricePerDay: 280,
    imageUrl: 'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'Economy',
    specs: { transmission: 'Automatic', seats: 5, fuel: 'Gasoline', doors: 4 },
    description: 'A dependable and fuel-efficient sedan, the Hyundai Accent provides a smooth ride for city driving and day trips, combining comfort with modern features.'
  },
  {
    id: 4,
    name: 'Jeep Wrangler',
    pricePerDay: 700,
    imageUrl: 'https://images.pexels.com/photos/2127743/pexels-photo-2127743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'Luxury',
    specs: { transmission: 'Automatic', seats: 4, fuel: 'Gasoline', doors: 4 },
    description: 'For the ultimate adventure, the Jeep Wrangler offers unparalleled off-road capability and iconic style. Experience the freedom to explore Morocco\'s most remote areas.'
  },
  {
    id: 5,
    name: 'Mercedes-Benz Vito',
    pricePerDay: 800,
    imageUrl: 'https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'Van',
    specs: { transmission: 'Automatic', seats: 8, fuel: 'Diesel', doors: 4 },
    description: 'Perfect for larger groups or families, the Mercedes-Benz Vito offers premium comfort, ample space, and a touch of luxury for your travels around Morocco.'
  },
  {
    id: 6,
    name: 'Kia Picanto',
    pricePerDay: 220,
    imageUrl: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'Economy',
    specs: { transmission: 'Manual', seats: 4, fuel: 'Gasoline', doors: 5 },
    description: 'A compact and agile city car, the Kia Picanto is easy to park and navigate through narrow medina streets, making it a smart choice for urban exploration.'
  }
];

// FIX: Replaced JSX component usage with React.createElement to fix parsing errors in a .ts file.
export const services: Service[] = [
    { name: 'Quality Vehicles', icon: React.createElement(CarIcon) },
    { name: 'Full Insurance', icon: React.createElement(ShieldIcon) },
    { name: '24/7 Support', icon: React.createElement(ClockIcon) },
    { name: 'GPS Included', icon: React.createElement(MapIcon) },
    { name: 'Airport Pickup', icon: React.createElement(PlaneIcon) },
    { name: 'Flexible Booking', icon: React.createElement(CalendarIcon) },
];

export const vehicleTypes = ['All', 'Economy', 'SUV', 'Luxury', 'Van'];