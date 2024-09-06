import Image from "next/image";

export default function Home() {
  const dev = process.env.NEXT_PUBLIC_DEV;

  return (
    <section className="h-full w-full grid grid-rows-[auto,1fr] items-center place-items-center text-center bg-white">
      <div className="w-[33%] grid place-items-center mt-6 pb-4 border-b-[1.5px] border-b-black">
        <Image
          src={dev ? "/bookflip3.gif" : "/readingforward/book-flip.gif"}
          width={200}
          height={200}
          alt="book page flipping gif"
          unoptimized={true}
          className="mb-2"
        />
        <p className="font-medium text-2xl">Turning Pages, Igniting Minds</p>
      </div>
      <div className="grid grid-cols-3 min-h-full max-h-full w-full mt-10 pt-10">
        <div className="w-full h-full flex flex-col items-center justify-start"></div>
        <div className="w-full h-full grid items-start place-items-center">
          <p className="w-[66%] text-4xl">
            Advancing students on their literacy journey through personalized
            instruction and unwavering support
          </p>
        </div>
        <div className="w-full h-full grid items-start place-items-center"></div>
      </div>
    </section>
  );
}
