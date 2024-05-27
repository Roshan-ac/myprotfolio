import { MailCheck, Menu } from "lucide-react"

const RightMenu = () => {
  return (
    <div className=" flex items-center gap-6 px-4">
        <div><MailCheck className=" text-green-500 hover:text-yellow-300 cursor-pointer ease-in-out duration-500 transition-all" /></div>
        <Menu className="block md:hidden cursor-pointer" />
    </div>
  )
}

export default RightMenu