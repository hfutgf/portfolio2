import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none z-[-1]">
      <Image
        src={'/png/avatar2.svg'}
        width={637}
        height={578}
        alt="AVA"
        className="translate-z-0 w-[637px] h-[578px] opacity-50"
      />
    </div>
  );
};

export default Avatar;
