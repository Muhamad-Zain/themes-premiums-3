'use client'
import { fetchData } from "@/components/data/firebase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Rsvp() {
    const {id} = useParams()

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    console.log(data);
    
    
    
    useEffect(() => {
        const getData = async () => {
            try {
                const fetchedData = await fetchData(`${id}/rsvp`);
                setData(fetchedData ? Object.values(fetchedData) : []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        
        getData();
    }, [id]);
    return(
        <section className=" max-w-[400px] min-h-screen m-auto">
            <div className="p-5">
                <h2 className="playfair text-5xl font-bold underline text-center italic animate-pulse py-5">RSVP</h2>
                <div>
                    <h3 className="py-5">Konfirmasi Kehadiran </h3>
                    <div className="overflow-x-auto rounded-lg border border-orange-400">
                    <table className=" min-w-full  text-sm leading-normal">
                        <thead className="uppercase">
                            <tr className="">
                            <th className="py-3 px-1 border-b border-orange-400 text-center">No</th>
                            <th className="py-3 px-1 text-left border-b border-orange-400">Nama</th>
                            <th className="py-3 px-1 text-left border-b border-orange-400">Kehadiran</th>
                            <th className="py-3 px-1 text-left border-b border-orange-400">Jumlah</th>
                            </tr>
                        </thead>
                        <tbody>
                        {isLoading ? (
                                    <tr>
                                        <td colSpan="4" className="text-center py-3 px-6 text-orange-400">
                                            Data sedang dimuat...
                                        </td>
                                    </tr>
                                ) : data.length > 0 ? (
                                    data.map((rs, index) => (
                                        <tr key={rs.id || index} className="border-b border-orange-400 ">
                                            <td className="text-center py-3 px-1">{index + 1}</td>
                                            <td className="py-3 px-1">{rs.name}</td>
                                            <td className="py-3 px-1">{rs.confirm}</td>
                                            <td className="py-3 px-1">{rs.jumlah || 0}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center py-3 px-6 text-orange-400">
                                            Tidak ada data
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </section>
    )
    
}