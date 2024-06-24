import Link from 'next/link';
import Telegram from '/svg/telegram.svg';
import Image from 'next/image';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <Image
          alt="telegram"
          width={32}
          height={32}
          src={'/svg/telegram.svg'}
        />
      </Link>
    </div>
  );
};

export default Socials;
