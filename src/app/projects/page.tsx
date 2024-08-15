import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Lalman Thakur",
  description:
  "Lalman Thakur is a full-stack developer with experience in both frontend and backend development. He has worked with cloud platforms like GCP and AWS and uses Docker for seamless deployment. Currently working part-time remotely with Mastermind Marketing, Inc. in Houston, USA, Lalman is passionate about creating responsive web applications."
}

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve been working on
      </Heading>

      <Products />
    </Container>
  );
}
