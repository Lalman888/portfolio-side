"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import ReactMarkdown from "react-markdown";

export const WorkHistory = () => {
  return (
    <div>
      {timeline.map((item, index) => (
        <div
          className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-20 relative"
          key={`timeline-${index}`}
        >
          <Paragraph className="w-52">{item.date}</Paragraph>
          <div>
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg text-emerald-500"
            >
              {item.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">
              {item.title}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">
              {item.description}
            </Paragraph>

            <div>
              {item.responsibilities.map((responsibility, idx) => (
                <Step key={idx}>
                  <ReactMarkdown>{responsibility}</ReactMarkdown>
                </Step>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="h-3 w-4 mt-1 text-neutral-300" />
      <div className="text-sm md:text-sm lg:text-sm">{children}</div>
    </div>
  );
};
