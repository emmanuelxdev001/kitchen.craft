import { FC } from "react";

interface iProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sider: FC<iProps> = ({ toggle, setToggle }) => {
  console.log("reading from Sider: ", toggle);
  return (
    <div className="h-full w-full p-4">
      <div className="flex justify-between items-center">
        <p>Sider</p>
        <button
          className="px-4 py-2 bg-blue-950 text-white rounded-md"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "Open" : "Close"}
        </button>
      </div>
    </div>
  );
};

export default Sider;
