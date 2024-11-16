import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SocialMediaCards } from "./socialMediaCards.component";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";



export function SocialMediaList() {
  const socialMediaData = [
    {
      socialMedia: "Linkedin",
      arroba : "Matheus Costa",
      icon: <FaLinkedin size={42}/>,
      link: "https://www.linkedin.com/in/matheus-costa-277952232/"
    },
    {
      socialMedia: "GitHub",
      arroba: "@Matheus7p",
      icon: <FaGithub size={42} />,
      link: "https://github.com/Matheus7p"
    },
    {
      socialMedia: "Instagram",
      arroba: "@theuzss_",
      icon: <FaInstagram size={42} />,
      link: "https://instagram.com/theuzss_"
    },
    {
      socialMedia: "Twitter/X",
      arroba: "@theuzss_",
      icon: <BsTwitterX size={42} />,
      link: "https://x.com/theuzss_",
    }
  ]
  return(
    <div className="flex flex-col gap-4">
      {socialMediaData.map((social, index) => (
        <SocialMediaCards
        key={index}
        arroba={social.arroba}
        socialMedia={social.socialMedia}
        icon={social.icon}
        link={social.link}
        />
      ))}
    </div>
  )
}