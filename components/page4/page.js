'use client'
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { AnimatedSection, AnimateSee } from "../animation";
import style from './style.module.css'


export default function Page5({data}) {
    const time = `${data?.date?.all}`
    // const WeddingDay = data?.date?.dateAll
    
    const wedingDate =  new Date(`${time}T10:00:00`)
    
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Set state untuk render hanya di klien
    }, []);

    const renderer = ({days, hours, minutes, seconds, completed }) => {
            if (completed) {
                // Render a completed state
                return (
                  <div style={{ fontSize: '2rem', textAlign: 'center' }} className=" GVibes  flex w-screen px-10 sm:w-full sm:px-10  m-auto font-serif text-orange-950 p-2 justify-between">
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
                    <><div style={{ fontSize: '2rem', textAlign: 'center' }} className=" GVibes  flex w-screen px-10 sm:w-full sm:px-20 py-10 m-auto font-serif text-orange-950 p-2 justify-between">
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
                  <div className="w-full flex justify-center  items-center">
                      <button
                        onClick={handleSaveDate}
                        className="py-2  px-4 text-3xl rounded-md bg-yellow-600  text-orange-800 playfair">SAVE DATE</button>
                    </div>
                    </>
                );
              }
            };
      const handleSaveDate = () => {
        const startDate = wedingDate.toISOString().replace(/-|:|\.\d\d\d/g,"").split(".")[0] + "Z"; // format UTC
        const endDate = new Date(wedingDate.getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g,"").split(".")[0] + "Z"; // 2 jam setelah acara
        const eventTitle = `Wedding of ${data?.name?.mens} & ${data?.name?.grils}`;
        const eventDetails = `Join us in celebrating the wedding of ${data?.name?.mens} & ${data?.name?.grils}.`;
        const eventLocation = "Bojonegoro, Indonesia";
      
        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(eventDetails)}&location=${encodeURIComponent(eventLocation)}`;
        
        window.open(calendarUrl, '_blank');
      };
      
    return(
        <section>
          <AnimatedSection>
            <div style={{backgroundImage:'url(/assets/bg-information.jpeg)', backgroundSize:'cover', objectFit:'cover', backgroundPosition:'center'}} 
            className={style.bgInformation}>
              <div className="relative z-10">
                  <div className="text-center text-4xl sm:text-5xl py-10">
                    <h3 className="font-extrabold -mb-3 playfair ">We Are</h3>
                    <h3 className="GVibes border-b-2 border-orange-800 w-72 m-auto">Getting Married</h3>
                  </div>
                  <div className="text-center px-5 opacity-80 italic pt-28">
                    <p>
                    Siang dan malam berganti begitu cepat,
                    diantara saat saat mendebarkan yang belum pernah kami rasakan sebelum nya. 
                    kami nantikan kehadiran para keluarga dan sahabat, untuk menjadi saksi ikrar janji suci kami di hari yang bahagia:
                    </p>
                  </div>
                  <AnimateSee>
                  <Countdown date={time} renderer={renderer} />
                  </AnimateSee>
              </div>

            </div>
            </AnimatedSection>
        </section>
    )
}
Page5.propTypes = {
  data: PropTypes.string
}