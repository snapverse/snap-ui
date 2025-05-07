import Accordion from "@repo/ui/accordion";

export default function Home() {
  return (
    <div>
      <Accordion.Root>
        <Accordion.Item>
          Hola Mundo
        </Accordion.Item>
        <Accordion.Item>
          Chao Mundo
        </Accordion.Item>
      </Accordion.Root>

    </div>
  );
}
