import FaqAccordion from "@/components/FaqAccordion";

export default function Faq() {
  return (
    <section className="h-full w-full text-center flex justify-center bg-white overflow-none">
      <div className="pb-20 max-w-full md:w-[55%]">
        <FaqAccordion />
      </div>
    </section>
  );
}
