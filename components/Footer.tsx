/* eslint-disable @next/next/no-img-element */
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/DhavalDudheliya" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/dhaval-dudheliya-28b78b1b8",
  },
  { icon: <FaTwitter />, path: "https://x.com/Dhaval_1364" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/dhaval___.here/" },
];

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-green">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-5 mt-5 mb-10 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <a target="_blank" href="mailto:dhavaldudheliya77@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
              cv
            />
          </a>
          <a href="tel:+919157795624">
            <MagicButton
              title="+91 9157795624"
              icon={<FaPhone />}
              position="right"
              cv
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Dhaval Dudheliya
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socials.map((info, index) => (
            <a
              href={info.path}
              key={index}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              target="_blank"
            >
              <p>{info.icon}</p>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
