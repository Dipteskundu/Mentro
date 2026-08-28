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

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#101828] transition-colors duration-300">
      <HomeHero />
      <TrustedBy />
      <HomeStatsAndFeatures />
      <FeaturedWorkshops />
      <UpcomingSessions />
      <LearningRoadmaps />
      <HowItWorks />
      <MentorSpotlights />
      <LearningPerks />
      <LearnerWallOfLoveCarousel />
      <FAQ />
      <TrustAndTransparencyPledge />
      <HomeCTA />
    </div>
  );
}
