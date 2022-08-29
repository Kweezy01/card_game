import { trpc } from "../utils/trpc";
import Card_default from "./Kreepz/Card_default";

const getCards = () => {
  const snapshot = trpc.useQuery(["example.all_cards"])
  return snapshot.data
}

const Home = () => {
  const cards = getCards()
  if (!cards) {
    return "Loading..."
  }
  let KEY = "Card-id"
  const getKey = () => {
    KEY = KEY + "+"
    return KEY
  }
  return (
    <div className="p-8">
      <ul id="list">
        {cards.map(item => {
          return (
            <Card_default key={getKey()} id={item.id} name={item.name} description={item.description} />
          )
        })}
      </ul>
    </div>
  );
};

export default Home;


