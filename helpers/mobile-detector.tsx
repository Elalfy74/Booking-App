export default function mobileDetector() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 700px)").matches
  );
}
