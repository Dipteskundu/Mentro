import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import MissionVisionToggle from "@/components/about/MissionVisionToggle";
import CoreValuesGrid from "@/components/about/CoreValuesGrid";
import MethodologyTimeline from "@/components/about/MethodologyTimeline";
import MentorSpotlightGrid from "@/components/about/MentorSpotlightGrid";
import AboutCTA from "@/components/about/AboutCTA";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us - Mentro | Empowering Future Tech Leaders",
  description:
    "Discover Mentro's mission to make quality, hands-on tech education accessible. Learn directly from active staff engineers and industry mentors.",
  openGraph: {
    title: "About Mentro - Workshops & Mentorship Discovery",
    description:
      "Bridging the gap between theory and industry realities with hands-on technical workshops and 1-on-1 mentorship.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#101828] text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300">
      <ScrollReveal><AboutHero /></ScrollReveal>
      <ScrollReveal delay={0.1}><AboutStats /></ScrollReveal>
      <ScrollReveal delay={0.1}><MissionVisionToggle /></ScrollReveal>
      <ScrollReveal delay={0.1}><CoreValuesGrid /></ScrollReveal>
      <ScrollReveal delay={0.1}><MethodologyTimeline /></ScrollReveal>
      <ScrollReveal delay={0.1}><MentorSpotlightGrid /></ScrollReveal>
      <ScrollReveal delay={0.1}><AboutCTA /></ScrollReveal>
    </main>
  );
}
