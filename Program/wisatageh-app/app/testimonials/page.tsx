import { CardTestimoni } from "@/components/ui/CardTestimoni";
import React from "react";

const testimonials = [
  {
    nameUsers: 'David Lee',
    jobUsers: 'Traveller',
    image: '/assets/images/img_4.png',
    testiUsers: 'WisataGeh membuat perjalanan kami di Lampung luar biasa dengan tur yang dipersonalisasi dan layanan terbaik. Sangat merekomendasikan!',
  },
  {
    nameUsers: 'Jessica Hartono',
    jobUsers: 'Explorer',
    image: '/assets/images/img_2.png',
    testiUsers: 'Pengalaman yang tidak terlupakan bersama WisataGeh! Layanan mereka sangat profesional dan ramah.',
  },
  {
    nameUsers: 'Michael Andri',
    jobUsers: 'Backpacker',
    image: '/assets/images/img_3.png',
    testiUsers: 'WisataGeh mengatur semua perjalanan kami dengan sempurna. Sangat puas!',
  },
  {
    nameUsers: 'Sarah Putri',
    jobUsers: 'Content Creator',
    image: '/assets/images/img_1.png',
    testiUsers: 'Setiap sudut destinasi ini begitu fotogenik! WisataGeh memberikan pengalaman yang luar biasa untuk bahan konten saya.'
  },
];

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-start">
        Testimoni Pengguna Wisata Geh
      </h2>
      <div className="flex flex-wrap gap-8 justify-center py-10">
        {testimonials.map((testimonial, index) => (
          <CardTestimoni
            key={index}
            nameUsers={testimonial.nameUsers}
            jobUsers={testimonial.jobUsers}
            image={testimonial.image}
            testiUsers={testimonial.testiUsers}
          />
        ))}
      </div>
    </div>
  );
}
