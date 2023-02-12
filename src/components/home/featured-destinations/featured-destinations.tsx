import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { ICity } from "@/types/cities";

import Heading from "../section-heading";
import Destination from "./destination";

type FeaturedCitiesPros = {
  featuredCities: ICity[];
};

const FeaturedDestinations = ({ featuredCities }: FeaturedCitiesPros) => {
  const [selectedId, setSelectedId] = useState<null | string>(null);

  useEffect(() => {
    selectedId
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [selectedId]);

  const handleSelect = (id: string | null) => {
    if (selectedId && id !== null) return;
    setSelectedId(id);
  };

  return (
    <section className="section">
      <Heading
        title="Featured Destinations"
        desc=" Popular destinations open to visitors from indonesia"
      />
      <div className="relative grid h-auto  grid-cols-1 gap-6 md:h-[600px] md:grid-cols-3 md:grid-rows-9">
        {featuredCities.map((city, i) => (
          <Destination
            key={city._id}
            selectedId={selectedId}
            handleSelect={handleSelect}
            city={city}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="dim-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={() => handleSelect(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedDestinations;
