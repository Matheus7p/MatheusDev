import { MdAlternateEmail } from "react-icons/md";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SocialLinks } from "../types/social";

export const socialInfos: SocialLinks[] = [
  {
    id: 1,
    name: "Email",
    url: "mailto:matheus.costa.7p@gmail.com",
    icon: MdAlternateEmail,
  },
  {
    id: 2,
    name: "Github",
    url: "https://github.com/Matheus7p",
    icon: RxGithubLogo,
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mcosta-dev/",
    icon: RxLinkedinLogo,
  },
]

export const RESUME_LINK = "https://drive.google.com/file/d/1ZLexoiOG7EltmJw0yuhBpgjHpiaXN4UZ/view?usp=sharing"
