import { Search } from "lucide-react";
import { Button } from "../ui/button";

export function SearchFilter() {
  return (
    <div className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border-none lg:border rounded-full lg:shadow-lg">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between ">
          <div className="cursor-pointer h-[48px] lg:h-[64px]  px-8 flex justify-center flex-col rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Where</p>
            <p className="text-sm ">Wanted location</p>
          </div>

          <div className="cursor-pointer h-[48px] lg:h-[64px]  px-8 flex justify-center flex-col rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check in</p>
            <p className="text-sm ">Add dates</p>
          </div>

          <div className="cursor-pointer h-[48px] lg:h-[64px]  px-8 flex justify-center flex-col rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check out</p>
            <p className="text-sm ">Add dates</p>
          </div>

          <div className="cursor-pointer h-[48px] lg:h-[64px]  px-8 flex justify-center flex-col rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm ">Add guests</p>
          </div>
        </div>
      </div>

      <div className="cursor-pointer px-2">
        <Button
          size={"icon"}
          className="rounded-full bg-primary text-white p-2 "
        >
          <Search />
        </Button>
      </div>
    </div>
  );
}
