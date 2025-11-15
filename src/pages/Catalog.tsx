import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterBar from "@/components/FilterBar";
import DestinationCard from "@/components/DestinationCard";

import mountainsImg from "@/assets/destination-mountains.jpg";
import parisImg from "@/assets/destination-paris.jpg";
import maldivesImg from "@/assets/destination-maldives.jpg";
import japanImg from "@/assets/destination-japan.jpg";
import safariImg from "@/assets/destination-safari.jpg";
import caribbeanImg from "@/assets/destination-caribbean.jpg";

const Catalog = () => {
  const allDestinations = [
    {
      image: maldivesImg,
      title: "Maldives Paradise",
      location: "Maldives",
      rating: 4.9,
      duration: "7 Days",
      price: "2,499",
      description: "Experience luxury overwater villas and pristine beaches.",
      type: "beach",
      priceRange: "luxury",
      durationDays: 7,
    },
    {
      image: parisImg,
      title: "Paris Romance",
      location: "Paris, France",
      rating: 4.8,
      duration: "5 Days",
      price: "1,899",
      description: "Discover the city of lights and exquisite French cuisine.",
      type: "city",
      priceRange: "moderate",
      durationDays: 5,
    },
    {
      image: mountainsImg,
      title: "Alpine Adventure",
      location: "Swiss Alps",
      rating: 4.9,
      duration: "6 Days",
      price: "2,199",
      description: "Conquer majestic peaks and breathtaking mountain vistas.",
      type: "mountain",
      priceRange: "moderate",
      durationDays: 6,
    },
    {
      image: japanImg,
      title: "Cherry Blossom Japan",
      location: "Tokyo, Japan",
      rating: 4.9,
      duration: "8 Days",
      price: "2,799",
      description: "Ancient temples, modern cities, and stunning sakura gardens.",
      type: "cultural",
      priceRange: "luxury",
      durationDays: 8,
    },
    {
      image: safariImg,
      title: "African Safari",
      location: "Kenya",
      rating: 5.0,
      duration: "10 Days",
      price: "3,499",
      description: "Witness the Big Five in their natural habitat.",
      type: "adventure",
      priceRange: "luxury",
      durationDays: 10,
    },
    {
      image: caribbeanImg,
      title: "Caribbean Cruise",
      location: "Caribbean Islands",
      rating: 4.7,
      duration: "7 Days",
      price: "1,599",
      description: "Island hop through paradise on a luxury yacht.",
      type: "beach",
      priceRange: "moderate",
      durationDays: 7,
    },
  ];

  const [filteredDestinations, setFilteredDestinations] = useState(allDestinations);

  const handleFilterChange = (filters: any) => {
    let filtered = [...allDestinations];

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(
        (dest) =>
          dest.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          dest.location.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Type filter
    if (filters.type !== "all") {
      filtered = filtered.filter((dest) => dest.type === filters.type);
    }

    // Price filter
    if (filters.price !== "all") {
      filtered = filtered.filter((dest) => dest.priceRange === filters.price);
    }

    // Duration filter
    if (filters.duration !== "all") {
      if (filters.duration === "short") {
        filtered = filtered.filter((dest) => dest.durationDays <= 3);
      } else if (filters.duration === "medium") {
        filtered = filtered.filter((dest) => dest.durationDays >= 4 && dest.durationDays <= 7);
      } else if (filters.duration === "long") {
        filtered = filtered.filter((dest) => dest.durationDays >= 8);
      }
    }

    setFilteredDestinations(filtered);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Explore <span className="text-primary">Destinations</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover your next adventure from our curated collection of extraordinary destinations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Catalog */}
      <section className="py-12 px-4 lg:px-8">
        <div className="container mx-auto">
          <FilterBar onFilterChange={handleFilterChange} />

          {filteredDestinations.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-muted-foreground">No destinations found. Try adjusting your filters.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination, index) => (
                <DestinationCard key={index} {...destination} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;
