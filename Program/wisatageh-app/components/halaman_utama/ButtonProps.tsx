interface PropsPage {
  words: string;
  bg: string;
  ukuran: string;
}

export function ButtonProps(props: PropsPage) {
  return (
    <button
      className={`${props.ukuran} font-bold py-6 px-6 border-primaryColor border-2 rounded-lg ${props.bg}`}
    >
      {props.words}
    </button>
  );
}
