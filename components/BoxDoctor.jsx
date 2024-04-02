import React from 'react'

export default function BoxDoctor({ id, title, src }) {
  return (
    <div className='w-[108px] h-[108px] rounded-2xl bg-white shadow-lg gap-4 flex flex-col items-center justify-center'>
      <img src={src} className='w-[60px] h-14' alt={title} />
      <p className='text-colorText text-[10px] font-bold'>{title}</p>
    </div>
  )
}
