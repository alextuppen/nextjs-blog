import { Section } from "@layout";
import { Experience } from "./Experience/Experience";
import experiences from "./experiences";

export const Home = () => (
  <Section>
    {experiences.map((experience) => (
      <Experience experience={experience} />
    ))}
  </Section>
);
