import Link from "next/link";
import React from "react";
import Box from "@/components/BoxDoctor";
import "./home.css";
import SliderDoctor from "@/components/SliderDoctor";
import SupportPage from "@/components/Support";
import ArticlesComponent from "@/components/Articles";
import Slider from "@/components/SliderPatient";

const MainHome = () => {
  let Services = [
    { id: 1, title: "داروخانه", src: "/icons2.svg", src2:"/brain2.svg"  },
    { id: 2, title: "مرکز تصویر برداری", src: "/icon8.png" , src2:"/brain2.svg" },
    { id: 3, title: "آزمایشگاه", src: "/icons3.svg" , src2:"/brain2.svg" },
    { id: 4, title: "درمانگاه و کلینیک", src: "/icons4.svg" , src2:"/brain2.svg" },
    { id: 5, title: "پرستار در منزل", src: "/icons5.svg", src2:"/brain2.svg"  },
    { id: 6, title: "آمبولانس خصوصی", src: "/icons6.png", src2:"/brain2.svg"  },
    { id: 7, title: "تجهیزات پزشکی", src: "/icons7.png" , src2:"/brain2.svg" },
    { id: 8, title: "پزشک", src: "/icon10.png", src2:"/brain2.svg"  },
    { id: 9, title: "دامپزشکی", src: "/icons9.png", src2:"/brain2.svg"  },
  ];
  let Expertise = [
    { id: 1, title: "متخصص مغز و اعصاب", src: "/brain1.svg", src2:"/brain2.svg" },
    { id: 2, title: "متخصص قلب و عروق", src: "/Heart1.svg", src2:"/Heart2.svg" },
    { id: 3, title: "ارتوپد", src: "/orthopedist1.svg", src2:"/orthopedist2.svg" },
    { id: 4, title: "چشم پزشک", src: "/Eye1.svg" , src2:"/Eye2.svg"},
    { id: 5, title: "متخصص زنان و زایمان", src: "/women1.svg" , src2:"/women2.svg"  },
    { id: 6, title: "متخصص آورولوژی", src: "/1.svg" , src2:"/women2.svg" },
    { id: 7, title: "متخصص تغذیه", src: "/ico7.svg", src2:"/women2.svg" },
    { id: 8, title: "متخصص دهان و دندان", src: "/ico8.svg" , src2:"/women2.svg"},
    { id: 9, title: "متخصص پوست و مو", src: "/ico9.svg" , src2:"/women2.svg"},
    { id: 10, title: "دکتر داخلی", src: "/ico10.svg" , src2:"/women2.svg"},
    { id: 11, title: "متخصص کودکان", src: "/ico11.svg" , src2:"/women2.svg"},
    { id: 12, title: "متخصص گوش و بینی", src: "/ico12.svg", src2:"/women2.svg" },
  ];
  return (
    <div className="w-full h-auto">
      <div className="mt-16 w-full flex-col  max-h-[950px] lg:max-h-[1050px] xl:max-h-[1150px]">
        <div className="half-circle relative ">
          <img src="/slideHeader.svg" className="w-full" alt="" />
          <div className="rounded-full bottom-[-169px] md:bottom-[-60px] flex item-center justify-between  absolute w-[55%] h-[140px] md:h-[64px] bg-white  left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <img
              src="/right.svg"
              className="z-10 right-[-57px] absolute"
              alt=""
            />
            <div className="search-slideHeader flex item-center justify-between  absolute w-[97%] h-[120px] md:h-[56px]  z-20   left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
              <div className="flex flex-col md:flex-row w-full items-center justify-center">
                <div className="flex w-full items-center justify-center md:2/6 overflow-hidden">
                  <div className="md:w-1/2 md:mr-2">
                    <select
                      name="city"
                      id="city"
                      className="w-[80%] md:w-full rounded-full md:rounded-none"
                    >
                      <option value="تهران">تهران</option>
                      <option value="مشهد">مشهد</option>
                      <option value="اصفهان">اصفهان</option>
                      <option value="تبریز">تبریز</option>
                      <option value="شیراز">شیراز</option>
                      <option value="اهواز">اهواز</option>
                      <option value="کرج">کرج</option>
                      <option value="قم">قم</option>
                      <option value="کرمانشاه">کرمانشاه</option>
                      <option value="رشت">رشت</option>
                    </select>
                  </div>
                  <div className="h-[100%] border border-1 border-[#B4B4B4] "></div>
                  <div className="w-1/2 md:mr-2">
                    <select
                      name="Services"
                      id="Services"
                      className="w-[80%] md:w-full"
                    >
                      <option value="پزشکی">پزشکی</option>
                      <option value="مشاوره">مشاوره</option>
                      <option value="درمان">درمان</option>
                      <option value="فیزیوتراپی">فیزیوتراپی</option>
                      <option value="رادیولوژی">رادیولوژی</option>
                      <option value="mri">mri</option>
                    </select>
                  </div>
                </div>
                <div className="w-full md:w-4/6">
                  <input
                    type="text"
                    className="bg-[#E6E6E6] text-[12px] rounded-lg text-white px-3 py-3 w-full"
                    placeholder="تخصص ، نام و ..."
                  />
                </div>
                <div className="w-full flex items-center justify-center md:w-1/6 mr-2">
                  <button className="text-colorText text-[20px]">جستجو</button>
                </div>
              </div>
            </div>
            <img
              src="/left.svg"
              className="z-10 left-[-57px] absolute"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" w-full h-auto pb-5  mt-28 ">
        <div className="flex items-center justify-center h-40">
          <div className="w-[100%] md:w-[50%] lg:w-[40%] relative flex items-center justify-center">
            <span className="w-full absolute top-10 h-[2px] bg-[#ECEBE9]"></span>
            <p className="bg-[#f9e6be] absolute top-6 w-[183px] h-8 rounded-lg flex items-center justify-center text-colorText text-base">
              خدمات
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          <div className="w-[100%] md:w-[50%] mx-auto h-auto gap-6  flex items-center justify-center flex-wrap mt-5">
            {Services.map((service) => (
              <Box
                key={service.id}
                id={service.id}
                title={service.title}
                src={service.src}
                src2={service.src2}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" w-full h-[500px] mt-[5rem]  md:mt-24">
        <div className="flex items-center justify-center h-40">
          <div className="w-[100%] md:w-[50%] lg:w-[40%] relative flex items-center justify-center">
            <span className="w-full absolute top-10 h-[2px] bg-[#ECEBE9]"></span>
            <p className="bg-[#f9e6be] absolute top-6 w-[183px] h-8 rounded-lg flex items-center justify-center text-colorText text-base">
              پزشکان برتر
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="w-[100%]   flex items-center justify-center  mt-5  overflow-hidden">
            <SliderDoctor />
          </div>
        </div>
      </div>
      <div className=" w-full h-auto  pb-10">
        <div className="flex items-center justify-center h-40">
          <div className="w-[50%]   relative flex items-center justify-center">
            <span className="w-full absolute top-10 h-[2px] bg-[#ECEBE9]"></span>
            <p className="bg-[#f9e6be] absolute top-6 w-[183px] h-8 rounded-lg flex items-center justify-center text-colorText text-base">
              تخصص ها
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          <div className="w-[80%] md:w-[50%] mx-auto h-auto gap-6  flex items-center justify-center flex-wrap mt-5">
            {Expertise.map((expertises) => (
              <Box
                key={expertises.id}
                id={expertises.id}
                title={expertises.title}
                src={expertises.src}
                src2 ={expertises.src2}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="doctorDiv gap-6 md:gap-0 w-full md:w-[75%] mt-10 mx-auto min-h-[600px] flex  flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2">
          <img src="/doc.svg" className="w-[447px] h-[561px]" alt="" />
        </div>
        <div className="w-full px-5 md:px-0 md:w-1/2">
          <img src="/img.svg" alt="" />
          <span className="text-[#000] text-14px mt-7 block">
            دکتر آسپرین مکان یاب سلامت مربوط به خدمات درمان و پزشکی برای
            ایرانیان است که با برنامه‌ریزی و مطالعه درست ، تصمیم دارد مرهم درد
            کاربران باشد. مجموعه “ دکتر آسپرین ” با داشتن پزشکان و متخصصان که
            همه روزه در خدمت بیماران هستند زندگی، امید، عشق و سلامتی را برای
            تمامی هموطنان حتی در دورترین نقطه کشور به ارمغان می‌‌آورد تا بتواند
            با این کار نفس زندگی را تازه کند
          </span>
        </div>
      </div>
      <div className="mt-24 mr-20">
        <SupportPage />
      </div>
      <div>
        <div className="flex items-center justify-center h-56">
          <div className="w-[50%]   relative flex items-center justify-center">
            <span className="w-full absolute top-10 h-[2px] bg-[#ECEBE9]"></span>
            <p className="bg-[#f9e6be] absolute top-6 w-[183px] h-8 rounded-lg flex items-center justify-center text-colorText text-base">
              تجربیات بیمار
            </p>
          </div>
        </div>
        <div>
          <Slider />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center h-40">
          <div className="w-[50%]   relative flex items-center justify-center">
            <span className="w-full absolute top-10 h-[2px] bg-[#ECEBE9]"></span>
            <p className="bg-[#f9e6be] absolute top-6 w-[183px] h-8 rounded-lg flex items-center justify-center text-colorText text-base">
              مقالات
            </p>
          </div>
        </div>
        <div>
          <ArticlesComponent />
        </div>
        <div className="w-full flex items-center justify-center mt-12">
          <p className="bg-[#f9e6be]   w-[183px]  h-8 rounded-lg flex items-center justify-center text-colorText text-base cursor-pointer">
            سایر مقالات
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
