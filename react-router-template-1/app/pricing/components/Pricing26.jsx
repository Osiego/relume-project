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

export function Pricing26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Choose</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Pricing Plans
          </h1>
          <p className="md:text-md">
            Find the perfect plan to ignite your coding journey.
          </p>
        </div>
        <div className="w-full">
          <Tabs defaultValue="monthly">
            <TabsList className="mx-auto mb-12 flex w-fit md:mb-20">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <div className="sticky top-0 grid grid-cols-3 border-b border-border-primary bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <div className="hidden md:block" />
                <div className="flex h-full flex-col justify-between border-0 border-border-primary px-2 py-4 sm:px-4 sm:py-6 md:border-l lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Basic
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $19
                      </p>
                      <p className="inline-block font-bold">
                        <span>Per month</span>
                      </p>
                    </div>
                    <p>Ideal for beginners</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Get started"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between border-l border-border-primary px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Business
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $29
                      </p>
                      <p className="inline-block font-bold">
                        <span>Per month</span>
                      </p>
                    </div>
                    <p>For growing teams</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Get started"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between border-l border-border-primary px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Enterprise
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $49
                      </p>
                      <p className="inline-block font-bold">
                        <span>Per month</span>
                      </p>
                    </div>
                    <p>For large organizations</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Get started"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border-b border-border-primary py-5">
                <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                  Feature Overview
                </h3>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Access to AI tutor
                </p>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  10
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  25
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Unlimited
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Interactive coding exercises
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Personalized learning paths
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Community support access
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Advanced analytics tools
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="border-b border-border-primary py-5">
                <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                  Feature Highlights
                </h3>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Customizable learning modules
                </p>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  10
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  25
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Unlimited
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Real-time code collaboration
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Flexible scheduling options
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Monthly progress reports
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Expert-led workshops
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="border-b border-border-primary py-5">
                <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                  Additional Features
                </h3>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Access to premium content
                </p>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  10
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  25
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Unlimited
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Dedicated account manager
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Priority support services
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Custom branding options
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Enhanced security features
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="sticky top-0 grid grid-cols-3 border-b border-border-primary bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <div className="hidden md:block" />
                <div className="flex h-full flex-col justify-between border-0 border-border-primary px-2 py-4 sm:px-4 sm:py-6 md:border-l lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Basic
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $180
                      </p>
                      <p className="inline-block font-bold">
                        <span>Per year (save 20%)</span>
                      </p>
                    </div>
                    <p>Best value for learners</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Get started"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between border-l border-border-primary px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Business
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $280
                      </p>
                      <p className="inline-block font-bold">
                        <span>Per year (save 20%)</span>
                      </p>
                    </div>
                    <p>Great for teams</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Get started"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between border-l border-border-primary px-2 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Enterprise
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $480
                      </p>
                      <p className="inline-block font-bold">
                        <span>Per year (save 20%)</span>
                      </p>
                    </div>
                    <p>For large organizations</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Get started"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border-b border-border-primary py-5">
                <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                  Feature Overview
                </h3>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Access to AI tutor
                </p>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  10
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  25
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Unlimited
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Interactive coding exercises
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Personalized learning paths
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Community support access
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Advanced analytics tools
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="border-b border-border-primary py-5">
                <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                  Feature Highlights
                </h3>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Customizable learning modules
                </p>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  10
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  25
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Unlimited
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Real-time code collaboration
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Flexible scheduling options
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Monthly progress reports
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Expert-led workshops
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="border-b border-border-primary py-5">
                <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                  Additional Features
                </h3>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Access to premium content
                </p>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  10
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  25
                </div>
                <div className="flex items-center justify-center border-0 border-border-primary px-4 py-4 text-center font-semibold md:border-l md:px-6">
                  Unlimited
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Dedicated account manager
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Priority support services
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Custom branding options
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 border-b border-border-primary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6">
                  Enhanced security features
                </p>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center border-l border-border-primary px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
