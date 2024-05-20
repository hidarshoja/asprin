"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import SwiperCore, { Navigation, Autoplay } from "swiper";

SwiperCore.use([Navigation, Autoplay]);

export default function SwiperDoctor2() {
  const settings = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    
    autoplay: {
      delay: 3000, // 3 seconds
      disableOnInteraction: false,
    },
    breakpoints: {
      3000: {
        slidesPerView: 3,
        slidesToScroll: 1,
      },
      1200: {
        slidesPerView: 3,
        slidesToScroll: 1,
      },
      1024: {
        slidesPerView: 2,
        slidesToScroll: 1,
      },
      768: {
        slidesPerView: 1,
        slidesToScroll: 1,
      },
      468: {
        slidesPerView: 1,
        slidesToScroll: 1,
      },
    },
  };

  const doctorData = [
    {
      name: "دکتر عبدالقیوم بفکین",
      specialty: "متخصص جراحی مغز و اعصاب و ستون فقرات",
      locations: ["شهریار", "شهریار"],
      ratings: [
        "آلزایمر",
        "آلزایمر",
        "آلزایمر",
        "آلزایمر",
        "آلزایمر",
        "آلزایمر",
      ],
      imgSrc: "/doctor2.svg",
    },
    {
      name: "دکتر محسن رضایی",
      specialty: "متخصص قلب و عروق",
      locations: ["تهران", "مشهد"],
      ratings: ["قلب", "عروق", "قلب", "عروق", "قلب", "عروق"],
      imgSrc: "/doctor2.svg",
    },
    {
      name: "دکتر محسن رضایی",
      specialty: "متخصص قلب و عروق",
      locations: ["تهران", "مشهد"],
      ratings: ["قلب", "عروق", "قلب", "عروق", "قلب", "عروق"],
      imgSrc: "/doctor2.svg",
    },
    {
      name: "دکتر سعید رضایی",
      specialty: "متخصص قلب و عروق",
      locations: ["تهران", "مشهد"],
      ratings: ["قلب", "عروق", "قلب", "عروق", "قلب", "عروق"],
      imgSrc: "/doctor2.svg",
    },
    {
      name: "دکتر محسن شجاع",
      specialty: "متخصص قلب و عروق",
      locations: ["تهران", "مشهد"],
      ratings: ["قلب", "عروق", "قلب", "عروق", "قلب", "عروق"],
      imgSrc: "/doctor2.svg",
    },
    {
      name: "دکتر جعفر رضایی",
      specialty: "متخصص قلب و عروق",
      locations: ["تهران", "مشهد"],
      ratings: ["قلب", "عروق", "قلب", "عروق", "قلب", "عروق"],
      imgSrc: "/doctor2.svg",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="w-[100%]">
        <Swiper {...settings} className="w-[90%] bg-[#FBFAF6] mx-auto h-[200px]">
          {doctorData.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="w-full lg:w-[379px] h-[161px] border border-[#EAE9E7] bg-white rounded-[4px] shadow-2xl py-3 px-4 flex relative">
                <div className="w-[65%]">
                  <p className="text-colorText text-base font-semibold">
                    {doctor.name}
                  </p>
                  <p className="text-[#9c9c9a] text-[11px] font-bold py-1 flex items-center gap-2">
                    <span className="bg-colorText w-[5px] h-[5px] rounded-full"></span>
                    <span>{doctor.specialty}</span>
                  </p>
                  <div className="flex gap-3 items-center justify-start mt-3">
                    {doctor.locations.map((location, locIndex) => (
                      <span
                        key={locIndex}
                        className="flex items-center justify-around gap-1 rounded-3xl border border-[#b4b3b1] bg-white w-1/4"
                      >
                        <span>
                          <img src="/locMap.svg" className="w-2 h-2" alt="" />
                        </span>
                        <span className="text-[9px] text-colorText">
                          {location}
                        </span>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 items-center justify-start mt-5">
                    {doctor.ratings.map((rating, ratingIndex) => (
                      <span
                        key={ratingIndex}
                        className="flex items-center justify-around gap-1 rounded-sm border border-[#b4b3b1] text-[9px] text-colorText bg-[#ECEFF6] w-1/6"
                      >
                        {rating}
                      </span>
                    ))}
                  </div>
                  <div className="w-[94%] flex items-center justify-between absolute bottom-[-10px] left-2">
                    <div className="flex items-center gap-2">
                      <div className="w-[52px] h-[22px] rounded-sm gap-1 flex items-center justify-center bg-[#304A59]">
                        <img
                          src="/call1.svg"
                          className="w-[15px] h-[15px]"
                          alt="1"
                        />
                        <span className="text-white text-xs">تماس</span>
                      </div>
                      
                      <div className="w-[80px] text-white text-xs h-[22px] rounded-sm flex items-center justify-center bg-[#304A59]">
                        مشاهده پرفایل
                      </div>
                    </div>
                    <div className="w-[40%] text-center h-[23px] bg-[#bebebc] rounded-md flex items-center px-2 text-colorText text-[8px]">
                      <div>3.8 از 5 | از 47 نظر</div>
                    </div>
                  </div>
                </div>
                <div className="w-[35%]">
                  <img
                    src={doctor.imgSrc}
                    className="rounded-full w-[115px] h-[115px] border-[3px] lg:border-[#fee5d6]"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

