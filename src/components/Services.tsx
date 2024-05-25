// import { check, service1, service2, service3 } from "../assets";
// import { brainwaveServices, brainwaveServicesIcons } from "../constants";

import Heading from "./Heading";
import Section from "./Section";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Image from "next/image";
import Generating from "./Generating";
import { check, service1, service2, service3 } from "@/assets";
import { brainwaveServices, brainwaveServicesIcons } from "@/constants";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">


        <div className="relative">

          <div className="relative z-1 grid gap-5 lg:grid-cols-2 ">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={'/summary.png'}
                  className="h-[100%] w-full object-contain"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Agent Coaching & Performance Tracking</h4>
              </div>

              {/* <PhotoChatMessage /> */}
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Level up your sales activity</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Leveraging AI, Qtee.ai can listen to calls and score them based on pre-defined criteria. This could include factors like agent adherence to scripts, customer satisfaction levels, and technical call issues.
                </p>

                {/* <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item: any, index: any) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <Image src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul> */}
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <Image
                  src={'/card.png'}
                  className="w-full"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                {/* <VideoChatMessage />
                <VideoBar /> */}
              </div>
            </div>
          </div>

          <Heading
            className="mt-8"
            title="Benefits of Using Qtee.ai"
            text="Qtee unlocks the potential of AI-powered applications"
          />



          <div className="mt-4 relative z-1 flex flex-col items-center mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:flex-row lg:p-20 xl:flex-col xl:h-[46rem]">
            <div className="w-full lg:w-3/5 xl:w-full flex items-center justify-center lg:justify-start xl:justify-center">
              <Image
                className="h-[20rem] lg:h-full w-full object-contain mb-4 lg:mb-0"
                width={800}
                alt="Smartest AI"
                height={730}
                src={'/call.png'}
              />
            </div>
            <div className="w-full md:w-[17rem] ml-auto mt-4 lg:mt-0 lg:ml-8 xl:mt-8 xl:ml-0 lg:flex lg:flex-col lg:items-start xl:flex xl:flex-col xl:items-center">
              <h4 className="mb-4">Quality Enhancement</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Elevate the quality of your service calls with detailed, actionable insights from our AI analysis.
              </p>
              <h4 className="mb-4">Operational Efficiency</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Reduce manual effort in call reviews and utilize insights to train and improve agent performance.
              </p>
              <h4 className="mb-4">Scalability</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Whether you handle hundreds or thousands of calls, qtee.ai scales effortlessly to meet your auditing needs.
              </p>
              <h4 className="mb-4">Custom Insights</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Gain a deeper understanding of customer interactions with tailored analytics that go beyond basic metrics.
              </p>
            </div>
          </div>



          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
