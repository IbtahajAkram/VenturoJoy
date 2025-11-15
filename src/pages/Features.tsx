import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Headphones, CreditCard, MapPin, Calendar, Users, Award, Camera, Utensils, Hotel, Plane, Gift, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage for peace of mind during your journey",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance wherever you are in the world",
      color: "from-pink-500 to-pink-500",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Multiple payment options and installment plans available",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Local Guides",
      description: "Expert guides who know every hidden gem and local secret",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Calendar,
      title: "Custom Itineraries",
      description: "Personalized travel plans tailored to your preferences",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Users,
      title: "Group Discounts",
      description: "Special rates for families and group bookings",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every partner vetted for the highest standards",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Camera,
      title: "Photo Packages",
      description: "Professional photography to capture your memories",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Utensils,
      title: "Culinary Tours",
      description: "Authentic local cuisine experiences included",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Hotel,
      title: "Premium Accommodations",
      description: "Handpicked hotels and resorts for comfort",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Plane,
      title: "Flight Coordination",
      description: "Seamless booking and transfer arrangements",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Gift,
      title: "Loyalty Rewards",
      description: "Earn points and exclusive perks with every trip",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
<div className="absolute inset-0">
<img
src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
alt="Hero Background"
className="w-full h-full object-cover opacity-80"
/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
</div>


<motion.div
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="relative z-10 text-center px-4 max-w-3xl"
>
<h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl">
Discover Your Next
<span className="text-primary"> Adventure</span>
</h1>


<p className="text-lg md:text-xl text-gray-200 mt-4 opacity-90">
Explore breathtaking destinations, curated packages, and unforgettable experiences.
</p>


<div className="mt-10 w-full max-w-2xl mx-auto flex bg-white rounded-full overflow-hidden shadow-xl border border-white/20 backdrop-blur-xl">
<input
type="text"
placeholder="Search destinations..."
className="flex-1 px-6 py-4 text-lg text-gray-800 outline-none"
/>
<Button className="rounded-none h-auto px-8 bg-primary text-white hover:bg-primary/90 flex items-center gap-2">
<Search className="w-5 h-5" /> Explore
</Button>
</div>


<div className="mt-12 grid grid-cols-3 gap-6 text-white text-center">
{[{n:"150+",l:"Destinations"},{n:"98%",l:"Happy Travelers"},{n:"10k+",l:"Bookings"}].map((s,i)=>(
<motion.div
key={i}
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.3 + i * 0.15 }}
>
<div className="text-3xl md:text-4xl font-bold">{s.n}</div>
<div className="text-sm md:text-base opacity-90">{s.l}</div>
</motion.div>
))}
</div>
</motion.div>
</section> */}
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Premium <span className="text-primary">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need for a perfect journey, all in one place. 
              We've thought of every detail so you can focus on making memories.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="bg-card p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-border/50 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8 bg-primary">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of satisfied travelers and discover why VenturoJoy is the preferred choice for extraordinary journeys.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-12 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all"
            >
              Explore Destinations
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
