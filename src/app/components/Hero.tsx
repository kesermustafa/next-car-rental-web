import Image from "next/image";
import { models } from "../utils/contants";

const Hero = () => {
  return (
      <div className="h-[100vh] bg-center bg-cover bg-no-repeat grid place-items-center p-5
		bg-black text-white
		bg-[linear-gradient(#00000084,#00000084),url('../assets/images/bg-car1.jpg')]
		sm:bg-[linear-gradient(#00000084,#00000084),url('../assets/images/bg-car2.jpg')]
		lg:bg-[linear-gradient(#00000084,#00000084),url('../assets/images/bg.jpg')]">
        <div className="text-center flex flex-col gap-8">
          <p className={"text-[clamp(1rem,3vw,2rem)] "}>Yakınındaki kiralık araçları keşfet</p>
          
          <h1 className=" font-bold text-amber-400 text-[clamp(1.5rem,4.5vw,5rem)] ">
            Kendin İçin Mükemmel Aracı Bul
          </h1>
          
          <p className={"text-[clamp(1rem,3vw,2rem)] "}>Kendine uygun modeli belirle</p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            {models.map((model, key) => (
                <button
                    key={key}
                    className="px-5 py-1 rounded-full bg-gray-100/25 transition hover:bg-gray-500/25 flex gap-3 items-center"
                >
                  <Image src={model.icon} alt={model.name} />
                  {model.name}
                </button>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Hero;