"use client";

import React from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { PlusIcon } from "@radix-ui/react-icons";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

type Props = {
  boardId: string;
};

type FormSchema = {
  note: string;
};

export default function NewNote({ boardId }: Props) {
  const supabase = createClient();
  const router = useRouter();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>();

  const onSubmit: SubmitHandler<FormSchema> = async ({ note }) => {
    if (!note || note.length > 500) {
      return;
    }

    const { data, error } = await supabase.from("notes").insert({
      title: note,
      boardId,
    });

    if (error) {
      console.error(error);
      return;
    }

    reset();
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger className="p-4 rounded-full border hover:bg-white/5">
        <PlusIcon />
        <span className="sr-only">Add new note</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <DialogTitle className="text-black">Add a new note</DialogTitle>
            <DialogDescription>
              <div className="max-w-xl">
                <textarea
                  {...register("note", {
                    required: true,
                  })}
                  placeholder="Write your message"
                  rows={5}
                  className="w-full h-full focus:outline-none border p-2 rounded"
                />
              </div>
            </DialogDescription>
            <Button type="submit">Add note</Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
