import Depoimentos from "../depoimentos/Depoimentos";


function Home() {

    return (
        <>

            <figure className="relative h-full w-full">
                <a href="https://www.youtube.com/watch?v=mPuO9LydtlA&t=5s" target="_blank">
                    <img
                        className="h-full w-full object-cover object-center opacity-90 brightness-90 contrast-75 saturate-150"
                        src="https://i.imgur.com/IXAj32g.png"
                        alt="hans chucrute"
                    />
                </a>

                <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-md border border-white bg-white/90 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                    <div className="font-bold text-xl ">
                        Dr. Hans Crucrute
                    </div>
                    <div className="font-thin italic">
                        - o seu gastro de confiança!
                    </div>
                </figcaption>
            </figure>



            <div className=" md:justify-items-stretch">
                <section id="depoimentos">
                    <h2 className="font-semibold text-xl md:text-lg sm:text-md p-8 ">
                        Confira o que alguns pacientes dizem sobre o Dr. Hans Chucrute:
                    </h2>
                    <Depoimentos />
                </section>

            </div>

        </>


    );
}

export default Home;