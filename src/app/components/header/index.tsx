import Link from "next/link";

const Header = () => {
    return (
        <div className={`absolute text-white w-full`}>
            <div className="container flex justify-between items-center w-full">
                
                <h1 className="max-lg:hidden font-bold text-2xl whitespace-nowrap md:text-3xl">
                    <Link href="/"> <span className={"text-amber-500"}>NEXT</span> DRIVE</Link>
                </h1>
                
                <h1 className=" lg:hidden font-bold text-2xl whitespace-nowrap md:text-3xl">
                    <Link href="/"> <span className={"text-amber-500"}>N</span>D</Link>
                </h1>

                <nav className="text-sm  md:text-base md:font-semibold flex gap-3 md:gap-6">
                    <Link className={"hover:text-amber-500"} href="/">Keşfet</Link>
                    <Link className={"hover:text-amber-500"} href="/orders">Sipairşlerim</Link>
                    <Link className={"hover:text-amber-500"} href="/">Hakkımızda</Link>
                    <Link  href="/" className="max-md:hidden hover:text-amber-500">
                        Fiyatlandırma
                    </Link>
                </nav>

                <div className="flex gap-5">
                    <button className="max-lg:hidden">İletişim</button>
                    <button className="bg-amber-50 border border-amber-500 text-sm md:text-base text-black rounded-full px-4 py-1 text-nowrap transition hover:bg-amber-100">
                        Kaydol
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;