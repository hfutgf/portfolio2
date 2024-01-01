import Link from "next/link";
import { RiYoutubeLine, RiTelegramLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiTelegramLine className="text-[32px]"/>
      </Link>
    </div>
  );
};

export default Socials;
