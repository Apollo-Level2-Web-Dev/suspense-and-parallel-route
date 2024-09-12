import { delay } from "@/utils/delay";

export default async function ComponentTwo() {
  await delay(3000);
  return (
    <div className="border-2 border-gray-500 rounded-md size-[500px] p-2">
      <h1 className="text-xl"> This is Component Two - STATIC COMPONENT</h1>
    </div>
  );
}
