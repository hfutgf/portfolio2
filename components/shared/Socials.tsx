import Link from 'next/link';
import Image from 'next/image';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={'https://t.me/Jasurbek_Mansuraliev'}
        className="hover:text-accent transition-all duration-300"
      >
        <Image
          alt="telegram"
          width={32}
          height={32}
          src={'/svg/telegram.svg'}
          className=" rounded-full bg-gray-500"
        />
      </Link>
    </div>
  );
};

export default Socials;
