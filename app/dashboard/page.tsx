'use client';

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CreditCard, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';
import Image from 'next/image';
import Link from 'next/link';
import { bikes } from '@/lib/data';

interface MockBooking {
  id: string;
  bikeId: string;
  bikeName: string;
  bikeImage: string;
  startDate: string;
  endDate: string;
  pickupLocation: string;
  dropLocation: string;
  totalPrice: number;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [mockBookings] = useState<MockBooking[]>([
    {
      id: '1',
      bikeId: '1',
      bikeName: 'Royal Enfield Classic 350',
      bikeImage: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg',
      startDate: '2024-02-15',
      endDate: '2024-02-17',
      pickupLocation: 'Mumbai',
      dropLocation: 'Mumbai',
      totalPrice: 540,
      status: 'upcoming'
    },
    {
      id: '2',
      bikeId: '3',
      bikeName: 'KTM Duke 390',
      bikeImage: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg',
      startDate: '2024-01-20',
      endDate: '2024-01-22',
      pickupLocation: 'Bangalore',
      dropLocation: 'Bangalore',
      totalPrice: 600,
      status: 'completed'
    }
  ]);

  const handleCancelBooking = (bookingId: string) => {
    toast.success('Booking cancelled successfully');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'default';
      case 'completed': return 'secondary';
      case 'cancelled': return 'destructive';
      default: return 'default';
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please login to access dashboard</h1>
          <Link href="/auth">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    );
  }

  const upcomingBookings = mockBookings.filter(b => b.status === 'upcoming');
  const completedBookings = mockBookings.filter(b => b.status === 'completed');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
          <p className="text-gray-600">Manage your bookings and profile here</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Upcoming Bookings</p>
                  <p className="text-3xl font-bold text-blue-600">{upcomingBookings.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Bookings</p>
                  <p className="text-3xl font-bold text-green-600">{mockBookings.length}</p>
                </div>
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Spent</p>
                  <p className="text-3xl font-bold text-purple-600">
                    ₹{mockBookings.reduce((sum, b) => sum + b.totalPrice, 0)}
                  </p>
                </div>
                <CreditCard className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bookings Section */}
        <Card>
          <CardHeader>
            <CardTitle>My Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="space-y-4">
                {upcomingBookings.length > 0 ? (
                  upcomingBookings.map((booking) => (
                    <Card key={booking.id} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                          <div className="flex items-center space-x-4">
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                              <Image
                                src={booking.bikeImage}
                                alt={booking.bikeName}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{booking.bikeName}</h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{booking.startDate} to {booking.endDate}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{booking.pickupLocation}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <Badge variant={getStatusColor(booking.status)}>
                                {booking.status}
                              </Badge>
                              <p className="text-lg font-bold text-gray-900 mt-1">₹{booking.totalPrice}</p>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleCancelBooking(booking.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <X className="h-4 w-4 mr-1" />
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming bookings</h3>
                    <p className="text-gray-600 mb-4">Ready for your next adventure?</p>
                    <Link href="/bikes">
                      <Button>Browse Bikes</Button>
                    </Link>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                {completedBookings.length > 0 ? (
                  completedBookings.map((booking) => (
                    <Card key={booking.id} className="border-l-4 border-l-green-500">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                          <div className="flex items-center space-x-4">
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                              <Image
                                src={booking.bikeImage}
                                alt={booking.bikeName}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{booking.bikeName}</h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{booking.startDate} to {booking.endDate}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{booking.pickupLocation}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <Badge variant={getStatusColor(booking.status)}>
                              {booking.status}
                            </Badge>
                            <p className="text-lg font-bold text-gray-900 mt-1">₹{booking.totalPrice}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No booking history</h3>
                    <p className="text-gray-600">Your completed bookings will appear here</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}