"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your most pressing questions about our coding
            subscription service and AI tutor.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is Bytemagick?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Bytemagick is a unique subscription service designed to teach
              coding through an AI tutor. It offers an in-browser IDE that
              allows you to practice coding in real-time. With Bytemagick, you
              can explore the esoteric art of coding and bring your imaginative
              projects to life.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How does it work?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Once you sign up, you'll gain access to a personalized AI tutor
              that guides you through coding lessons. The in-browser IDE allows
              you to write and test code instantly, making learning interactive
              and engaging. You can learn at your own pace, exploring various
              coding languages and techniques.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Is it suitable for beginners?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! Bytemagick is designed for learners of all levels,
              including complete beginners. The AI tutor adapts to your skill
              level, ensuring you receive the right guidance as you progress.
              With clear explanations and hands-on practice, you'll build a
              solid foundation in coding.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              What coding languages are offered?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Bytemagick covers a variety of programming languages, including
              Python, JavaScript, and HTML/CSS. Each language is presented
              through engaging lessons that incorporate practical exercises.
              This diverse curriculum allows you to choose the language that
              best fits your interests and goals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I cancel anytime?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can cancel your subscription at any time without any
              penalties. We believe in providing flexibility to our users,
              allowing you to focus on your learning journey. Simply follow the
              cancellation instructions in your account settings.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help!</p>
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
