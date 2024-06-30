"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";

type FormSchema = {
  handle: string;
};

export function Form({}) {
  const supabase = createClient();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>();

  const onSubmit: SubmitHandler<FormSchema> = async ({ handle }) => {
    const { data, error } = await supabase.from("boards").insert([
      {
        handle: handle,
      },
    ]);

    if (error) {
      console.error(error);
      return;
    }

    router.push(`/n/${handle}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 flex flex-col items-center flex-grow gap-6 w-full mx-auto"
    >
      <input
        {...register("handle", {
          required: true,
        })}
        type="text"
        name="handle"
        placeholder="Handle"
        className="px-8 py-4 rounded-full text-black border max-w-2xl focus:outline-none text-sm"
      />
      <Button type="submit" variant={"outline"} className="w-max text-black">
        Create new board
      </Button>
    </form>
  );
}
