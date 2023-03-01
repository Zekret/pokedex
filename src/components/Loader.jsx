import { Ring } from "@uiball/loaders";
export const Loader = () => {
  return (
    <div className="flex justify-center m-[200px]">
      <Ring size={40} lineWeight={5} speed={2} color="black" />
    </div>
  );
};
