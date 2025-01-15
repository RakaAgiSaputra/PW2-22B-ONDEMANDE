"use client"
import { faChevronRight, faHandHoldingDollar, faHeartCircleCheck, faHouse, faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';

export default function PaketWisata() {
  
    const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      title: 'Paket Travel Eksklusif WisataGeh',
      description: 'Paket yang disesuaikan untuk menjelajahi pemandangan Lampung yang semarak, disesuaikan dengan preferensi perjalanan Anda.',
      icon: <FontAwesomeIcon icon={faHouse} style={{fontSize: '50px'}} width={40} height={40} />,
    },
    {
      id: 2,
      title: 'Paket Pendampingan Tur WisataGeh',
      description: 'Tur berpemandu ahli yang menampilkan keindahan, budaya, dan tempat petualangan Lampung.',
      icon: <FontAwesomeIcon icon={faPersonWalkingLuggage} style={{fontSize: '50px'}} width={40} height={40} />,
    },
    {
      id: 3,
      title: 'Paket Hemat WisataGeh',
      description: 'Liburan dengan akomodasi yang disesuaikan dengan kebutuhan Anda.',
      icon: <FontAwesomeIcon icon={faHandHoldingDollar} style={{fontSize: '50px'}} width={40} height={40} />,
    },
    {
      id: 4,
      title: 'Paket Trip + Kulineran Sehat WisataGeh',
      description: 'Wisata masakan Lampung otentik menyenangkan para penggemar kuliner.',
      icon: <FontAwesomeIcon icon={faHeartCircleCheck} style={{fontSize: '50px'}} width={40} height={40} />,
    },
  ];

  return (
    <div className="h-100vh px-20 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center mb-8">
        Temukan Yang Terbaik di Lampung bersama WisataGeh
      </h1>
      <p className="text-lg text-center mb-12">
        WisataGeh Menawarkan paket yang sesuai dan wisata yang seru
      </p>

      <div className="grid grid-cols-2 gap-8 text-white">
        {packages.map((travelPackage) => (
          <div
            key={travelPackage.id}
            className={`bg-primaryColor rounded-lg shadow- lg p-6 transition-transform transform hover:scale-105`}
          >
            <div className="flex items-center mb-4">
              {travelPackage.icon}
              <h2 className="text-xl font-semibold ml-2">{travelPackage.title}</h2>
            </div>
            <p className="text-white">{travelPackage.description}</p>
            <div className="mt-4 text-white flex items-center justify-between cursor-pointer">
                <span className='mr-2 font-bold'>Pelajari Lebih Lanjut</span>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
