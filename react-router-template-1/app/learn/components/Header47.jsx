"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Transform</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Unleash Your Potential
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              At ByteMagick, we empower you to master the art of coding through
              our interactive AI tutor and in-browser IDE. Dive into the world
              of esoteric programming languages and watch your imagination come
              to life.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Join">Join</Button>
              <Button title="Explore" variant="secondary">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
