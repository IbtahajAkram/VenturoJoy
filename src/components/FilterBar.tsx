import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  const handleFilterChange = () => {
    onFilterChange({
      search: searchTerm,
      type: selectedType,
      price: selectedPrice,
      duration: selectedDuration,
    });
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass p-6 rounded-2xl shadow-lg mb-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search */}
        <div className="lg:col-span-2 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleFilterChange();
            }}
            className="pl-10 h-12 border-border/50 bg-background/50"
          />
        </div>

        {/* Type Filter */}
        <Select value={selectedType} onValueChange={(value) => {
          setSelectedType(value);
          handleFilterChange();
        }}>
          <SelectTrigger className="h-12 border-border/50 bg-background/50">
            <SelectValue placeholder="Destination Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="beach">Beach</SelectItem>
            <SelectItem value="mountain">Mountain</SelectItem>
            <SelectItem value="city">City</SelectItem>
            <SelectItem value="adventure">Adventure</SelectItem>
            <SelectItem value="cultural">Cultural</SelectItem>
          </SelectContent>
        </Select>

        {/* Price Filter */}
        <Select value={selectedPrice} onValueChange={(value) => {
          setSelectedPrice(value);
          handleFilterChange();
        }}>
          <SelectTrigger className="h-12 border-border/50 bg-background/50">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="budget">Budget ($-$$)</SelectItem>
            <SelectItem value="moderate">Moderate ($$-$$$)</SelectItem>
            <SelectItem value="luxury">Luxury ($$$$+)</SelectItem>
          </SelectContent>
        </Select>

        {/* Duration Filter */}
        <Select value={selectedDuration} onValueChange={(value) => {
          setSelectedDuration(value);
          handleFilterChange();
        }}>
          <SelectTrigger className="h-12 border-border/50 bg-background/50">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Durations</SelectItem>
            <SelectItem value="short">1-3 Days</SelectItem>
            <SelectItem value="medium">4-7 Days</SelectItem>
            <SelectItem value="long">8+ Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="mt-4 flex items-center justify-center"
      >
        <Button
          onClick={handleFilterChange}
          className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-glow px-8"
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Apply Filters
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default FilterBar;
