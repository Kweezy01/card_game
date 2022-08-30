import Flamer from "./Flamer_svg"
import Bubbles from "./Bubbles_svg"
import Shadow from "./Shadow_svg"
import Rocky from "./Rocky_svg"

type svg_data = {
   name: string
};

const Svg_router = ({
   name
}: svg_data) => {
   switch(name) {
      case "Flamer": return <Flamer/>;
      case "Bubbles": return <Bubbles/>;
      case "Shadow": return <Shadow/>;
      case "Rocky": return <Rocky/>;
      //case "Whisp": return <Whisp/>;
      //case "Bud-ly": return <Bud-ly/>;
      //case "Exo-bug": return <Exo-bug/>;
      //case "Hound": return <Hound/>;
      //case "Magnus": return <Magnus/>;
      //case "Nimbus": return <Nimbus/>;
      default: return <h1 className="text-red-900" >No SVG with name `{name}` found</h1>;
   }
}

export default Svg_router;
