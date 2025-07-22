import { useEffect, useState } from 'react'
import style from './style.module.css'
import { fetchBg, fetchImage } from '../data/firebase'
import PropTypes from 'prop-types'
import { AnimateSee } from '../animation'
import Countdown from 'react-countdown'

export default function Page2({data, id}) {
    // const [image, setImage] = useState('')
    const time = `${data?.date?.all}`
    // const WeddingDay = data?.date?.dateAll
    
    const wedingDate =  new Date(`${time}T10:00:00`)

    // useEffect(()=> {
    //     const getImage = async () => {
    //         const url = await fetchBg(`${id}/home`)
    //         setImage(url)
    //     }
    //     getImage()
    // },[])

    // const render = ({days, hours, minutes, seconds, completed }) => {
    //     if (completed) {
    //           // return setSave(false)
    //         // Render a completed state
    //         return (<span className="text-xl text-center">Hari Penikahan Telah Tiba!!</span>);
    //       } else {
    //         // Render a countdown
    //         return (
    //             <div style={{ fontSize: '2rem', textAlign: 'center' }} className=" GVibes  flex w-screen px-10 sm:w-full sm:px-0  m-auto font-serif text-orange-950 p-2 justify-between">
    //             <div className="rounded-lg border  border-orange-950 bg-yellow-600  bg-opacity-90 w-[4rem] h-[4rem]  flex justify-center items-center">
    //               <div className="leading-6 text-4xl sm:text-5xl  font-bold">
    //                 {days}
    //                 <p className="text-xs sm:text-sm  ">Days</p>
    //               </div>
    //             </div>
    //             <div className=" rounded-lg border border-orange-950 bg-yellow-600  bg-opacity-90 w-[4rem] h-[4rem]  flex justify-center items-center">
    //               <div className="leading-6 text-4xl sm:text-5xl  font-bold">
    //                 {hours}
    //                 <p className="text-xs sm:text-sm  ">Hours</p>
    //               </div>
    //             </div>
    //             <div className=" rounded-lg border border-orange-950 bg-yellow-600  bg-opacity-90 w-[4rem] h-[4rem]  flex justify-center items-center">
    //               <div className="leading-6 text-4xl sm:text-5xl  font-bold">
    //                 {minutes}
    //                 <p className="text-xs sm:text-sm  ">Minutes</p>
    //               </div>
    //             </div>
    //             <div className=" rounded-lg border border-orange-950 bg-yellow-600  bg-opacity-90 w-[4rem] h-[4rem]  flex justify-center items-center">
    //               <div className="leading-6 text-4xl sm:text-5xl  font-bold">
    //                 {seconds}
    //                 <p className="text-xs sm:text-sm  ">Seconds</p>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       }
    //     };
    const render = ({days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return (
              <div style={{ fontSize: '2rem', textAlign: 'center' }} className=" GVibes  flex w-screen px-10 sm:w-full sm:px-0  m-auto font-serif text-orange-950 p-2 justify-between">
                <div className="rounded-lg border  border-orange-950 bg-yellow-600  bg-opacity-90 w-[4rem] h-[4rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl font-bold">
                    <p>00</p>
                    <p className="text-xs sm:text-sm  ">Days</p>
                  </div>
                </div>
                <div className=" rounded-lg border  border-orange-950 bg-yellow-600  bg-opacity-90 w-[4rem] h-[4rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl font-bold">
                    <p>00</p>
                    <p className="text-xs sm:text-sm  ">Hours</p>
                  </div>
                </div>
                <div className=" rounded-lg border  border-orange-950 bg-yellow-600  bg-opacity-90 w-[4rem] h-[4rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl font-bold">
                    <p>00</p>
                    <p className="text-xs sm:text-sm  ">Minutes</p>
                  </div>
                </div>
                <div className=" rounded-lg border  border-orange-950 bg-yellow-600  bg-opacity-90 w-[4rem] h-[4rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl font-bold">
                    <p>00</p>
                    <p className="text-xs sm:text-sm  ">Seconds</p>
                  </div>
                </div>
              </div>
            );
          } else {
            // Render a countdown
            return (
                <div style={{ fontSize: '2rem', textAlign: 'center' }} className=" GVibes  flex w-screen px-10 sm:w-full sm:px-0  m-auto font-serif text-orange-950 p-2 justify-between">
                <div className="rounded-lg border  border-orange-950 bg-yellow-600  bg-opacity-90 w-[4rem] h-[4rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl sm:text-5xl  font-bold">
                    {days}
                    <p className="text-xs sm:text-sm  ">Days</p>
                  </div>
                </div>
                <div className=" rounded-lg border border-orange-950 bg-yellow-600  bg-opacity-90 w-[4rem] h-[4rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl sm:text-5xl  font-bold">
                    {hours}
                    <p className="text-xs sm:text-sm  ">Hours</p>
                  </div>
                </div>
                <div className=" rounded-lg border border-orange-950 bg-yellow-600  bg-opacity-90 w-[4rem] h-[4rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl sm:text-5xl  font-bold">
                    {minutes}
                    <p className="text-xs sm:text-sm  ">Minutes</p>
                  </div>
                </div>
                <div className=" rounded-lg border border-orange-950 bg-yellow-600  bg-opacity-90 w-[4rem] h-[4rem]  flex justify-center items-center">
                  <div className="leading-6 text-4xl sm:text-5xl  font-bold">
                    {seconds}
                    <p className="text-xs sm:text-sm  ">Seconds</p>
                  </div>
                </div>
              </div>
            );
          }
        };
    return(
        <section className=''>
            <div style={{backgroundImage : `url('/assets/home.jpeg')`}} className={`${style.bg} w-full h-screen  `}>
                <div className={`${style.wrap} relative z-10 h-screen  w-full flex justify-center items-center`}>
                    {/* <AnimateSee> */}
                        <div className=''>
                            <div style={{textShadow: '1px 1px #065f46 '}} className='text-center  relative z-10  '>
                              <AnimateSee>
                                <p className='font-bold tracking-[0.3rem] mb-5'>THE WEDDING OF</p>
                                <h3 className="text-5xl sm:text-7xl GVibes font-bold py-2 text-center  flex  justify-center ">
                                <span className="text-center sm:text-left italic">{data?.name?.mens}</span>
                                <span className="px-5" >&</span>
                                <span className="">{data?.name?.grils}</span>
                                </h3>
                              </AnimateSee>
                                {/* <h3 className='text-3xl playfair font-bold sm:text-4xl py-2'>{data?.name?.mens} & {data?.name?.grils}</h3> */}
                                {/* <p>{data?.date?.resepsi}</p> */}
                            </div>
                            <AnimateSee>
                            <Countdown date={time} renderer={render}/>
                            </AnimateSee>
                    </div>
                    {/* </AnimateSee> */}
                    
                </div>
            </div>
                    <AnimateSee>
                    <p className='relative my-20 sm:mt-[20vh] w-[95%]  sm:max-w-[1000px] mx-auto text-center   sm:text-start text-sm  sm:text-xl italic leading-tight z-10'>
                        "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, 
                        supaya kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. 
                        Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir." (QS. Ar-Rum: 21)
                    </p>
                    </AnimateSee>
        </section>
    )
}

Page2.propTypes = {
    data: PropTypes.string,
    id: PropTypes.string
}