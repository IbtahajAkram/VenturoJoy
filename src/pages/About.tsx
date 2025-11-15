import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Globe, Award, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "25K+", label: "Happy Travelers" },
    { icon: Globe, value: "150+", label: "Destinations" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: Heart, value: "10K+", label: "5-Star Reviews" },
  ];

  const team = [
    { name: "Sarah Johnson", role: "Founder & CEO", description: "Passionate about creating unforgettable travel experiences" },
    { name: "Michael Chen", role: "Head of Operations", description: "15+ years in luxury travel management" },
    { name: "Emma Williams", role: "Chief Experience Officer", description: "Dedicated to customer satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              About <span className="text-primary">VenturoJoy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to make the world more accessible, one journey at a time. 
              Since 2015, we've been crafting extraordinary travel experiences that inspire and delight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg mb-6">
                VenturoJoy was born from a simple belief: everyone deserves to experience the wonders of our world. 
                Founded in 2015 by a group of passionate travelers, we set out to redefine what travel means in the modern age.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                What started as a small team with big dreams has grown into a global community of travel enthusiasts, 
                expert guides, and adventure seekers. We've helped over 25,000 travelers create memories that last a lifetime.
              </p>
              <p className="text-muted-foreground text-lg">
                Today, we continue to innovate and expand, bringing you the best destinations, the most authentic experiences, 
                and the highest level of service in the industry. Your adventure is our passion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">The passionate people behind your adventures</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-md text-center hover-lift"
              >
                {/* <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6" /> */}
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
