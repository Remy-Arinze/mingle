import { HeroSection } from "@/components/blocks/galaxy-interactive-hero-section";
import { LoadingOverlay } from "@/components/ui/loading-overlay";

export default function Home() {
  return (
    <main className="bg-black relative h-screen w-full overflow-x-hidden">
      <LoadingOverlay />
      <HeroSection />
    </main>
  );
}
