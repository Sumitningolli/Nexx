import logoUrl from "../assets/logo.png";


const Footer = ()=>{
        return <p className="flex items-center justify-center font-bold border-t bg-white/20 backdrop-blur-xl mt-10">
            &copy; {new Date().getFullYear()} {<img src={logoUrl} className="w-15 h-15 inline-block"/>} All Rights Reserved
          
        </p>
}

export default Footer;