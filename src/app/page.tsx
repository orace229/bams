import { Hero } from "@/components/home/hero";
import { ServicesGrid } from "@/components/home/services-grid";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { UseCases } from "@/components/home/use-cases";
import { WhyBams } from "@/components/home/why-bams";
import { MultiStepIntakeForm } from "@/components/intake/multi-step-form";
import { TrackingLookup } from "@/components/home/tracking-lookup";
import { FAQSection } from "@/components/home/faq-section";

export default function Home() {
  return (
    <div className="space-y-4">
      <Hero />
      <ServicesGrid />
      <ProcessTimeline />
      <UseCases />
      <WhyBams />
      <MultiStepIntakeForm />
      <TrackingLookup />
      <FAQSection />
    </div>
  );
}
