'use client';

import React from 'react';
import Image from 'next/image';
import { Users, MapPin, Clock, Shield, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '50,000+' },
    { icon: MapPin, label: 'Cities Covered', value: '8' },
    { icon: Clock, label: 'Years of Service', value: '5+' },
    { icon: Shield, label: 'Safe Rides', value: '99.9%' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All our bikes undergo regular maintenance and safety checks to ensure your ride is secure and reliable.'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'We pride ourselves on providing premium bikes and exceptional customer service that exceeds expectations.'
    },
    {
      icon: Heart,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We listen to feedback and continuously improve our services.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      description: 'Passionate about sustainable transportation and making bike rentals accessible to everyone.'
    },
    {
      name: 'Priya Patel',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      description: 'Ensures smooth operations across all locations and maintains our high service standards.'
    },
    {
      name: 'Arjun Kumar',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      description: 'Leads our technology initiatives and platform development for seamless user experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About BikeRent</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Revolutionizing urban mobility with premium bike rentals across India. 
            Your journey, our passion.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2019, BikeRent started with a simple vision: to make quality bike rentals 
                  accessible to everyone across India. What began as a small operation in Mumbai has 
                  now expanded to 8 major cities, serving over 50,000 satisfied customers.
                </p>
                <p>
                  We believe that transportation should be convenient, affordable, and environmentally 
                  friendly. Our diverse fleet ranges from fuel-efficient scooters for daily commutes 
                  to powerful sports bikes for weekend adventures.
                </p>
                <p>
                  Every bike in our fleet is carefully maintained and regularly serviced to ensure 
                  your safety and comfort. We're not just a rental service – we're your partners 
                  in exploring the world on two wheels.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind BikeRent who work tirelessly to make your riding experience exceptional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            To revolutionize urban transportation by providing accessible, reliable, and sustainable 
            bike rental solutions that empower people to explore their cities with freedom and confidence.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link href="/bikes">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Your Journey
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}