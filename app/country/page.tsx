import Link from "next/link";

export default function CountryList() {
  return (
    <>
      <h1 className="text-5xl font-bold text-white text-center mx-auto my-4 px-6">
        Country List:
      </h1>

      <div className="flex gap-2">
        <button className="btn btn-primary inline-flex items-center justify-center px-4 py-2 text-center text-white bg-blue-500 hover:bg-blue-600 w-full h-10 rounded-md font-bold transition-all duration-200 ease-in-out">
          <Link href="/pakistan">Pakistan</Link>
        </button>

        <button className="btn btn-primary inline-flex items-center justify-center px-4 py-2 text-center text-white bg-blue-500 hover:bg-blue-600 w-full h-10 rounded-md font-bold transition-all duration-200 ease-in-out">
          <Link href="/iran">Iran</Link>
        </button>

        <button className="btn btn-primary inline-flex items-center justify-center px-4 py-2 text-center text-white bg-blue-500 hover:bg-blue-600 w-full h-10 rounded-md font-bold transition-all duration-200 ease-in-out">
          <Link href="/iraq">Iraq</Link>
        </button>

        <button className="btn btn-primary inline-flex items-center justify-center px-4 py-2 text-center text-white bg-blue-500 hover:bg-blue-600 w-full h-10 rounded-md font-bold transition-all duration-200 ease-in-out">
          <Link href="/turkey">Turkey</Link>
        </button>

        <button className="btn btn-primary inline-flex items-center justify-center px-4 py-2 text-center text-white bg-blue-500 hover:bg-blue-600 w-full h-10 rounded-md font-bold transition-all duration-200 ease-in-out">
          <Link href="/germany">Germany</Link>
        </button>
      </div>
    </>
  );
}
