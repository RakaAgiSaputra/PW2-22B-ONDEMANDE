import Image from "next/image";
import { ButtonJadwal } from "../ui/ButtonJadwal";
import { ButtonProps } from "./ButtonProps";

function CallToAction() {
  const paragraphCta =
    "Jelajahi pantai yang masih alami, lanskap yang tenang, dan landmark budaya di Lampung untuk pengalaman perjalanan yang tak terlupakan.";
  const jadwalHari = "Senin hingga Jumat, Jam 8 Pagi - 12 Malam";
  const noHp = "+621234567894";

  return (
    <section className="px-20 flex h-88vh mt-20 sm:flex-col md:flex-row gap-x-8">
      <div>
        <h1 className="text-5xl font-bold pb-4">
          Nikmati Keindahan Permata{" "}
          <span className="text-primaryColor">
            Wisata Tersembunyi Lampung Hari Ini
          </span>
        </h1>
        <p className="pb-12 text-2xl">{paragraphCta}</p>
        <div className="flex gap-x-10 pb-6">
          <ButtonProps
            ukuran="text-xl"
            words="Rencanakan Sekarang"
            bg="bg-primaryColor"
          />

          <ButtonProps
            ukuran="text-xl"
            words="Penawaran Terbatas"
            bg="bg-white"
          />
        </div>
        <div className="flex">
          <ButtonJadwal icon="/assets/images/img_time.png" text={jadwalHari} />
          <ButtonJadwal
            icon="/assets/images/img_wa.png"
            text="Sedia 24 Jam Melalui +6289685935678"
          />
        </div>
      </div>
      <div className="w-3/4">
        <Image
          src="/assets/images/img_payung.png"
          alt="img_payung"
          priority
          width={500}
          height={500}
          className="min-w-80 items-center justify-center"
        />
      </div>
    </section>
  );
}

export default CallToAction;
