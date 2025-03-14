import Link from "next/link";
import {FaGithub, FaInstagram, FaLinkedin,} from "react-icons/fa";
import { FaUpwork} from "react-icons/fa6"
import {motion} from "framer-motion";

const socials = [
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/darshan-limbani/",
  },
  {
    icon: <FaUpwork/>,
    path: "https://www.upwork.com/freelancers/darshanl2"
  },
  { icon: <FaGithub />, path: "https://github.com/Darshan-Limbani" },
  // { icon: <FaTwitter />, path: "https://x.com/Dhaval_1364" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/_mr._mukhi_" },
];

type Props = {
  containerStyles: string;
  iconStyles: string;
};

const Socials = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} target="_blank">
            <motion.p
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                // delay: (index + 1) / 10 - 1 + 0.3,
                delay: 1.5 - (index + 1) / 20,
                duration: 0.5,
              }}
              className={iconStyles}
            >
              {social.icon}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
