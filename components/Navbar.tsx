import Link from "next/link";
import React from "react";

type Props = {};

export default function c({}: Props) {
  return (
    <div className="w-full p-4 md:py-4 md:px-8 flex justify-between text-sm gap-4">
      <div className="flex items-center gap-4">
        <h1 className="mr-2">
          <Link href="/" className="text-lg font-bold">
            A
          </Link>
        </h1>
        <Link href="/explore" className="underline hover:no-underline">
          Explore
        </Link>
        <Link href="/create" className="underline hover:no-underline">
          Create
        </Link>
      </div>
    </div>
  );
}
