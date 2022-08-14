import { useState, useEffect } from "react";

import Head from "next/head";
import { trpc } from "../utils/trpc";

type TemplateCardProps = {
  id: string,
  name: string;
  description: string;
};

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
      {cards.map(item => {
        return (
          <TemplateCard key={getKey()} id={item.id} name={item.name} description={item.description} />
        )
      })}
    </div>
  );
};

const TemplateCard = ({
  id,
  name,
  description,
}: TemplateCardProps) => {
  return (
    <section className="bg-black flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105 m-5">
      <h2 className="text-lg text-blue-900">{id}</h2>
      <p className="text-sm text-white">{name}</p>
      <p className="text-sm text-red-900">{description}</p>
    </section>
  );
};

export default Home;
