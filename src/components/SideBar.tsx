import { cn } from "@/lib/utils";
import { CircleUserRound, House, Video } from "lucide-react";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="bg-zinc-100 h-full">
      <div className="lg:hidden">
        <nav className="p-3 grid gap-2 text-lg font-medium">
          <Link
            href="#"
            className="rounded-sm p-1 flex items-center gap-2 text-lg font-semibold transition-all hover:bg-slate-300"
          >
            <div className="flex gap-1 w-full">
              <House className="h-6 w-6" />
            </div>
          </Link>
          <Link
            href="#"
            className=" rounded-sm p-1 flex items-center gap-2 text-lg font-semibold transition-all hover:bg-slate-300"
          >
            <div className="flex gap-1 w-full">
              <Video className="h-6 w-6" />
            </div>
          </Link>
          <Link
            href="#"
            className="rounded-sm p-1 flex items-center gap-2 text-lg font-semibold transition-all hover:bg-slate-300"
          >
            <div className="flex gap-1 w-full">
              <CircleUserRound className="h-6 w-6" />
            </div>
          </Link>
        </nav>
      </div>

      <div className={cn("hidden", "lg:flex flex-col")}>
        <nav className="p-3 grid gap-2 text-lg font-medium">
          <Link
            href="#"
            className="rounded-sm p-1 flex items-center gap-2 text-lg font-semibold transition-all hover:bg-slate-300"
          >
            <div className="flex gap-1 w-full">
              <House className="h-6 w-6" />

              <span className="font-normal">Home</span>
            </div>
          </Link>
          <Link
            href="#"
            className=" rounded-sm p-1 flex items-center gap-2 text-lg font-semibold transition-all hover:bg-slate-300"
          >
            <div className="flex gap-1 w-full">
              <Video className="h-6 w-6" />

              <span className="font-normal">Subscriptions</span>
            </div>
          </Link>
          <Link
            href="#"
            className="rounded-sm p-1 flex items-center gap-2 text-lg font-semibold transition-all hover:bg-slate-300"
          >
            <div className="flex gap-1 w-full">
              <CircleUserRound className="h-6 w-6" />

              <span className="font-normal">Your Channel</span>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
