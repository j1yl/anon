import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Page() {
  const supabase = createClient();
  const data = await supabase.from("boards").select();

  return (
    <div className="flex flex-col w-full gap-6 md:my-16">
      <h1 className="text-4xl font-bold">Explore</h1>
      <ul className="grid grid-cols-1 md:grid-cols-4 w-full place-items-center gap-4">
        {data.data &&
          data.data.map((a) => (
            <Link
              key={a.id}
              href={`/n/${a.handle}`}
              className="rounded border hover:bg-white/5 w-full h-full p-4"
            >
              @{a.handle}
            </Link>
          ))}
      </ul>
    </div>
  );
}
