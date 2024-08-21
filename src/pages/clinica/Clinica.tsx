import './Clinica.css';

export function Clinica() {
    return (
        <>
            <body>
                <header className="border border-yellow/5 p-4">
                    <h1 className="text-center font-semibold text-2xl p-4 bg-yellow/10 ">
                        Conheça a clínica
                    </h1>

                    <figure className="relative h-full w-full pt-4">
                        <img
                            className="h-full w-full opacity-85 object-cover object-center"
                            src="https://i.imgur.com/rQd6mp7.png"
                            alt="clinica chucrute"
                        />

                    </figure>
                </header>

                <main>
                    <section className="p-2">
                        <p className="p-4 font-normal text-justify">
                            A Clínica do Dr. Chucrute é especializada em gastroenterologia, oferecendo atendimento de excelência para diagnóstico e tratamento de condições do sistema digestivo.
                            Localizada em um ambiente moderno e acolhedor, a clínica é equipada com tecnologia avançada para exames e procedimentos gastroenterológicos.


                        </p>
                        <p className="p-4 font-normal text-justify">
                            Sob a liderança do Dr. Hans Chucrute, um renomado gastroenterologista com vasta experiência na área, a clínica se destaca pelo atendimento personalizado e abordagem multidisciplinar.
                            Os serviços incluem avaliação e tratamento de doenças como refluxo gastroesofágico, gastrite, úlceras, doenças inflamatórias intestinais e intolerâncias alimentares.
                            A equipe da clínica também é capacitada para realizar endoscopias, colonoscopias e outros exames especializados.

                        </p>

                        <p className="p-4 font-normal text-justify">
                            O Dr. Chucrute e sua equipe priorizam o bem-estar dos pacientes, oferecendo cuidados com atenção aos detalhes e um plano de tratamento adaptado às necessidades individuais.
                            A clínica se compromete a proporcionar um atendimento de qualidade, promovendo a saúde digestiva e melhorando a qualidade de vida dos pacientes.
                        </p>
                    </section>

                    <div className="p-8">
                        <div className="p-4 bg-yellow/5">
                            <h2 className="text-center font-bold text-xl">
                                Confira a nossa localização:
                            </h2>
                        </div>


                        <div className="map-responsive">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5047169917684!2d-46.63677582264894!3d-23.55030987880746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59abaaae4233%3A0xd9186faf714bc5b1!2sPra%C3%A7a%20da%20S%C3%A9%20-%20Se%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001001-000!5e0!3m2!1spt-BR!2sbr!4v1724197431443!5m2!1spt-BR!2sbr"
                                width="1200"
                                height="450"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Responsive Google Map"
                            >
                            </iframe>
                        </div>
                    </div>


                </main>
            </body>


        </>
    );
}

export default Clinica;