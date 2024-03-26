import { ThemeSwitcher } from "@/components/themeSwitcher";

export default function Navbar() {
    return (
        <div className="w-full top-5 md:top-[8rem] fixed z-[1001] flex justify-between items-center">
            <div className="text-sm md:text-5xl ml-5 md:ml-[8rem]">
                Logo
            </div>
            <div className="text-sm md:text-5xl mr-5 md:mr-[8rem]">
                <div>
                <ThemeSwitcher />
                </div>
            </div>
        </div>
    )
}