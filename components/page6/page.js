import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { fetchGalery } from "../data/firebase";
import { AnimatedSection, AnimateSee } from "../animation";



export default function Page9({data, id}) {
    const [image, setImage] = useState([])

    useEffect(() =>{
        const fetch = async () => {
            const data = await fetchGalery(id)
            setImage(data)
        }
        fetch()
    },[])

    
    return(
        <section className=''>
            <AnimatedSection>
            <h3 className='text-center text-4xl font-extrabold -mb-3 playfair pt-20 '>Capture</h3>
            <h3 className="GVibes text-center text-4xl mb-10 border-b-2 m-auto border-orange-800 w-72  ">Moment</h3>
            <div className=' p-2'>
                {image && image.length > 0 ? image.map((url, index) => (
                <AnimateSee key={index} >
                    <img 
                        key={index} 
                        onClick={() => handleImg(index)}
                        src={url}  
                        className='w-full h-[80vh] sm:h-screen my-2 rounded-sm sm:rounded-md ' 
                        style={{backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: 'center'}} />
                </AnimateSee>
                )):

                null}
                
            </div>
            </AnimatedSection>
        </section>
    )
}
Page9.propTypes = {
    data: PropTypes.string,
    id: PropTypes.string
}