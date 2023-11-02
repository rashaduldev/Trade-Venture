"use client";
import { useState } from "react";
import Accordion from "./Accordion";

const AccordionContainer = () => {
  const [open, setOpen] = useState(0);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  const faqData = [
    {
      title: "What services does TanahAir Offer?",
      desc: "TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.",
    },
    {
      title:
        "Why should i choose a Design studio like TanahAir over full-service agency?",
      desc: "Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer",
    },
    {
      title:
        "How does TanahAir create website content without knowing our Business plan?",
      desc: "Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer",
    },
    {
      title: "What often will results be reported?",
      desc: "Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer",
    },
    {
      title: "What will be delivered? And When?",
      desc: "Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer",
    },
    {
      title:
        "How Quickly will i start seeing result after working with TanahAir?",
      desc: "Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer",
    },
  ];
  return (
    <div className="w-full  lg:mt-10 mt-5">
      {faqData.map((data, index) => (
        <Accordion
          key={index}
          open={index === open}
          title={data.title}
          desc={data.desc}
          toggle={() => toggle(index)}
        />
      ))}
    </div>
  );
};

export default AccordionContainer;
