import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return(
    <div className="w-full h-screen overflow-x-hidden flex flex-col background relative items-center">
      <h1 className=" font-bold absolute bg-white rounded-lg w-11/12 text-center py-2 px-10 text-3xl mt-[40px]">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[120px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  ) ;
}
