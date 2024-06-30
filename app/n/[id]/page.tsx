import NewNote from "@/components/NewNote";
import { createClient } from "@/utils/supabase/server";

export default async function Page({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: notes } = await supabase
    .from("notes")
    .select()
    .eq("boardId", params.id);

  return (
    <div className="flex flex-col w-full gap-6 md:my-16">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold">@{params.id}</h1>
        <NewNote boardId={params.id} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full place-items-center">
        {notes &&
          notes.map((note) => (
            <div key={note.id} className="w-full h-full rounded border p-4">
              <p className="break-all whitespace-normal">{note.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
