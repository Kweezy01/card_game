import Flamer from "./Flamer_svg"
import Bubbles from "./Bubbles_svg"
import Shadow from "./Shadow_svg"

type svg_data = {
   name: string
};
const Svg_router = ({
   name
}: svg_data) => {
   if (name === "Flamer") return <Flamer />
   else if (name === "Bubbles") return <Bubbles />
   else if (name === "Shadow") return <Shadow />
   return <h1 className="text-red-900" >No SVG with name `{name}` found</h1>
}

export default Svg_router;