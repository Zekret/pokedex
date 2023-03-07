export const Stats = ({ pokemon }) => {
  return (
    <div style={{ margin: "0.5rem 0" }} className="w-full flex justify-evenly">
      <div className="flex flex-col items-center gap-2">
        <span>{pokemon?.weight}</span>
        <p>Weight</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span>{pokemon?.height} </span>
        <p>Height</p>
      </div>
    </div>
  );
};
