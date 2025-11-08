import { IconType } from "react-icons";

export interface SocialLinks {
  id: number,
  url: string,
  name: string,
  icon: IconType,
  isEmail?: boolean
}
