import { CardTestimoni } from "@/components/ui/CardTestimoni";

export function TestimoniUsers() {
  return (
    <section className="h-100vh px-20 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold px-80 py-2">
          Apa Kata Pelanggan Kami yang Puas Tentang Kami
        </h1>
        <p className="text-lg px-80">
          Dengarkan cerita langsung dari wisatawan tentang petualangan mereka
          yang menakjubkan di Lampung bersama WisataGeh.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center py-10">
        <CardTestimoni
          image="/assets/images/img_4.png"
          nameUsers="David Lee"
          jobUsers="Traveler"
          testiUsers="WisataGeh membuat perjalanan kami di Lampung luar biasa dengan tur yang dipersonalisasi dan layanan terbaik. Sangat merekomendasikan!"
        />

        <CardTestimoni
          image="/assets/images/img_2.png"
          nameUsers="Jessica Hartono"
          jobUsers="Photographer"
          testiUsers="Keindahan alam dan keramahan penduduk setempat membuat pengalaman wisata saya tak terlupakan. Terima kasih WisataGeh!"
        />

        <CardTestimoni
          image="/assets/images/img_3.png"
          nameUsers="Michael Andri"
          jobUsers="Backpacker"
          testiUsers="Sangat puas dengan rute petualangan yang ditawarkan. WisataGeh benar-benar memahami kebutuhan traveler seperti saya!"
        />

        <CardTestimoni
          image="/assets/images/img_1.png"
          nameUsers="Sarah Putri"
          jobUsers="Content Creator"
          testiUsers="Setiap sudut destinasi ini begitu fotogenik! WisataGeh memberikan pengalaman yang luar biasa untuk bahan konten saya."
        />
      </div>
    </section>
  );
}