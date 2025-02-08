"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing16() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-xl">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Pricing</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Subscription Plans
          </h2>
          <p className="md:text-md">
            Choose the plan that fits your learning needs.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <div className="h-full border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                Basic Plan
              </h2>
              <p>Ideal for beginners</p>
              <div className="my-8 h-px w-full bg-border-primary" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $19/mo
              </h3>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full bg-border-primary" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Access to AI tutor</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>In-browser IDE included</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Beginner-friendly resources</p>
                </div>
              </div>
            </div>
            <div className="h-full border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                Business Plan
              </h2>
              <p>For teams and professionals</p>
              <div className="my-8 h-px w-full bg-border-primary" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $29/mo
              </h3>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full bg-border-primary" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Advanced coding tutorials</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Priority support available</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Team collaboration tools</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Customizable learning paths</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Performance tracking features</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <div className="h-full border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                Basic Plan
              </h2>
              <p>Ideal for beginners</p>
              <div className="my-8 h-px w-full bg-border-primary" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $180/yr
              </h3>
              <p className="mt-2 font-medium">Save 20% with the annual plan</p>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full bg-border-primary" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Access to AI tutor</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>In-browser IDE included</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Beginner-friendly resources</p>
                </div>
              </div>
            </div>
            <div className="h-full border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                Business Plan
              </h2>
              <p>For teams and professionals</p>
              <div className="my-8 h-px w-full bg-border-primary" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $280/yr
              </h3>
              <p className="mt-2 font-medium">Save 20% with the annual plan</p>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full bg-border-primary" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Advanced coding tutorials</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Priority support available</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Team collaboration tools</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Customizable learning paths</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Performance tracking features</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
