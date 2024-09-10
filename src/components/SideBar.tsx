"use client";
import { cn } from "@/lib/utils";
import { CircleUserRound, House, Video } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname() || "";
  return (
    <div className="bg-background h-full">
      <div className="lg:hidden">
        <nav className="p-3 grid gap-2 text-lg font-medium">
          <Link
            href="/home"
            className={cn(
              "rounded-sm p-1 flex items-center gap-2 text-lg font-semibold transition-all hover:bg-zinc-300",
              ["/", "/home"].includes(pathname) ? "bg-zinc-600 text-white" : ""
            )}
          >
            <div className="flex gap-1 w-full items-center">
              <House className="h-6 w-6" />
            </div>
          </Link>
          <Link
            href="/subscriptions"
            className=" rounded-sm p-1 flex items-center gap-2 text-lg font-semibold transition-all hover:bg-zinc-300"
          >
            <div className="flex gap-1 w-full items-center">
              <Video className="h-6 w-6" />
            </div>
          </Link>
          <Link
            href="/me/channel"
            className="rounded-sm p-1 flex items-center gap-2 text-lg font-semibold transition-all hover:bg-zinc-300"
          >
            <div className="flex gap-1 w-full items-center">
              <CircleUserRound className="h-6 w-6" />
            </div>
          </Link>
        </nav>
      </div>

      <div className={cn("hidden", "lg:flex flex-col")}>
        <nav className="p-3 grid gap-2 text-lg font-medium text-black">
          <Link
            href="/"
            className={cn(
              "rounded-sm p-1 flex items-center gap-2 text-lg font-semibold transition-all hover:bg-zinc-300",
              ["/", "/home"].includes(pathname)
                ? "bg-zinc-600 text-white hover:bg-zinc-800"
                : ""
            )}
          >
            <div className="flex gap-1 w-full items-center">
              <House className="h-6 w-6" />
              <span className="font-normal">Home</span>
            </div>
          </Link>
          <Link
            href="/subscriptions"
            className=" rounded-sm p-1 flex items-center gap-2 text-lg font-semibold transition-all hover:bg-zinc-300"
          >
            <div className="flex gap-1 w-full items-center">
              <Video className="h-6 w-6" />

              <span className="font-normal">Subscriptions</span>
            </div>
          </Link>
          <Link
            href="/me/channel"
            className="rounded-sm p-1 flex items-center gap-2 text-lg font-semibold transition-all hover:bg-zinc-300"
          >
            <div className="flex gap-1 w-full items-center">
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
