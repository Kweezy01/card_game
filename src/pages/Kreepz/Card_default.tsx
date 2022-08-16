import Svg_router from "./Svg_router"

type CardProps = {
  id: string,
  name: string;
  description: string;
};
const Flamer_card = ({
  id,
  name,
  description,
}: CardProps) => {

  return (
    <li>
      <section className="cards w-{10} bg-black p-2 m-5 rounded-xl border-2 border-blue-400 duration-500 motion-safe:hover:scale-110">

        <Svg_router name={name}/>

        <h2 className="text-lg text-blue-900">{id}</h2>
        <p className="text-sm text-white">{name}</p>
        <p className="text-sm text-red-900">{description}</p>
      </section >
    </li>
  );
};

export default Flamer_card;