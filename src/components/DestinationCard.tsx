import { motion } from "framer-motion";
import { MapPin, Star, Clock, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  duration: string;
  price: string;
  description: string;
  index: number;
}

const DestinationCard = ({
  image,
  title,
  location,
  rating,
  duration,
  price,
  description,
  index,
}: DestinationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden hover-lift rounded-2xl border-0 shadow-md">
        <div className="relative overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            src={image}
            alt={title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-white text-sm font-medium">
            {price}
          </div>

          <div className="absolute top-4 left-4 flex items-center gap-1 glass px-3 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-medium">{rating}</span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">{location}</span>
          </div>

          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1 text-primary font-bold text-xl">
              <DollarSign className="w-5 h-5" />
              <span>{price}</span>
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-md">
            Explore Now
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default DestinationCard;
