function Sobre() {

    return (
        <>

            <body>
                <header className="p-8">
                    <div className="flex items-center justify-center ">
                        <div className="flex items-center justify-between h-full ">
                            <div className="flex flex-col px-4">
                                <span className="text-2xl font-bold">Dr. Hans Chucrute</span>
                                <p className="text-lg font-thin italic">trajetória de destaque em gastroenterologia</p>
                            </div>
                            <img
                                className="h-full max-w-96 opacity-85"
                                src="https://i.imgur.com/1BC1yiN.png"
                                alt="hans chucrute"
                            />
                        </div>
                    </div>
                </header>

                <main className="">
                    <section className="text-justify">
                        <article>
                            <h2 className="py-4 font-semibold" id="infancia">
                                Infância e Formação Inicial:
                            </h2>
                            <p className="py-2">
                                Dr. Hans Chucrute nasceu em Blumenau, Santa Catarina, em uma família apaixonada por culinária e saúde.
                                Desde jovem, Hans demonstrou um interesse pela medicina e pela biologia, inspirado pela trajetória de seu avô, um médico local.
                                Ele estudou em um colégio tradicional, destacando-se em ciências e esportes.
                            </p>
                        </article>

                        <article>
                            <h2 className="py-4 font-semibold" id="formação">
                                Especialização e Formação Avançada:
                            </h2>
                            <p className="py-2">
                                Após concluir a graduação com honras, Hans realizou sua residência em Gastroenterologia no Hospital de Caxias do Sul,
                                onde se destacou no tratamento de doenças inflamatórias intestinais. Seu trabalho de conclusão de residência, foi amplamente reconhecido.
                            </p>
                            <p className="py-2">
                                Para aprofundar seus conhecimentos, Hans fez um fellowship em Gastroenterologia Intervencionista na Universidade de Toronto, no Canadá.
                                Durante esse período, desenvolveu habilidades avançadas em técnicas endoscópicas e em pesquisa sobre doenças hepáticas.
                            </p>
                        </article>

                        <article>
                            <h2 className="py-4 font-semibold" id="impacto">
                                Reconhecimento e Impacto:
                            </h2>
                            <p className="py-2">
                                Dr. Hans Chucrute recebeu diversos prêmios por suas contribuições à gastroenterologia, incluindo o Prêmio de Inovação em Medicina e o
                                Título de Médico do Ano em Gastroenterologia pela Sociedade Brasileira de Gastroenterologia.
                                Ele publicou vários artigos influentes em revistas científicas internacionais e é frequentemente convidado para palestrar em conferências ao redor do mundo.
                            </p>
                        </article>

                        <article>
                            <h2 className="py-4 font-semibold" id="legado">
                                Legado:
                            </h2>
                            <p className="py-2">
                                Com uma carreira marcada pela excelência clínica e pela inovação, Dr. Hans Chucrute continua a impactar positivamente o campo da gastroenterologia.
                                Seu compromisso com a pesquisa e o ensino, juntamente com sua dedicação aos pacientes, solidifica seu legado como um líder na área.
                            </p>
                        </article>
                    </section>
                </main>





            </body>

        </>
    );
}

export default Sobre;