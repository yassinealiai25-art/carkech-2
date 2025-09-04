
import React from 'react';
import { Link } from 'react-router-dom';
import { vehicles, services } from '../data/mockData';
import VehicleCard from '../components/VehicleCard';
import { Service } from '../types';

const Hero: React.FC = () => (
  <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white text-center px-4" style={{ backgroundImage: 'url(https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">EXPLORE MARRAKECH WITH FREEDOM</h1>
      <p className="text-lg md:text-xl mb-8 drop-shadow">Your Journey Begins Here</p>
      <Link to="/vehicles" className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
        VIEW OUR FLEET
      </Link>
    </div>
  </div>
);

const OurVehicles: React.FC = () => (
  <div className="py-16 sm:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">OUR VEHICLES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.slice(0, 3).map(vehicle => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/vehicles" className="text-brand-primary font-semibold hover:underline">
          View All Vehicles &rarr;
        </Link>
      </div>
    </div>
  </div>
);

const OurServices: React.FC = () => (
    <section id="services" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12 text-brand-dark">OUR SERVICES</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {services.map((service: Service, index: number) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="bg-brand-secondary rounded-full p-5 mb-4 flex items-center justify-center w-24 h-24">
                           {service.icon}
                        </div>
                        <h3 className="font-semibold text-brand-dark">{service.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


const ContactSection: React.FC = () => (
  <section id="contact" className="py-16 sm:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-brand-dark">GET IN TOUCH</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-8">
        Have questions or ready to book your car? Contact us!
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="font-semibold">Phone: <a href="tel:+212600000000" className="text-brand-primary hover:underline">+212 6 00 00 00 00</a></div>
        <div className="font-semibold">Email: <a href="mailto:contact@marrakechrentals.com" className="text-brand-primary hover:underline">contact@marrakechrentals.com</a></div>
      </div>
    </div>
  </section>
);


const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <OurVehicles />
      <OurServices />
      <ContactSection />
    </div>
  );
};

export default HomePage;
