import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import { Compass, Shield, Headphones, Award, Star, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

import mountainsImg from "@/assets/destination-mountains.jpg";
import parisImg from "@/assets/destination-paris.jpg";
import maldivesImg from "@/assets/destination-maldives.jpg";
import japanImg from "@/assets/destination-japan.jpg";

const Index = () => {
  const featuredDestinations = [
    {
      image: maldivesImg,
      title: "Maldives Paradise",
      location: "Maldives",
      rating: 4.9,
      duration: "7 Days",
      price: "2,499",
      description: "Experience luxury overwater villas and pristine beaches in this tropical paradise.",
    },
    {
      image: parisImg,
      title: "Paris Romance",
      location: "Paris, France",
      rating: 4.8,
      duration: "5 Days",
      price: "1,899",
      description: "Discover the city of lights, iconic landmarks, and exquisite French cuisine.",
    },
    {
      image: mountainsImg,
      title: "Alpine Adventure",
      location: "Swiss Alps",
      rating: 4.9,
      duration: "6 Days",
      price: "2,199",
      description: "Conquer majestic peaks and enjoy breathtaking mountain vistas.",
    },
    {
      image: japanImg,
      title: "Cherry Blossom Japan",
      location: "Tokyo, Japan",
      rating: 4.9,
      duration: "8 Days",
      price: "2,799",
      description: "Immerse yourself in ancient temples, modern cities, and stunning sakura gardens.",
    },
  ];

  const features = [
    {
      icon: Compass,
      title: "Expert Guidance",
      description: "Professional travel guides with local expertise",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Travel insurance and 24/7 emergency support",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service at your fingertips",
    },
    {
      icon: Award,
      title: "Best Price Guarantee",
      description: "Competitive pricing with no hidden fees",
    },
  ];

  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero />

      {/* Featured Destinations */}
      <section className="py-28 px-4 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center "
          >
            <h2 className="text-4xl py-12 lg:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Destinations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked experiences for the discerning traveler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDestinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Choose <span className="text-primary">VenturoJoy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make your travel dreams come true with exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-border/50"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-primary">Popular</span> Tours
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of travelers on our most-loved adventures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "European Adventure",
                location: "7 Countries",
                duration: "14 Days",
                price: "3,999",
                rating: 4.9,
                reviews: 234,
                image: parisImg,
              },
              {
                title: "Asian Explorer",
                location: "Thailand, Vietnam, Japan",
                duration: "12 Days",
                price: "2,899",
                rating: 4.8,
                reviews: 189,
                image: japanImg,
              },
              {
                title: "Island Hopping",
                location: "Caribbean Islands",
                duration: "10 Days",
                price: "3,499",
                rating: 5.0,
                reviews: 156,
                image: maldivesImg,
              },
            ].map((tour, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold">
                      Bestseller
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center text-secondary">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {tour.rating} ({tour.reviews} reviews)
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
                    <p className="text-muted-foreground mb-4">{tour.location}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {tour.duration}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-muted-foreground">From</span>
                        <div className="text-2xl font-bold text-primary">${tour.price}</div>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              What Our <span className="text-primary">Travelers Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from real travelers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "New York, USA",
                text: "The trip to Maldives was absolutely breathtaking! Every detail was perfectly planned and the service was exceptional.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                location: "Singapore",
                text: "Our family had an amazing time in Japan. The cherry blossoms were stunning and our guide was incredibly knowledgeable.",
                rating: 5,
              },
              {
                name: "Emma Wilson",
                location: "London, UK",
                text: "The Swiss Alps adventure exceeded all expectations. The views, accommodation, and activities were all top-notch!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-md border border-border/50"
              >
                <div className="flex items-center gap-2 mb-4 text-secondary">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: "98%", label: "Customer Satisfaction" },
              { icon: Award, value: "50+", label: "Awards Won" },
              { icon: Compass, value: "150+", label: "Destinations" },
              { icon: DollarSign, value: "$10M+", label: "Tours Booked" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <stat.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Get Exclusive Travel Deals
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter and receive the best travel offers directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-foreground border-0 h-14 text-lg"
              />
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Join 25,000+ travelers getting weekly inspiration and exclusive deals
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
