"use client";

import Image from "next/image";
// import { check2, grid, loading1 } from "../assets";
// import { roadmap } from "../constants";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { Gradient } from "./design/Roadmap";
import { check2, grid, loading1 } from "@/assets";
import { roadmap } from "@/constants";
import { FaStar } from "react-icons/fa";


const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="Reviews from our real users" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {/* {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <Image
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <Image
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <Image
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })} */}
         <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-conic-gradient`}
            >
              <div className="w-full relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="w-full relative z-1">
                  <div className="w-full flex items-center justify-between  mb-8 md:mb-20">
                    <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-red-100"></div>
                    <div className="flex flex-col items-center jusitify-between">
                      <h4>William Franky</h4>
                      <p className="text-sm">Sales Manager</p>
                    </div>
                    </div>

                    <div className="flex items-center px-4 py-1 rounded text-n-8">
                    <div className="w-full flex items-center gap-2 justify-start text-green-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    {/* <Image
                      className="w-full"
                      src={"/levelup.png"}
                      width={628}
                      height={426}
                      alt={'item.title'}
                    /> */}
                  </div>
                  {/* <h4 className="h4 mb-4"></h4> */}
                  <p className="body-2 text-white opacity-70">“Game-changing intelligence! Our team has a transformative shift since implementing this AI CRM software. Smart prioritization are a game-changer for our daily work.”</p>
                </div>
              </div>
            </div>
         <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-conic-gradient`}
            >
              <div className="w-full relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="w-full relative z-1">
                  <div className="w-full flex items-center justify-between  mb-8 md:mb-20">
                    <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-red-100"></div>
                    <div className="flex flex-col items-center jusitify-between">
                      <h4>Dianne Russell</h4>
                      <p className="text-sm">Marketing Head</p>
                    </div>
                    </div>

                    <div className="flex items-center px-4 py-1 rounded text-n-8">
                    <div className="w-full flex items-center gap-2 justify-start text-green-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    {/* <Image
                      className="w-full"
                      src={"/levelup.png"}
                      width={628}
                      height={426}
                      alt={'item.title'}
                    /> */}
                  </div>
                  {/* <h4 className="h4 mb-4"></h4> */}
                  <p className="body-2 text-white opacity-70">"Effortless task management! This AI CRM tool has simplified our task management process. Automated task assignment ensures tasks are distributed fairly and based on workload, boosting collaboration among team members.”</p>
                </div>
              </div>
            </div>
         <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-conic-gradient`}
            >
              <div className="w-full relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="w-full relative z-1">
                  <div className="w-full flex items-center justify-between  mb-8 md:mb-20">
                    <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-red-100"></div>
                    <div className="flex flex-col items-center jusitify-between">
                      <h4>Mark Lee</h4>
                      <p className="text-sm">Business Developer</p>
                    </div>
                    </div>

                    <div className="flex items-center px-4 py-1 rounded text-n-8">
                    <div className="w-full flex items-center gap-2 justify-start text-green-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    {/* <Image
                      className="w-full"
                      src={"/levelup.png"}
                      width={628}
                      height={426}
                      alt={'item.title'}
                    /> */}
                  </div>
                  {/* <h4 className="h4 mb-4"></h4> */}
                  <p className="body-2 text-white opacity-70">"Insights at your fingertips! The reporting capabilities of this AI CRM software are outstanding. Highly recommend for anyone serious about AI for growth."</p>
                </div>
              </div>
            </div>
         <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-conic-gradient`}
            >
              <div className="w-full relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="w-full relative z-1">
                  <div className="w-full flex items-center justify-between  mb-8 md:mb-20">
                    <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-red-100"></div>
                    <div className="flex flex-col items-center jusitify-between">
                      <h4>Jastine Trade</h4>
                      <p className="text-sm">Real Estate Professiona</p>
                    </div>
                    </div>

                    <div className="flex items-center px-4 py-1 rounded text-n-8">
                    <div className="w-full flex items-center gap-2 justify-start text-green-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    {/* <Image
                      className="w-full"
                      src={"/levelup.png"}
                      width={628}
                      height={426}
                      alt={'item.title'}
                    /> */}
                  </div>
                  {/* <h4 className="h4 mb-4"></h4> */}
                  <p className="body-2 text-white opacity-70">“Personalization excellence! The personalization features of this AI CRM tool have taken our customer interactions to the next level. Our clients appreciate & it's reflected in our improved all customer satisfaction rates."</p>
                </div>
              </div>
            </div>
         <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-conic-gradient`}
            >
              <div className="w-full relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="w-full relative z-1">
                  <div className="w-full flex items-center justify-between  mb-8 md:mb-20">
                    <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-red-100"></div>
                    <div className="flex flex-col items-center jusitify-between">
                      <h4>Jacob Jones</h4>
                      <p className="text-sm">Founder @ Software Company</p>
                    </div>
                    </div>

                    <div className="flex items-center px-4 py-1 rounded text-n-8">
                    <div className="w-full flex items-center gap-2 justify-start text-green-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    {/* <Image
                      className="w-full"
                      src={"/levelup.png"}
                      width={628}
                      height={426}
                      alt={'item.title'}
                    /> */}
                  </div>
                  {/* <h4 className="h4 mb-4"></h4> */}
                  <p className="body-2 text-white opacity-70">"Efficient and proactive! This AI CRM software has significantly improved our workflow efficiency. The system's proactive approach to task management & predictive.”</p>
                </div>
              </div>
            </div>
         <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-conic-gradient`}
            >
              <div className="w-full relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="w-full relative z-1">
                  <div className="w-full flex items-center justify-between  mb-8 md:mb-20">
                    <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-red-100"></div>
                    <div className="flex flex-col items-center jusitify-between">
                      <h4>Abraham Maslow</h4>
                      <p className="text-sm">Bank Manager</p>
                    </div>
                    </div>

                    <div className="flex items-center px-4 py-1 rounded text-n-8">
                    <div className="w-full flex items-center gap-2 justify-start text-green-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    {/* <Image
                      className="w-full"
                      src={"/levelup.png"}
                      width={628}
                      height={426}
                      alt={'item.title'}
                    /> */}
                  </div>
                  {/* <h4 className="h4 mb-4"></h4> */}
                  <p className="body-2 text-white opacity-70">"User-friendly AI! The natural language processing and intuitive design make this AI CRM software a pleasure to use. Even team members with limited technical expertise. A fantastic tool for businesses of all sizes."</p>
                </div>
              </div>
            </div>

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">All Reviews</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
