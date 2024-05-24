"use client";
import { companyLogos } from "@/constants";
import Image from "next/image";
// import { companyLogos } from "../constants";


const CompanyLogos = ({ className }: any) => {
  return (
    <div className={className}>
      <ul className="flex">
        {/* {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <Image src={logo} width={134} height={28} alt={logo} />
          </li>
        ))} */}
        <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <Image className="filter invert"  src={'/Qtee.ai-preview.png'} width={134} height={28} alt='not avaliable' />
          </li>
        <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <Image className="filter invert"  src={'/Qtee.ai-preview.png'} width={134} height={28} alt='not avaliable' />
          </li>
        <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <Image className="filter invert"  src={'/Qtee.ai-preview.png'} width={134} height={28} alt='not avaliable' />
          </li>
        <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <Image className="filter invert"  src={'/Qtee.ai-preview.png'} width={134} height={28} alt='not avaliable' />
          </li>
        <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <Image className="filter invert"  src={'/Qtee.ai-preview.png'} width={134} height={28} alt='not avaliable' />
          </li>
        <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <Image className="filter invert"  src={'/Qtee.ai-preview.png'} width={134} height={28} alt='not avaliable' />
          </li>
      </ul>
    </div>
  );
};

export default CompanyLogos;
