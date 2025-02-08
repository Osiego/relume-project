"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your most pressing questions about our coding
            subscription service.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is Bytemagick?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Bytemagick is a subscription service designed to help you learn
              coding effectively. With an AI tutor and an in-browser IDE, you
              can practice your skills anytime. Our platform makes coding
              accessible and engaging for everyone.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Who can use it?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Bytemagick is suitable for beginners and experienced coders alike.
              Whether you're starting from scratch or looking to enhance your
              skills, our platform caters to all levels. Join a community of
              learners and unleash your creativity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              How does it work?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Simply sign up for a subscription, and you'll gain access to
              interactive lessons and coding challenges. Our AI tutor will guide
              you through the learning process, providing personalized feedback.
              You can code directly in your browser, making it convenient and
              efficient.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              What programming languages offered?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We offer a variety of programming languages, including Python,
              JavaScript, and HTML/CSS. Each course is designed to build your
              skills progressively. Explore different languages to find the one
              that excites you the most.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Is there a trial?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, we offer a free trial for new users. This allows you to
              explore our platform and experience the learning process
              firsthand. Sign up today to start your coding journey risk-free.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
