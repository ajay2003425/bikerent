'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Calendar, MapPin, Fuel, Clock, Star, Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { bikes, locations } from '@/lib/data';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';
import Link from 'next/link';

export default function BikeDetailsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const [bike, setBike] = useState(bikes.find(b => b.id === params.id));
  const [showBookingForm, setShowBookingForm] = useState(searchParams.get('book') === 'true');
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    pickupLocation: '',
    dropLocation: '',
    notes: ''
  });
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (bookingData.startDate && bookingData.endDate) {
      const start = new Date(bookingData.startDate);
      const end = new Date(bookingData.endDate);
      const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      if (days > 0 && bike) {
        setTotalPrice(days * bike.pricePerDay);
      }
    }
  }, [bookingData.startDate, bookingData.endDate, bike]);

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Bike not found</h1>
          <Link href="/bikes">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Bikes
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleBooking = async () => {
    if (!user) {
      toast.error('Please login to book a bike');
      return;
    }

    if (!bookingData.startDate || !bookingData.endDate || !bookingData.pickupLocation) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate booking API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Booking confirmed! Check your dashboard for details.');
      setShowBookingForm(false);
    } catch (error) {
      toast.error('Booking failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/bikes" className="hover:text-blue-600">Bikes</Link>
            <span>/</span>
            <span className="text-gray-900">{bike.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Back Button */}
            <Link href="/bikes">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Bikes
              </Button>
            </Link>

            {/* Bike Images */}
            <Card>
              <div className="relative h-96 rounded-t-lg overflow-hidden">
                <Image
                  src={bike.image}
                  alt={bike.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={bike.available ? "default" : "destructive"}>
                    {bike.available ? 'Available' : 'Unavailable'}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Bike Details */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-bold">{bike.name}</CardTitle>
                    <p className="text-lg text-gray-600">{bike.brand}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">₹{bike.pricePerDay}/day</div>
                    <div className="text-sm text-gray-600">₹{bike.pricePerHour}/hour</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">{bike.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">{bike.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">{bike.specs.fuelType}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">{bike.specs.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-gray-400" />
                    <span className="text-sm">4.5 Rating</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bike.specs.engine && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Engine:</span>
                        <span className="font-medium">{bike.specs.engine}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mileage:</span>
                      <span className="font-medium">{bike.specs.mileage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Top Speed:</span>
                      <span className="font-medium">{bike.specs.topSpeed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transmission:</span>
                      <span className="font-medium">{bike.specs.transmission}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {bike.features.map((feature, index) => (
                      <Badge key={index} variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Book This Bike</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!showBookingForm ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        ₹{bike.pricePerDay}/day
                      </div>
                      <div className="text-sm text-gray-600">
                        ₹{bike.pricePerHour}/hour
                      </div>
                    </div>
                    <Button 
                      onClick={() => setShowBookingForm(true)}
                      className="w-full"
                      disabled={!bike.available}
                    >
                      {bike.available ? 'Book Now' : 'Unavailable'}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input
                          id="startDate"
                          type="date"
                          value={bookingData.startDate}
                          onChange={(e) => setBookingData({...bookingData, startDate: e.target.value})}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="endDate">End Date</Label>
                        <Input
                          id="endDate"
                          type="date"
                          value={bookingData.endDate}
                          onChange={(e) => setBookingData({...bookingData, endDate: e.target.value})}
                          min={bookingData.startDate || new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Pickup Location</Label>
                      <Select onValueChange={(value) => setBookingData({...bookingData, pickupLocation: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select pickup location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Drop Location</Label>
                      <Select onValueChange={(value) => setBookingData({...bookingData, dropLocation: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select drop location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="notes">Special Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any special requirements..."
                        value={bookingData.notes}
                        onChange={(e) => setBookingData({...bookingData, notes: e.target.value})}
                      />
                    </div>

                    {totalPrice > 0 && (
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center text-lg font-bold">
                          <span>Total Price:</span>
                          <span className="text-blue-600">₹{totalPrice}</span>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Button onClick={handleBooking} className="w-full">
                        Confirm Booking
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setShowBookingForm(false)}
                        className="w-full"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Safety Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Safety & Policy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600">
                <p>• Valid driving license required</p>
                <p>• Helmet provided with every rental</p>
                <p>• 24/7 roadside assistance available</p>
                <p>• Damage inspection before & after</p>
                <p>• Free cancellation up to 24 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}