
export interface Vehicle {
  id: number;
  name: string;
  pricePerDay: number;
  imageUrl: string;
  type: 'Economy' | 'SUV' | 'Luxury' | 'Van';
  specs: {
    transmission: 'Automatic' | 'Manual';
    seats: number;
    fuel: 'Gasoline' | 'Diesel';
    doors: number;
  };
  description: string;
}

export interface Service {
  name: string;
  icon: React.ReactNode;
}
