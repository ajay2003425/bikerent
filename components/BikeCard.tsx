import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Fuel } from 'lucide-react';
import { Bike } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BikeCardProps {
  bike: Bike;
}

export default function BikeCard({ bike }: BikeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48">
        <Image
          src={bike.image}
          alt={bike.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 right-3">
          <Badge variant={bike.available ? "default" : "destructive"}>
            {bike.available ? 'Available' : 'Unavailable'}
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{bike.name}</h3>
          <span className="text-sm text-gray-500">{bike.brand}</span>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{bike.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Fuel className="h-4 w-4" />
            <span>{bike.specs.fuelType}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{bike.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">₹{bike.pricePerHour}/hour</span>
            </div>
            <div className="text-lg font-bold text-gray-900">₹{bike.pricePerDay}/day</div>
          </div>
          
          <div className="space-y-2">
            <Link href={`/bikes/${bike.id}`}>
              <Button variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </Link>
            <Link href={`/bikes/${bike.id}?book=true`}>
              <Button 
                size="sm" 
                className="w-full" 
                disabled={!bike.available}
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}