import Image from "next/image";
import { InterestinWisataUnit } from "@/components/ui/InterestinWisataUnit";

function InterestingWisata() {
  return (
    <section className="flex xs:flex-col h-88vh flex-row p-20 items-center">
      <div>
        <Image
          src={"/assets/images/img_sekura.png"}
          width={800}
          height={800}
          alt="img_sekura"
          className="rounded-xl w-4/5"
        />
      </div>
      <div className="grid grid-cols-2 w-1/2 gap-20">
        <InterestinWisataUnit
          titleProps="Eksplorasi Keajaiban Alam"
          desc="Temukan surga tersembunyi dengan pemandangan air terjun yang memukau dan jalur trekking yang memacu adrenalin."
        />
        <InterestinWisataUnit
          titleProps="Keindahan Pantai Tropis"
          desc="Rasakan semilir angin pantai berpasir putih dan deburan ombak yang menenangkan jiwa."
        />
        <InterestinWisataUnit
          titleProps="Wisata Budaya Otentik"
          desc="Selami keunikan tradisi lokal dan kehangatan masyarakat yang akan membuat perjalanan Anda penuh makna."
        />
        <InterestinWisataUnit
          titleProps="Harmoni Hutan Tropis"
          desc="Jelajahi rimbunnya hutan tropis dan nikmati keindahan flora dan fauna dalam harmoni sempurna."
        />
      </div>
    </section>
  );
}

export default InterestingWisata;
