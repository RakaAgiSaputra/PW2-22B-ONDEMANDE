import Image from "next/image";
import { text } from "stream/consumers";
interface PropsPage {
  icon: string;
  text: string;
}

export function ButtonJadwal(props: PropsPage) {
  return (
    <div
      className={`flex justify-start w-1/2 items-center rounded-lg py-6`}
    >
      {/* // {props.words} */}
      <div className="w-1/3">
        <Image src={props.icon} width={200} height={200} alt="ic_wa" className="w-24" />
      </div>
      <div>
        <h1 className="w-3/4">{props.text}</h1>
      </div>
    </div>
  );
}
