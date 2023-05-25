import Faq from "@/components/about/Faq";
import HowTo from "@/components/about/HowTo";
import AboutUs from "@/components/about/AboutUs";
import Aside from "@/components/about/Aside";

export default function About() {

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex mt-[84px] md:mt-[110px] lg:mt-[180px] ml-4">
        <Aside/>
        <div className="w-full md:w-2/3 md:ml-[33.3%]">
          <AboutUs/>
          <HowTo/>
          <Faq/>
        </div>
      </div>
    </div>
  );
}
