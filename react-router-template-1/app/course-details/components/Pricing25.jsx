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

export function Pricing25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Learn</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Pricing Plans
          </h1>
          <p className="md:text-md">
            Choose a plan that fits your coding journey.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <div className="flex h-full flex-col justify-start border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                Basic Plan
              </h2>
              <p>Ideal for beginners</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $19/mo
              </h3>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
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
                  <p>Monthly coding challenges</p>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col justify-start border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                Business Plan
              </h2>
              <p>For teams and collaboration</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $29/mo
              </h3>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>All Basic features</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Team management tools</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Priority support access</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Customizable learning paths</p>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col justify-start border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                Enterprise Plan
              </h2>
              <p>For large organizations</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $49/mo
              </h3>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>All Business features</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Advanced analytics dashboard</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Dedicated account manager</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Onboarding assistance available</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Flexible billing options</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <div className="flex h-full flex-col justify-start border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                Basic Plan
              </h2>
              <p>Ideal for beginners</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $180/yr
              </h3>
              <p className="font-medium">Save 20%</p>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
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
                  <p>Monthly coding challenges</p>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col justify-start border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                Business Plan
              </h2>
              <p>For teams and collaboration</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $280/yr
              </h3>
              <p className="font-medium">Save 20%</p>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>All Basic features</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Team management tools</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Priority support access</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Customizable learning paths</p>
                </div>
              </div>
            </div>
            <div className="flex h-full flex-col justify-start border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                Enterprise Plan
              </h2>
              <p>For large organizations</p>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $480/yr
              </h3>
              <p className="font-medium">Save 20%</p>
              <div className="mt-6 md:mt-8">
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>All Business features</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Advanced analytics dashboard</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Dedicated account manager</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Onboarding assistance available</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Flexible billing options</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
