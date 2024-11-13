"use client";
import Image from "next/image";

type colectionProps = {
  name: string;
  photos: string[];
};

export default function Collection({ name, photos }: colectionProps) {
  return (
    <div className='max-w-[470px] bg-white p-[30px] rounded-[30px] shadow-md cursor-pointer transition-all duration-150 ease-in-out hover:shadow-xl hover:transform hover: translate-y-[-5px]'>
      <h2 className='mt-[15px] text-[20px] font-serif'>{name}</h2>{" "}
      {photos[0] ? (
        <Image
          className='h-[250px] w-full object-cover rounded-[20px] mb-[15px]'
          width={470}
          height={250}
          alt='cover'
          objectFit='cover'
          src={photos[0]}
        />
      ) : (
        <div className='h-[250px] w-full object-cover rounded-[20px] mb-[15px]'></div>
      )}
      <div className='flex justify-between'>
        {photos[1] ? (
          <Image
            className='w-[31%] h-[80px] rounded-[20px]'
            width={470}
            height={250}
            alt='cover'
            objectFit='cover'
            src={photos[1]}
          />
        ) : (
          <div className='h-[250px] w-full object-cover rounded-[20px] mb-[15px]'></div>
        )}

        {photos[2] ? (
          <Image
            className='w-[31%] h-[80px] rounded-[20px]'
            width={470}
            height={250}
            alt='cover'
            objectFit='cover'
            src={photos[2]}
          />
        ) : (
          <div className='h-[250px] w-full object-cover rounded-[20px] mb-[15px]'></div>
        )}

        {photos[3] ? (
          <Image
            className='w-[31%] h-[80px] rounded-[20px]'
            width={470}
            height={250}
            alt='cover'
            objectFit='cover'
            src={photos[3]}
          />
        ) : (
          <div className='h-[250px] w-full object-cover rounded-[20px] mb-[15px]'></div>
        )}
      </div>
    </div>
  );
}
