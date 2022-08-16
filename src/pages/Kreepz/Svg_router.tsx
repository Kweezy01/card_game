import { string } from "zod"
import * as Kreep from "./Kreep_svgs"

type svg_data = {
   name: string
};
const Svg_router = ({
   name
}: svg_data) => {
   if (name === "Flamer") return <Kreep.default.Flamer />
   if (name === "Bubbles") return <Kreep.default.Bubbles />
   if (name === "Shadow") return <Kreep.default.Bubbles />
   return <h1>No charachter found</h1>
}

export default Svg_router;