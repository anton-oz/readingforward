import Image from "next/image";
import { LearnMoreButton } from "@/components/LearnMoreButton";

export default function Home() {
  const dev = process.env.NEXT_PUBLIC_DEV;

  const bookFlipImgDimensions = 300;
  const placeholderDimensions = 300;

  const images = [];

  for (let i = 1; i < 6; i++) {
    if (dev) {
      images.push(`/tutorPhotos/${i}-tutor-photo.jpg`);
    } else {
      images.push(`/readingforward/tutorPhotos/${i}-tutor-photo.jpg`);
    }
  }

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
      <div className="flex-1 flex bg-blue-50 h-full overflow-hidden">
        {images.map((item, i) => (
          <div className="flex-shrink-0 relative w-4/5 md:w-3/12 h-full  animate-scroll">
            <Image
              key={i}
              src={item}
              fill
              alt="placeholder image"
              unoptimized={true}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
