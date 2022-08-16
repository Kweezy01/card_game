import { string } from "zod"
import Flamer from "./Flamer_svg"
import Bubbles from "./Bubbles_svg"

type svg_data = {
   name: string
};
const Svg_router = ({
   name
}: svg_data) => {
   if (name === "Flamer") return <Flamer />
   if (name === "Bubbles") return <Bubbles />
   if (name === "Shadow") return <Bubbles />
   return <h1 className="text-red-900" >No SVG with name `{name}` found</h1>
}

export default Svg_router;