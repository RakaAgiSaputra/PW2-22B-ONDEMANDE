import Image from "next/image";

interface PropsWish{
    words: string;
    path: string;
    alt: string
}


export function ButtonWishlist(
    props: PropsWish
) {
  return (
    <button className="bg-primaryColor flex gap-4 px-10 py-5 rounded-3xl border-primaryColor font-bold text-white text-xl hover:scale-90 hover:bg-gray-500">
      <Image
        src={props.path}
        alt={props.alt}
        width={35}
        height={35}
      />
      {props.words}
    </button>
  );
}
