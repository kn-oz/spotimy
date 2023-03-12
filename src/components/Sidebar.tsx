import React from "react";
import Avatar from "./Avatar";
import Navigation from "./Navigation";

export default function Sidebar() {
  return (
    <div className="bg-indigo-700">
      <div className="avatar-wrapper mt-16 mb-24 flex justify-center">
        <Avatar />
      </div>
      <div className="navigation-wrapper flex justify-center">
        <Navigation />
      </div>
    </div>
  );
}
