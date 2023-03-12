import { useState, useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
import Card from "./Card";

export default function Playlist(props: any) {
  const { data } = props;

  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(carouselRef);

    console.log(carouselRef!.current?.scrollWidth);
    setWidth(
      carouselRef!.current!.scrollWidth - carouselRef!.current!.offsetWidth
    );
  }, []);

  return (
    <div className="playlist p-8 md:px-12 md:py-8">
      <div className="title text-gray-400 flex items-center mb-4">
        <h1
         className="title-text text-lg md:text-2xl font-bold mr-2">
          {props.playlistTitle}
        </h1>
        <div className="divider w-[5%] md:w-[25%] lg:w-[45%] xl:w-[60%] 2xl:w-[70%] h-[2px] text-[1px] leading-[1px] rounded-lg bg-gray-400"
        
        ></div>
        <div className="ml-2 icons flex justify-between">
          <div className="left">
            <AiOutlineLeft className="text-indigo-800 text-lg md:text-2xl" />
          </div>
          <div className="right">
            <AiOutlineRight className="text-indigo-800 text-lg md:text-2xl" />
          </div>
        </div>
      </div>
      <motion.div
        ref={carouselRef}
        className="carousel cursor-grab p-2 overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex"
        >
          {data?.map((item: any) => {
            const { images, name, icons } = item;
            return (
              <motion.div
                key={item.title}
                className="carousel-item p-2 min-h-[16.5rem] min-w-[16.5rem] md:p-0 md:min-w-[12rem] md:min-h-[12rem]"
              >
                <Card
                  images={images ?? null}
                  icons={icons ?? null}
                  name={name}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
