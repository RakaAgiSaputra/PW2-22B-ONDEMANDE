import Image from "next/image";

interface props {
  image: string;
  nameUsers: string;
  jobUsers: string;
  testiUsers: string;
}

export function CardTestimoni(props: props) {
  return (
    <div className="flex p-8 gap-3 bg-gray-300 w-1/3 rounded-xl">
      <div className="bg-red-400 w-1/2 rounded-xl">
        <Image
          src={props.image}
          width={500}
          height={500}
          priority
          alt="img_1"
          className="rounded-lg w-100"
        />
      </div>
      <div className="w-3/4">
        <h1 className="text-sm font-bold">{props.nameUsers}</h1>
        <p className="mb-2 text-xs">{props.jobUsers}</p>

        <p className="text-xs">{props.testiUsers}</p>
      </div>
    </div>
  );
}
