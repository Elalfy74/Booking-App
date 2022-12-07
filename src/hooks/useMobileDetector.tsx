import { useEffect, useState } from "react";

const useMobileDetector = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 700px)").matches);
  }, []);

  return isMobile;
};

export default useMobileDetector;
