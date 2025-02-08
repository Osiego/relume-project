"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Here are some common questions about our coding course to help you
            get started.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is the course?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              This course teaches you the fundamentals of coding through
              interactive lessons. You'll learn to harness the power of AI and
              an in-browser IDE. Our unique approach combines creativity with
              technical skills to bring your ideas to life.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Who is the tutor?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Your tutor is an advanced AI designed to guide you through coding
              challenges. It provides personalized feedback and support tailored
              to your learning pace. With this innovative approach, you can
              learn coding in a fun and engaging way.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What will I learn?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              You'll explore various programming languages and concepts,
              including syntax, algorithms, and data structures. The course
              emphasizes practical application through projects that spark your
              creativity. By the end, you'll be equipped to tackle real-world
              coding challenges.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              How long is it?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The course is designed to be flexible, allowing you to learn at
              your own pace. Typically, it spans over several weeks, depending
              on your commitment. You can revisit lessons and materials anytime,
              ensuring a thorough understanding.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Is there a certificate?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, upon completion of the course, you will receive a
              certificate. This certificate validates your skills and knowledge
              in coding. It's a great addition to your resume or portfolio.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">Reach out to us anytime for assistance.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
