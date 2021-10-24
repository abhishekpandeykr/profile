import Content from "../components/content";
import { ContactMe } from "../components/ContactMe";

export default function Home() {
  return (
    <div>
      <Content />
      <div className="gradient"></div>
      <ContactMe />
      <div className="gradient"></div>
    </div>
  );
}
