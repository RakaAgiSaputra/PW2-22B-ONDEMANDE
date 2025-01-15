interface props {
    titleProps: string;
    desc: string
}

export function InterestinWisataUnit(
    props: props
) {
  return (
    <div>
      <div className="px-2">
        <p>__________________________</p>
        <h1 className="text-xl font-bold">{props.titleProps}</h1>
        <p>
         {props.desc}
        </p>
      </div>
    </div>
  );
}
