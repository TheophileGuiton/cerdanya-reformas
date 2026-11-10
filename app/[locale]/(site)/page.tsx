import { ContactBand } from "@/components/sections/ContactBand";
import { Hero } from "@/components/sections/Hero";
import { MaterialsStrip } from "@/components/sections/MaterialsStrip";
import { Process } from "@/components/sections/Process";
import { RoomCards } from "@/components/sections/RoomCards";
import { ServicesList } from "@/components/sections/ServicesList";
import { WhyUs } from "@/components/sections/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <MaterialsStrip />
      <RoomCards />
      <ServicesList />
      <Process />
      <ContactBand />
    </>
  );
}
