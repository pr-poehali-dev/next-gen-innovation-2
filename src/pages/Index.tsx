import {
  Navbar,
  Hero,
  HowWeWork,
  InnovativeServices,
  ROICalculatorHome,
  AnimatedFooter,
} from "@/components/landing"

export default function Index() {
  return (
    <div className="relative min-h-screen bg-white">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <InnovativeServices />
        <HowWeWork />
        <ROICalculatorHome />
        <AnimatedFooter />
      </div>
    </div>
  )
}
