import Image from "next/image";
import { LearnMoreButton } from "@/components/LearnMoreButton";

export default function Home() {
  const dev = process.env.NEXT_PUBLIC_DEV;

  const bookFlipImgDimensions = 300;
  const personalImgDimesnions = 250;

  return (
    <section className="h-full w-full flex flex-col text-center bg-white">
      <div className="h-min w-full p-4 bg-darkBlueski grid auto-rows-min items-center place-items-center border-b-2 border-b-zinc-800">
        <p className="h-min w-full md:w-[70%] font-bold leading-normal text-4xl text-white">
          Advancing students on their literacy journey through personalized
          instruction and unwavering support
        </p>
        <div className="w-full h-fit flex justify-center items-start py-3">
          <LearnMoreButton />
        </div>
      </div>
      <div className="flex-1 grid md:grid-cols-[auto,1fr] items-center gap-10 p-6 bg-blue-50">
        {/* <div className=" flex flex-col items-center bg-white p-4 rounded-md border border-zinc-600">
          <Image
            src={dev ? "/bookflip3.gif" : "/readingforward/bookflip3.gif"}
            width={bookFlipImgDimensions}
            height={bookFlipImgDimensions}
            alt="book page flipping gif"
            unoptimized={true}
            className="mb-2 h-auto"
          />
          <p className="font-medium text-4xl">Turning Pages, Igniting Minds</p>
        </div>
        <div className="hidden h-[305.62px] w-full p-4 md:flex items-center justify-start bg-white border-zinc-600 border rounded-md">
          <Image
            src="https://placehold.co/200"
            width={personalImgDimesnions}
            height={personalImgDimesnions}
            alt="Image of Nativida"
            unoptimized={true}
            className="rounded-md"
          />
          <p className="h-full p-4">Hi! I'm Nativida</p>
        </div> */}
      </div>
    </section>
  );
}
