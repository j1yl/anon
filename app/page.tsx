import Link from "next/link";

export default async function Page() {
  return (
    <div className="my-auto w-full p-2 flex flex-col gap-4 items-center">
      <h1 className="text-4xl font-bold text-center">
        Write an anonymous note
      </h1>
      <Link
        href="/create"
        className="px-8 py-4 rounded-full w-max border hover:bg-white/5"
      >
        Start now
      </Link>
    </div>
  );
}
