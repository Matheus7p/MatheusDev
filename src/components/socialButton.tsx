import { SocialLinks } from "../types/social";

const SocialButtons = ({ social }: { social: SocialLinks }) => {
  const Icon = social.icon;

  const handleClick = () => {
    if (social.isEmail) {
      window.location.href = social.url;
    } else {
      window.open(social.url, "_blank", "noopener noreferrer");
    }
  };
  return (
    <button
      onClick={handleClick}
      className="bg-[#252525] text-[#f5f5f5] px-2 py-2 hover:scale-110 duration-500 rounded-full"
      aria-label={social.name}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
};

export default SocialButtons;