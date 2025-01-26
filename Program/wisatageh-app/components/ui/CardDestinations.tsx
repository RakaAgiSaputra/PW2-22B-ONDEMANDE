import Image from "next/image";
import { ButtonWishlist } from "./ButtonWishlist";

interface PageProps {
  path: string;
  titleCard: string;
  createDate: string;
  desc: string;
}

export default function CardDestinations(props: PageProps) {
  return (
    <section className="flex flex-row mt-10 gap-10 px-48">
      {/* Bagian Gambar */}
      <div className="w-1/2 relative">
        <Image
          className="rounded-3xl"
          src={props.path}
          alt="img"
          priority
          fill
        />
      </div>

      {/* Bagian Konten */}
      <div className="w-1/2 h-3/4">
        <div>
          <h1 className="font-bold text-3xl">{props.titleCard}</h1>
          <p>{props.createDate}</p>
          <p className="mt-5 text-xl">{props.desc}</p>
        </div>
        <div className="mt-5">
          <ButtonWishlist
            words="Masukan Wishlist"
            path="/assets/icons/ic_task.png"
            alt="img_card"
          />
        </div>
      </div>
    </section>
  );
}
