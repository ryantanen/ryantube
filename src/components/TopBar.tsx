import React from "react";
import { Input } from "./ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UploadIcon } from "lucide-react";
import Link from "next/link";

function TopBar() {
  return (
    <div className="flex flex-row items-center justify-between bg-zinc-100 h-[70px] p-3">
      <div className="">
        <h1 className="bg-blue-400 text-white text-2xl font-bold rounded-3xl border border-black p-2 text-center ">
          RyanTube
        </h1>
      </div>
      <div>
        <Input placeholder="Search" className="md:w-[300px] lg:w-[600px]" />
      </div>
      <div className=" flex items-center md:gap-3 lg:gap-8 lg:mr-8">
        <DropdownMenu>
          <Button
            variant="secondary"
            size="icon"
            className="overflow-hidden rounded-full shadow-lg  hover:bg-zinc-200"
          >
            <Link href={"/"}>
              <UploadIcon />
            </Link>
          </Button>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full shadow-lg"
            >
              <Avatar className="h-full">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default TopBar;
