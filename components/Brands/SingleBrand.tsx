import React from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <motion.a
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: id }}
      viewport={{ once: true }}
      href={href}
      target="_blank"
      className="block"
    >
      {/* Just increase the height & width here */}
      <div className="relative h-12 w-[120px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
        />
        <Image
          src={imageLight}
          alt={name}
          fill
          className="hidden object-contain opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
        />
      </div>
    </motion.a>
  );
};

export default SingleBrand;
