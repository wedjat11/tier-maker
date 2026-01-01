export default function SingleTier() {
  const setBackgroundColor = "bg-red-500";
  const baseStyle = " flex items-center justify-center";

  return (
    <div className="w-full bg-[#1A1A17] grid grid-cols-12 gap-2 h-24 border border-black">
      <div
        contentEditable
        className={` ${setBackgroundColor} flex items-center justify-center col-span-2 `}
      >
        <span className="text-xl">S</span>
      </div>
      <div className={`${baseStyle} col-span-8`}>first</div>
      <div className={`${baseStyle} col-span-2 bg-black`}>second</div>
    </div>
  );
}
