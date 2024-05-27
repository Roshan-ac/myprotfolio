import Link from "next/link";

const NavMenus = () => {
  return (
    <div className=" md:block sm:hidden hidden">
      <ul className="flex items-center gap-12 list-none text-sm font-semibold">
        <li className=" tracking-wider cursor-pointer hover:text-green-500 duration-500 ease-in-out transition-all">
          {"<Expeties/>"}
        </li>
        <li className=" cursor-pointer tracking-wider  hover:text-green-500 duration-500 ease-in-out transition-all">
          {"<About/>"}
        </li>
        <li className=" cursor-pointer tracking-wider  hover:text-green-500 duration-500 ease-in-out transition-all">
          {"<ReachMe/>"}
        </li>
        <li className=" cursor-pointer tracking-wider  hover:text-green-500 duration-500 ease-in-out transition-all">
          {"<Blogs/>"}
        </li>
      </ul>
    </div>
  );
};

export default NavMenus;
