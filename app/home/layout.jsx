
import Header from "@/components/HeaderComponent"

export default function HomeLayout({ children }) {
  return (
     <div className="w-full bg-[#FBFAF6]">
       <div className="px-5 md:px-[90px]">
       <Header />
        {children}
        <footer className='mt-10'>
         
        </footer>
       </div>
    </div>
  )
}
