import { delay } from "@/utils/delay";

export default async function page() {
  await delay(2000);

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5 ">
      <div className="bg-blue-300 h-[400px] w-full flex justify-center items-center">
        <h1 className="text-2xl text-black font-semibold"> Profile </h1>
      </div>
    </div>
  );
}
