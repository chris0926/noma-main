import Image from "next/image";
import React from "react";

const BasicsCard = ({ item }) => {
  return (
    <>
      <div className="pb-8 sm:py-8 px-[10px] max-w-[378px] w-full mx-auto bg-transparent">
        <Image
          src={item.img}
          alt="basic image"
          width={358}
          height={328}
          className="rounded-[8px]"
        />
        <p className="pt-4 text-center font-Montserrat font-extrabold text-[24px] sm:text-[32px] text-carbon-Black">
          {item.text}
        </p>
      </div>
    </>
  );
};

export default BasicsCard;
