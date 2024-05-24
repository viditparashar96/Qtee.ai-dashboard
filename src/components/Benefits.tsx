"use client";

import Image from "next/image";
// import Arrow from "../assets/svg/Arrow";

// import ClipPath from "../assets/svg/ClipPath";
// import { benefits } from "../constants";
// import Heading from "./Heading";
// import Section from "./Section";
// import { GradientLight } from "./design/Benefits";


import Arrow from "@/assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
import { benefits } from "@/constants";
import Section from "./Section";
import ClipPath from "@/assets/svg/ClipPath";
import { benefitIcon1, benefitImage2 } from "@/assets";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Core Features of Qtee.ai"
        />
        <div className="flex w-full">
        <div className="w-[70%] flex flex-wrap gap-10 mb-10">
          {/* {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))} */}
          
           <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(/benefits/card-1.svg)`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">AI-Powered Auditing:</h5>
                <p className="body-2 mb-6 text-n-3">Utilizing cutting-edge AI, qtee.ai evaluates calls against a predefined script, key performance indicators, and the authenticity of information shared during interactions. This ensures a detailed and unbiased assessment of each call.</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={benefitIcon1}
                    width={48}
                    height={48}
                    alt={'item.title'}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              <GradientLight />

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  
                    <Image
                      src={benefitImage2}
                      width={380}
                      height={362}
                      alt={'item.title'}
                      className="w-full h-full object-cover"
                    />
                  
                </div>
              </div>

              <ClipPath />
            </div>
           <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(/benefits/card-1.svg)`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">Customizable Auditing Parameters:</h5>
                <p className="body-2 mb-6 text-n-3">Tailor qtee.ai to fit your unique business needs. Add custom parameters like tone analysis, compliance adherence, customer satisfaction indicators, and more to make your audits more relevant and effective.</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={benefitIcon1}
                    width={48}
                    height={48}
                    alt={'item.title'}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              <GradientLight />

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  
                    <Image
                      src={benefitImage2}
                      width={380}
                      height={362}
                      alt={'item.title'}
                      className="w-full h-full object-cover"
                    />
                  
                </div>
              </div>

              <ClipPath />
            </div>
           <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(/benefits/card-1.svg)`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">Customizable Auditing Parameters:</h5>
                <p className="body-2 mb-6 text-n-3">Tailor qtee.ai to fit your unique business needs. Add custom parameters like tone analysis, compliance adherence, customer satisfaction indicators, and more to make your audits more relevant and effective.</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={benefitIcon1}
                    width={48}
                    height={48}
                    alt={'item.title'}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              <GradientLight />

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  
                    <Image
                      src={benefitImage2}
                      width={380}
                      height={362}
                      alt={'item.title'}
                      className="w-full h-full object-cover"
                    />
                  
                </div>
              </div>

              <ClipPath />
            </div>
           <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(/benefits/card-1.svg)`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">Customizable Auditing Parameters:</h5>
                <p className="body-2 mb-6 text-n-3">Tailor qtee.ai to fit your unique business needs. Add custom parameters like tone analysis, compliance adherence, customer satisfaction indicators, and more to make your audits more relevant and effective.</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={benefitIcon1}
                    width={48}
                    height={48}
                    alt={'item.title'}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              <GradientLight />

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  
                    <Image
                      src={benefitImage2}
                      width={380}
                      height={362}
                      alt={'item.title'}
                      className="w-full h-full object-cover"
                    />
                  
                </div>
              </div>

              <ClipPath />
            </div>
           
        </div>
        <div className="w-[30%]">
        <div
              className="w-full block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(/benefits/card-1.svg)`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">Dynamic Administrative Dashboard:</h5>
                <p className="body-2 mb-6 text-n-3">Manage your team with ease and precision through our comprehensive administrative dashboard. Features include:</p>
              <ul>
                <li className="mt-4">
                  <h1 className="font-bold">•User Management:</h1>
                  <p className="opacity-70">Invite, organize, and manage team members.</p>
                  </li>
                <li className="mt-4"><h1 className="font-bold">•Group Segmentation:</h1>
                  <p className="opacity-70">Create specific groups for different call types or product lines.</p></li>
                <li className="mt-4"><h1 className="font-bold">•Access Controls:</h1>
                  <p className="opacity-70">Define roles and permissions to ensure secure access to detailed audit results.</p></li>
                <li className="mt-4"><h1 className="font-bold">•Real-Time Analytics:</h1>
                  <p className="opacity-70">View performance metrics and audit outcomes in real-time.</p></li>
                <li className="mt-4"><h1 className="font-bold">•Notification System:</h1>
                  <p className="opacity-70">Set alerts for audit anomalies or notable performances.</p></li>
              </ul>
                <div className="flex items-center mt-6">
                  <Image
                    src={benefitIcon1}
                    width={48}
                    height={48}
                    alt={'item.title'}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              <GradientLight />

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  
                    <Image
                      src={benefitImage2}
                      width={380}
                      height={362}
                      alt={'item.title'}
                      className="w-full h-full object-cover"
                    />
                  
                </div>
              </div>

              <ClipPath />
            </div>
        </div>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
