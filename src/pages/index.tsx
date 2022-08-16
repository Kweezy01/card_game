import { useState, useEffect } from "react";
import Head from "next/head";

import { trpc } from "../utils/trpc";

import Flamer_card from "./Kreepz/Flamer_card";


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
      <ul>
        {cards.map(item => {
          return (
            <Flamer_card key={getKey()} id={item.id} name={item.name} description={item.description} />
          )
        })}
      </ul>
    </div>
  );
};



export default Home;