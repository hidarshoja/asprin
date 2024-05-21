import React from "react";


export default function BoxDoctorServices() {
  return (
    <div>
      <div className="w-full rounded-t-2xl border min-h-[284px] py-8 px-6 bg-white mt-6 flex flex-col   justify-between">
        <div className="w-full  flex   justify-between">
          <div className="w-1/4 flex flex-col items-center">
            <img
              src="/doctor2.svg"
              alt="doctor"
              className="w-[90px] h-[90px] lg:w-[200px] lg:h-[200px] border-4 border-[#f9e6be] rounded-full"
            />
            <p className="text-[#31546b] text-sm lg:text-[14px] font-bold mt-3">
              شماره نظام پزشکی: 109486
            </p>
          </div>
          <div className="w-2/4 flex flex-col justify-around">
            <p className="font-bold text-base  lg:text-2xl text-colorText">
              دکتر مریم شاهی
            </p>
            <p className="font-bold text-sm lg:text-xl text-[#979797] py-3">
              متخصص زنان و زایمان - ناباروری فلوشیپ اختلالات کف لگن
            </p>
            <p className="text-[#787878] text-base font-bold mt-3">
              خدمات تخصصی :
            </p>
            <div className="mt-3 hidden lg:flex flex-wrap gap-4 text-sm">
              <button className="w-auto lg:w-[99px] h-[36px] rounded bg-[#edf8ff] text-[#657D8B] border">
                پارکینسون
              </button>
              <button className="w-auto lg:w-[99px] h-[36px] rounded bg-[#edf8ff] text-[#657D8B] border">
                سکته مغزی
              </button>
              <button className="w-auto lg:w-[99px] h-[36px] rounded bg-[#edf8ff] text-[#657D8B] border">
                میگرن
              </button>
              <button className="w-auto lg:w-[99px] h-[36px] rounded bg-[#edf8ff] text-[#657D8B] border">
                رادیولوژی
              </button>
              <button className="w-auto lg:w-[99px] h-[36px] rounded bg-[#edf8ff] text-[#657D8B] border">
                پارکینسون
              </button>
            </div>
          </div>
          <div className="w-1/4 flex  flex-col items-end justify-between">
            <div>
              <img src="/Ellip.svg" className="w-[70px] h-[70px]" alt="" />
            </div>
            <div>
              <span className="hidden lg:flex gap-8">
                <span className=" flex">
                  <img src="/star.svg" alt="" />
                  <img src="/star.svg" alt="" />
                  <img src="/star.svg" alt="" />
                  <img src="/star.svg" alt="" />
                  <img src="/star.svg" alt="" />
                </span>
                <span className="text-[#979797] font-bold text-xs lg:text-sm">
                  4.3 (96 نظر)
                </span>
              </span>
            </div>
          </div>
        </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm w-full lg:hidden">
              <button className="w-auto lg:w-[99px] h-[36px] rounded bg-[#edf8ff] text-[#657D8B] border">
                پارکینسون
              </button>
              <button className="w-auto lg:w-[99px] h-[36px] rounded bg-[#edf8ff] text-[#657D8B] border">
                سکته مغزی
              </button>
              <button className="w-auto lg:w-[99px] h-[36px] rounded bg-[#edf8ff] text-[#657D8B] border">
                میگرن
              </button>
              <button className="w-auto lg:w-[99px] h-[36px] rounded bg-[#edf8ff] text-[#657D8B] border">
                رادیولوژی
              </button>
              <button className="w-auto lg:w-[99px] h-[36px] rounded bg-[#edf8ff] text-[#657D8B] border">
                پارکینسون
              </button>
            </div>
   
      </div>
      <p className="text-colorText text-base font-bold w-[170px] bg-[#FEF5D6] p-1 rounded-tl-2xl mt-6 text-center lg:hidden">
        شماره تماس و آدرس
      </p>
      <div className="w-full py-4  min-h-[118px] bg-[#F7F7F7] shadow-lg flex flex-col gap-3 rounded-b-[10px]">
        <div className="w-full flex flex-col lg:flex-row gap-2 py-2 lg:items-center justify-between pl-1 text-colorText">
          <div className="text-colorText font-bold text-base bg-[#fef5d6] w-[100px] py-2 rounded-l-xl text-center">
            شهریار
          </div>
          <div className="flex items-center gap-1">
            <p className="text-[#31546B] px-2 lg:hidden text-base font-bold">
                آدرس : 
            </p>
            <img src="/loc5.svg" alt="" />
            <span className="text-colorText text-sm lg:text-base">
              خیابان ولیعصر کوچه آقاجانلو جنب داروخانه کوچه آقاجانلو جنب
              داروخانه
            </span>
          </div>
          <div
          className="text-center rounded-md cursor-pointer w-full lg:w-[135px]"
            style={{
              backgroundImage: 'url("/mapGoogle.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "35px",
             
            }}
          >
            <span >
              مسیر یابی
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
            <p className="text-colorText px-2 lg:hidden text-base font-bold">
                شماره تلفن : 
            </p>
              <span className="text-colorText font-bold text-base">
                021-222****
              </span>
              <img src="/phoneNumber.svg" alt="" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-colorText font-bold text-base">
                021-222****
              </span>
              <img src="/phoneNumber.svg" alt="" />
            </div>
          </div>
        </div>
       <div className="px-3">
       <div className="w-full h-[1px] bg-[#ECECEC]"></div>
       </div>
        <div className="w-full flex flex-col lg:flex-row gap-2 py-2 lg:items-center justify-between pl-1 text-colorText">
          <div className="text-colorText font-bold py-2 text-base bg-[#fef5d6] w-[100px] rounded-l-xl text-center">
            سعادت آباد
          </div>
          <div className="flex items-center gap-1">
            <p className="text-colorText px-2 lg:hidden text-base font-bold">
                آدرس : 
            </p>
            <img src="/loc5.svg" alt="" />
            <span className="text-colorText text-sm lg:text-base">
              خیابان ولیعصر کوچه آقاجانلو جنب داروخانه کوچه آقاجانلو جنب
              داروخانه
            </span>
          </div>
          <div
          className="text-center rounded-md cursor-pointer w-full lg:w-[135px]"
            style={{
              backgroundImage: 'url("/mapGoogle.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "35px",
             
            }}
          >
            <span >
              مسیر یابی
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
            <p className="text-colorText px-2 lg:hidden text-base font-bold">
                شماره تلفن : 
            </p>
              <span className="text-colorText font-bold text-base">
                021-222****
              </span>
              <img src="/phoneNumber.svg" alt="" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-colorText font-bold text-base">
                021-222****
              </span>
              <img src="/phoneNumber.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
