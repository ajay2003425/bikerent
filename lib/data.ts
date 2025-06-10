import { Bike } from '@/types';

export const bikes: Bike[] = [
  {
    id: '1',
    name: 'Royal Enfield Classic 350',
    brand: 'Royal Enfield',
    type: 'Cruiser',
    pricePerHour: 12,
    pricePerDay: 180,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg',
    description: 'Experience the thrill of riding with the iconic Royal Enfield Classic 350. Perfect for city rides and weekend adventures.',
    specs: {
      engine: '349cc Single Cylinder',
      mileage: '35-40 km/l',
      fuelType: 'Petrol',
      transmission: 'Manual',
      topSpeed: '104 km/h'
    },
    available: true,
    location: 'Mumbai',
    features: ['ABS', 'Electric Start', 'USB Charging', 'LED Headlight']
  },
  {
    id: '2',
    name: 'Honda Activa 6G',
    brand: 'Honda',
    type: 'Scooter',
    pricePerHour: 8,
    pricePerDay: 120,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg',
    description: 'Reliable and fuel-efficient Honda Activa 6G, perfect for daily commuting and short trips around the city.',
    specs: {
      engine: '109.51cc Single Cylinder',
      mileage: '50-55 km/l',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      topSpeed: '83 km/h'
    },
    available: true,
    location: 'Delhi',
    features: ['LED Headlight', 'USB Charging', 'Combi Brake', 'Silent Start']
  },
  {
    id: '3',
    name: 'KTM Duke 390',
    brand: 'KTM',
    type: 'Sports',
    pricePerHour: 20,
    pricePerDay: 300,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg',
    description: 'High-performance KTM Duke 390 for those who seek adrenaline and speed. Perfect for highway cruising.',
    specs: {
      engine: '373cc Single Cylinder',
      mileage: '25-30 km/l',
      fuelType: 'Petrol',
      transmission: 'Manual',
      topSpeed: '167 km/h'
    },
    available: true,
    location: 'Bangalore',
    features: ['ABS', 'Slipper Clutch', 'TFT Display', 'LED Lighting']
  },
  {
    id: '4',
    name: 'Hero Electric Optima',
    brand: 'Hero Electric',
    type: 'Electric',
    pricePerHour: 6,
    pricePerDay: 90,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg',
    description: 'Eco-friendly electric scooter with zero emissions. Perfect for environmentally conscious riders.',
    specs: {
      engine: 'Electric Motor',
      mileage: '80-100 km per charge',
      fuelType: 'Electric',
      transmission: 'Automatic',
      topSpeed: '45 km/h'
    },
    available: true,
    location: 'Pune',
    features: ['Zero Emissions', 'Quick Charging', 'Digital Display', 'Anti-theft Alarm']
  },
  {
    id: '5',
    name: 'Bajaj Pulsar 220F',
    brand: 'Bajaj',
    type: 'Sports',
    pricePerHour: 15,
    pricePerDay: 220,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg',
    description: 'Sporty Bajaj Pulsar 220F with powerful engine and aggressive styling. Great for long rides.',
    specs: {
      engine: '220cc Single Cylinder',
      mileage: '35-40 km/l',
      fuelType: 'Petrol',
      transmission: 'Manual',
      topSpeed: '144 km/h'
    },
    available: false,
    location: 'Chennai',
    features: ['Semi-Fairing', 'Oil Cooled Engine', 'Electric Start', 'Alloy Wheels']
  },
  {
    id: '6',
    name: 'TVS Apache RTR 160',
    brand: 'TVS',
    type: 'Sports',
    pricePerHour: 10,
    pricePerDay: 150,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg',
    description: 'Stylish and performance-oriented TVS Apache RTR 160. Perfect balance of power and efficiency.',
    specs: {
      engine: '159.7cc Single Cylinder',
      mileage: '45-50 km/l',
      fuelType: 'Petrol',
      transmission: 'Manual',
      topSpeed: '114 km/h'
    },
    available: true,
    location: 'Hyderabad',
    features: ['Racing Throttle Response', 'Petal Disc Brakes', 'LED Tail Light', 'Split Seat']
  }
];

export const locations = [
  'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad', 'Kolkata', 'Ahmedabad'
];

export const bikeTypes = [
  'All Types', 'Scooter', 'Sports', 'Cruiser', 'Electric', 'Mountain', 'Touring'
];

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Mumbai',
    rating: 5,
    comment: 'Amazing service! The bike was in perfect condition and the booking process was super smooth. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    comment: 'Great experience with BikeRent. Clean bikes, fair pricing, and excellent customer service. Will definitely use again!',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
  },
  {
    id: 3,
    name: 'Arjun Patel',
    location: 'Bangalore',
    rating: 4,
    comment: 'Convenient and reliable bike rental service. The KTM Duke was a beast to ride. Perfect for weekend trips!',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
  }
];