import Image from "next/image";

export function Categories() {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src={"/icon_beach.jpg"}
          alt="Category beech"
          width={20}
          height={20}
        />

        <span className="text-xs">Beach</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src={"/icon_beach.jpg"}
          alt="Category beech"
          width={20}
          height={20}
        />

        <span className="text-xs">Beach</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src={"/icon_beach.jpg"}
          alt="Category beech"
          width={20}
          height={20}
        />

        <span className="text-xs">Beach</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src={"/icon_beach.jpg"}
          alt="Category beech"
          width={20}
          height={20}
        />

        <span className="text-xs">Beach</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src={"/icon_beach.jpg"}
          alt="Category beech"
          width={20}
          height={20}
        />

        <span className="text-xs">Beach</span>
      </div>
    </div>
  );
}
