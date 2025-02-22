'use client'
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel';
import Image from 'next/image';
import { useZoomContext } from '@/context/ZoomContext';

interface Product {
    imageSrc: string;
    title: string;
}

interface ProductCarouselProps {
    data: Product[];
}


const ProductCarousel: React.FC<ProductCarouselProps> = ({data}) => {

        const {setSelectImage} = useZoomContext()

    return (
        <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/5 "
            >
              <div className="h-[650px] xl:h-[400px] w-full bg-gray-200 relative">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={2000}
                  height={2000}
                  className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                  onClick={() => setSelectImage({img:item.imageSrc, open:true})}
                />
              </div>
              <h3 className="text-[1.5rem] my-2 font-semibold">
                {item.title}
              </h3>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute top-[-3.2rem] right-[3rem]">
           <CarouselPrevious  />
          <div className="mx-2"></div>
          <CarouselNext />
        </div>
      </Carousel>
    );
};

export default ProductCarousel;