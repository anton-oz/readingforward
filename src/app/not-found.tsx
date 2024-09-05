import Link from "next/link";

export default function notFound() {
  return (
    <section className="h-full w-full grid items-center place-items-center">
      <div className="text-center">
        <h1 className="font-bold text-xl">404: Not Found</h1>
        <hr className="border-blueski border" />
        <p className="my-4">Could not find requested page.</p>
        <Link
          href="/"
          className="bg-darkBlueski text-white p-2 border border-white rounded-md hover:bg-slate-100 hover:border-black hover:text-blueski transition-all duration-300"
        >
          Home
        </Link>
      </div>
    </section>
  );
}
