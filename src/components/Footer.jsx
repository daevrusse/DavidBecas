import SocialMedia from './SocialMedia'

const Footer = () => {
   
   return (
      <footer
      className="font-cairo w-full flex flex-col items-center bg-[#01569D] text-center text-surface text-white">
      <div className="pt-8">
         <div className="mb-2 flex justify-center space-x-2">
            <SocialMedia
               classes={'hover:bg-white hover:text-[#01569D]'}
            />
         </div>
      </div>

      <div className="w-full bg-blac/5 p-4 text-center text-sm">
         © 2025 Copyright:
         <a href="#">&nbsp; DavidBecas</a>
      </div>
      </footer>
   )  
}

export default Footer