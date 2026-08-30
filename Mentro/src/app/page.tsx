import HomeHero from "@/components/home/HomeHero";
import HomeStatsAndFeatures from "@/components/home/HomeStatsAndFeatures";
import TrustedBy from "@/components/home/TrustedBy";
import FeaturedWorkshops from "@/components/home/FeaturedWorkshops";
import UpcomingSessions from "@/components/home/UpcomingSessions";
import LearningRoadmaps from "@/components/home/LearningRoadmaps";
import HowItWorks from "@/components/home/HowItWorks";
import MentorSpotlights from "@/components/home/MentorSpotlights";
import LearningPerks from "@/components/home/LearningPerks";
import LearnerWallOfLoveCarousel from "@/components/home/LearnerWallOfLoveCarousel";
import FAQ from "@/components/home/FAQ";
import TrustAndTransparencyPledge from "@/components/home/TrustAndTransparencyPledge";
import HomeCTA from "@/components/home/HomeCTA";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#101828] transition-colors duration-300">
      <ScrollReveal direction="none" duration={0.8}>
        <HomeHero />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <TrustedBy />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <HomeStatsAndFeatures />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <FeaturedWorkshops />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <UpcomingSessions />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <LearningRoadmaps />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <HowItWorks />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <MentorSpotlights />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <LearningPerks />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <LearnerWallOfLoveCarousel />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <TrustAndTransparencyPledge />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.15}>
        <HomeCTA />
      </ScrollReveal>
    </div>
  );
}
