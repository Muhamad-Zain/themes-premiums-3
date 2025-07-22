import Link from "next/link";
import { SiWhatsapp, SiShopee } from "react-icons/si";
import PropTypes from "prop-types";



export default function Page9({data, id}) {
    

    return(
        <section className='p-10'>
            <div className='text-center pt-10 text-sm italic '>
                <p>
                    Merupakan suatu kebaagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami. <br />
                    Atas do'a dan restunya kami ucapkan terima kasih. 
                </p>
                <p className='font-bold italic pt-10' >Dari Kami yang berbahagia :</p>
                <h3 className='playfair text-3xl italic'>{data?.name?.mens} & {data?.name?.grils}</h3>
            </div>
            <div className="pt-20 pb-10 m-auto">
                <p className="text-center text-xs py-2" >Create Invitation by i-vee</p>
                <div className="flex text-sm w-10 justify-around m-auto " >
                <Link href=''>
                    <SiWhatsapp />
                </Link>
                <Link href=''>
                    <SiShopee />
                </Link>
                </div>
            </div>
        </section>
    )
}
Page9.propTypes = {
    data: PropTypes.string,
    id: PropTypes.string
}