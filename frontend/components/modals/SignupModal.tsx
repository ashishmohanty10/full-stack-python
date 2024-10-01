"use client";

import Modal from "./Modals";
import { Input } from "../ui/input";
import CustomButton from "../form/CustomButton";
import useSignupModal from "@/hooks/useSignupModal";

export function SignupModal() {
  const signupModal = useSignupModal();
  const content = (
    <>
      <form action="" className="space-y-4">
        <Input
          placeholder="your e-mail"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />
        <Input
          placeholder="your password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <Input
          placeholder="Repeat password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <p className="text-sm text-red-500 opacity-80">Error Message</p>
        <CustomButton label="Submit" onClick={() => console.log("clicked")} />
      </form>
    </>
  );
  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Log In"
      content={content}
    />
  );
}
