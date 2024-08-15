import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">
        Hello there! I&apos;m Lalman Thakur
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer with a passion for{" "}
        <Highlight>building products</Highlight> and web apps that solve
        real-world problems.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;ve been working in the field for <Highlight>2 years</Highlight>,
        gaining experience in both frontend and backend development, deploying
        applications using cloud platforms like GCP and AWS, and utilizing
        Docker for containerization.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m currently in my final year of a bachelor&apos;s program, and
        while I&apos;m still learning, I&apos;m dedicated to mastering the
        skills needed to create scalable, performance-optimized, and visually
        appealing web apps.
      </Paragraph>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
