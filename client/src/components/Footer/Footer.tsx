import Image from "next/image"
import FooterNav from "./FooterNav"
import logo from "@/assets/images/logo.png"
import passanger from "@/assets/images/passanger.png"
import airline from "@/assets/images/airline.png"
import qr from "@/assets/images/qr.png"
import samandehi from "@/assets/images/samandehi.png"
import ticket from "@/assets/images/ticket.png"

const Footer = () => {
    return (
        <footer className="flex w-full flex-col gap-2 p-2">
            
                <div className="flex justify-between w-full mx-auto max-w-300 not-md:flex-wrap items-center border-t-2 border-gray-200  px-10">
                    <FooterNav />
                    <div className="flex flex-row-reverse md:flex-col  not-md:justify-between">
                        <div className="flex flex-col  items-end gap-3">
                             <Image src={logo} alt="تورینو" priority className="h-11" />
                             <span >تلفن پشتیبانی: 8574-021</span>
                        </div>
                        <div className="flex flex-wrap gap-8 not-md:gap-5 not-md:w-1/2 items-center justify-center">
                             <Image src={airline} alt="airline" priority  className="not-md:w-12"/>
                             <Image src={passanger} alt="passanger" priority  className="not-md:w-12"/>
                             <Image src={qr} alt="qr" priority  className="not-md:w-12"/>
                             <Image src={samandehi} alt="samandehi" priority  className="not-md:w-12"/>
                             <Image src={ticket} alt="ticket" priority  className="not-md:w-12"/>

                        </div>
                    </div>
                </div>
                <p className="w-full text-center my-5  border-t-2 border-gray-200">
                    کلیه حقوق این وب سایت متعلق به تورینو میباشد.
                </p>
            
        </footer>
    )
} 

export default Footer

