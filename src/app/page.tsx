import Image from "next/image";

export default function Home() {
  const firstitem: string = "";

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
        <p className="font-bold text-2xl">Turning Pages, Igniting Minds</p>
      </div>
      <div className="grid grid-cols-3 min-h-full max-h-full w-full mt-8">
        <div className="w-full h-full grid items-start place-items-center">
          <h2>What I Offer:</h2>
        </div>
        <div className="w-full h-full grid items-start place-items-center">
          <h2>What I Offer:</h2>
        </div>
        <div className="w-full h-full grid items-start place-items-center">
          <h2>What I Offer:</h2>
        </div>
      </div>
    </section>
  );
}
