import React from "react";
import Header from "./Header";
import { PropsWithChildren } from "react";
import Player from "./Player";

export default function Content({ children }: PropsWithChildren) {
  return (
    <div className="w-full mb-16">
      <Header />
      {children}
      <Player />
    </div>
  );
}
