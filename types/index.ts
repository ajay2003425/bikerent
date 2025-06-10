export interface Bike {
  id: string;
  name: string;
  brand: string;
  type: string;
  pricePerHour: number;
  pricePerDay: number;
  image: string;
  description: string;
  specs: {
    engine?: string;
    mileage: string;
    fuelType: string;
    transmission: string;
    topSpeed: string;
  };
  available: boolean;
  location: string;
  features: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  isAdmin: boolean;
}

export interface Booking {
  id: string;
  userId: string;
  bikeId: string;
  startDate: string;
  endDate: string;
  pickupLocation: string;
  dropLocation: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}