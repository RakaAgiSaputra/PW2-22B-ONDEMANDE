import React from "react";
import CardDestinations from "@/components/ui/CardDestinations"; // Pastikan Anda sudah memiliki komponen ini

const destinationsData = [
  {
    titleCard: "Menyibak Keindahan Pulau Pahawang",
    createDate: "Updated, 14 Januari 2025",
    desc: "Pulau Pahawang adalah surga tersembunyi di Lampung yang menawarkan keindahan bawah laut memukau. Nikmati snorkeling untuk menjelajahi terumbu karang dan ikan berwarna-warni, atau bersantai di pantainya yang tenang dengan pasir putih lembut. Tempat ini sangat cocok untuk liburan bersama keluarga atau pasangan.",
  },
  {
    titleCard: "Pesona Air Terjun Way Lalaan",
    createDate: "Updated, 14 Januari 2025",
    desc: "Air Terjun Way Lalaan adalah destinasi alam yang memukau dengan keindahan air terjun bertingkat di tengah hutan tropis yang asri. Ditemani suara gemuruh air dan udara segar, Anda dapat menikmati trekking ringan dan bersantai di kolam alami yang jernih.",
  },
  {
    titleCard: "Eksotisme Bukit Sakura di Kemiling",
    createDate: "Updated, 14 Januari 2025",
    desc: "Bukit Sakura adalah destinasi unik yang menghadirkan suasana ala Jepang di tengah Lampung. Dengan taman sakura buatan, jembatan merah, dan spot foto Instagrammable, tempat ini cocok untuk liburan keluarga maupun sesi foto prewedding.",
  },
  {
    titleCard: "Pantai Tanjung Setia: Surga bagi Peselancar",
    createDate: "Updated, 14 Januari 2025",
    desc: "Pantai Tanjung Setia terkenal dengan ombaknya yang tinggi dan sempurna untuk berselancar, terutama bagi penggemar olahraga air. Selain itu, Anda juga dapat menikmati keindahan matahari terbenam, bermain pasir, atau memancing di sekitar pantai ini.",
  },
  {
    titleCard: "Keajaiban Ekosistem di Taman Nasional Way Kambas",
    createDate: "Updated, 14 Januari 2025",
    desc: "Taman Nasional Way Kambas adalah tempat konservasi gajah yang terkenal di Indonesia. Selain menyaksikan gajah di habitat alaminya, pengunjung juga bisa mengikuti tur edukasi tentang konservasi satwa dan menjelajahi keanekaragaman flora serta fauna lainnya di area ini.",
  },
  {
    titleCard: "Menjelajahi Pantai Gigi Hiu",
    createDate: "Updated, 14 Januari 2025",
    desc: "Pantai Gigi Hiu menawarkan pemandangan batu karang yang menjulang seperti deretan gigi hiu di tepi pantai. Tempat ini sangat cocok untuk pecinta fotografi dan wisatawan yang mencari keindahan alami yang unik.",
  },
  {
    titleCard: "Wisata Alam Lembah Hijau",
    createDate: "Updated, 14 Januari 2025",
    desc: "Lembah Hijau adalah taman rekreasi yang memadukan wisata alam dan wahana modern. Cocok untuk liburan keluarga, tempat ini memiliki kebun binatang mini, taman air, dan area bermain anak.",
  },
  {
    titleCard: "Puncak Mas Lampung",
    createDate: "Updated, 14 Januari 2025",
    desc: "Puncak Mas adalah tempat wisata yang menawarkan pemandangan Kota Bandar Lampung dari ketinggian. Dengan rumah pohon, spot foto menarik, dan kafe yang nyaman, tempat ini cocok untuk bersantai dan menikmati suasana sejuk.",
  },
  {
    titleCard: "Pantai Sari Ringgung",
    createDate: "Updated, 14 Januari 2025",
    desc: "Pantai Sari Ringgung menawarkan hamparan pasir putih yang luas dan fasilitas wisata keluarga seperti kano, banana boat, dan area berjemur. Tempat ini juga memiliki masjid apung yang unik.",
  },
  {
    titleCard: "Gunung Krakatau: Jejak Letusan Bersejarah",
    createDate: "Updated, 14 Januari 2025",
    desc: "Gunung Krakatau adalah destinasi yang cocok bagi para petualang dan pecinta sejarah. Nikmati trekking ringan, belajar tentang letusan bersejarah, dan saksikan panorama laut yang indah dari puncaknya.",
  },
];

const Destinations = () => {
  return (
    <div>
      {destinationsData.map((destination, index) => (
        <CardDestinations
          key={index}
          path={`/assets/images/img_card_${index + 1}.png`}
          titleCard={destination.titleCard}
          createDate={destination.createDate}
          desc={destination.desc}
        />
      ))}
    </div>
  );
};

export default Destinations;
