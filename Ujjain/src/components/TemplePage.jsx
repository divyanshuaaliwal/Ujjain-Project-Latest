import React from 'react'
import { useParams } from 'react-router-dom'
import { temples } from '../Data';
import { hotels } from '../Data';
import { packages } from '../Data';
import {Card} from "./Card";
import Hotels from './Hotels';
import Packages from "./Packages"

const TemplePage = () => {

    const { dname } = useParams();

    console.log(dname);

    const TempleList = temples.filter(item => item.location?.toLowerCase() === dname.toLowerCase());
    const HotelList = packages.filter(item => item.location?.toLowerCase() === dname.toLowerCase());
    const PackageslList = hotels.filter(item => item.location?.toLowerCase() === dname.toLowerCase());

    console.log(TempleList);
    console.log(HotelList);
    console.log(PackageslList);


    const capitalizeWords = (str) => {
        return str.split(/[\s-]/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    };

    return (
        <>
            <section className="overflow-hidden">

                <div className="container mx-auto px-4 md:px-6 max-w-6xl text-center mt-5">
                    <h1 className="text-3xl md:text-5xl text-orange-600 font-bold mb-4 animate-fadeIn">
                        {capitalizeWords(dname)} Guide
                    </h1>
                    <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
                    <h2 className="text-xl md:text-3xl text-gray-800 font-semibold mb-8 leading-tight max-w-4xl mx-auto">
                        Everything you need to know about visiting the sacred {capitalizeWords(dname)} Temple
                    </h2>
                    <div className="flex justify-center mt-2">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-200">
                            Plan Your Visit
                        </button>
                    </div>
                </div>
            </section>


            <section className="py-7 bg-white">
                <div className="container w-[95vw] mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {
                            TempleList.map((item) => (
                                <Card
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    alt={item.alt}
                                    link={item.link}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>

            <Hotels HotelList={HotelList}/>
            <Packages PackageslList={PackageslList}/>

            
        </>
    )
}

export default TemplePage