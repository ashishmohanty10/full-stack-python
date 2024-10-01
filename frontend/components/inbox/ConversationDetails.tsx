"use client";

import CustomButton from "../form/CustomButton";
import { Input } from "../ui/input";

export function ConversationDetails() {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4 ">
        <div className="w-[80%] px-6 py-4 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">John Doe</p>

          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="w-[80%] ml-[20%] bg-blue-200 px-6 py-4 rounded-xl ">
          <p className="font-bol text-gray-500">fklskf</p>

          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="mt-4 py-6 px-6 flex items-center gap-4">
        <Input placeholder="Type your " className="py-4" />

        <CustomButton label="Send" onClick={() => {}} className="w-[100px]" />
      </div>
    </>
  );
}
