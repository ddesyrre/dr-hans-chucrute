import {
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";

function Doencas() {

    return (
        <>

            <body>
                <figure className="relative h-full w-full">
                    <img
                        className="h-full w-full object-cover object-center brightness-150 contrast-75 saturate-125"
                        src="https://i.imgur.com/YNpGshj.png"
                        alt="hans chucrute"
                    />

                    <figcaption className="absolute bottom-8 left-2/4  rounded-md flex -translate-x-2/4 justify-between  border border-yellow/75 bg-white/80 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <p className="font-bold text-xl ">
                            Dr. Hans Crucrute
                            <span className="font-thin italic"> - o seu gastro de confiança!</span>
                        </p>
                    </figcaption>
                </figure>

                <main>
                    <article className="text-center text-lg py-8">
                        O Dr. Hans Chucrute atua com excelência em diversas enfermidades dentro da especialidade de <span className="font-semibold"> gastroenterologia</span>, como as doenças abaixo e muitas outras
                    </article>


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-x-0 gap-8 p-2">
                        <Card className="w-full p-4">
                            <CardBody>
                                <Typography variant="h5" className="mb-2 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                    Intolerâncias Alimentares
                                </Typography>
                                <Typography>
                                    Intolerâncias alimentares ocorrem quando o sistema digestivo não consegue processar certos alimentos, levando a sintomas desagradáveis.
                                    Elas são diferentes das alergias alimentares, que envolvem uma resposta imunológica.
                                </Typography>
                            </CardBody>
                        </Card>

                        <Card className="w-full p-4">
                            <CardBody>
                                <Typography variant="h5" className="mb-2 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                    Colite
                                </Typography>
                                <Typography>
                                    Colite refere-se à inflamação do cólon (intestino grosso).
                                    Pode ser causada por várias condições e pode apresentar sintomas variados, como dor abdominal, diarreia (às vezes com sangue), febre e urgência para evacuar.
                                </Typography>
                            </CardBody>
                        </Card>

                        <Card className="w-full p-4">
                            <CardBody>
                                <Typography variant="h5" className="mb-2 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                    Gastrite
                                </Typography>
                                <Typography>
                                    Gastrite é a inflamação da mucosa do estômago, que pode causar dor abdominal, náuseas, vômitos, e sensação de plenitude.
                                    Pode ser aguda, surgindo repentinamente e durando pouco tempo, ou crônica, desenvolvendo-se lentamente ao longo dos anos.
                                </Typography>
                            </CardBody>
                        </Card>

                        <Card className="w-full p-4">
                            <CardBody>
                                <Typography variant="h5" className="mb-2 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                    Refluxo
                                </Typography>
                                <Typography>
                                    Refluxo gastroesofágico, ou refluxo ácido, ocorre quando o ácido do estômago volta para o esôfago, causando sintomas como azia, queimação no peito,
                                    regurgitação de alimentos ou líquidos e, às vezes, dor torácica. É geralmente causado por um esfíncter esofágico inferior enfraquecido ou relaxado,
                                    permitindo que o ácido escape do estômago.
                                </Typography>
                            </CardBody>
                        </Card>

                        <Card className="w-full p-4">
                            <CardBody>
                                <Typography variant="h5" className="mb-2 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                    Doença de Crohn
                                </Typography>
                                <Typography>
                                    A Doença de Crohn é uma condição inflamatória crônica que pode afetar qualquer parte do trato gastrointestinal, desde a boca até o ânus,
                                    embora geralmente se manifeste no intestino delgado e no cólon. Os principais sintomas incluem dor abdominal, diarreia persistente, perda de peso,
                                    fadiga e, em alguns casos, febre e sangramento retal.
                                </Typography>
                            </CardBody>
                        </Card>

                        <Card className="w-full p-4">
                            <CardBody>
                                <Typography variant="h5" className="mb-2 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                    Síndrome do Intestino Irritável
                                </Typography>
                                <Typography>
                                    A Síndrome do Intestino Irritável (SII) é um transtorno digestivo crônico que afeta o funcionamento do intestino, causando sintomas como dor abdominal,
                                    inchaço, gases e alterações nos hábitos intestinais, como diarreia, constipação ou uma combinação de ambos.
                                </Typography>
                            </CardBody>
                        </Card>

                        <Card className="w-full p-4">
                            <CardBody>
                                <Typography variant="h5" className="mb-2 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                    Flatulência (Gases)
                                </Typography>
                                <Typography>
                                    Flatulência é a liberação de gases do sistema digestivo pelo ânus. É um processo normal, mas pode causar desconforto e embaraço.
                                    Os gases podem se formar devido à ingestão de ar, consumo de alimentos que produzem gases ou problemas digestivos, como intolerâncias alimentares.
                                </Typography>
                            </CardBody>
                        </Card>

                        <Card className="w-full p-4">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                    Pancreatite
                                </Typography>
                                <Typography>
                                    Pancreatite é a inflamação do pâncreas, uma glândula localizada atrás do estômago que produz enzimas digestivas e hormônios, como a insulina.
                                    Pode ser aguda ou crônica.
                                </Typography>
                            </CardBody>
                        </Card>

                        <Card className="w-full p-4">
                            <CardBody>
                                <Typography variant="h5" className="mb-2 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                    Hemorróidas
                                </Typography>
                                <Typography>
                                    Hemorroidas são veias inchadas na região do reto ou ânus, semelhantes a varizes.
                                    Elas podem causar dor, coceira, sangramento e desconforto durante e após as evacuações.
                                </Typography>
                            </CardBody>
                        </Card>

                        <Card className="w-full p-4">
                            <CardBody>
                                <Typography variant="h5" className="mb-2 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                    Pedra na Vesícula
                                </Typography>
                                <Typography>
                                    Pedras na vesícula são pequenas formações sólidas que se desenvolvem na vesícula biliar.
                                    Podem causar dor abdominal e outros sintomas se bloquearem os ductos biliares.
                                </Typography>
                            </CardBody>
                        </Card>


                        <Card className="w-full p-4">
                            <CardBody>
                                <Typography variant="h5" className="mb-2 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                    Gastroenterite
                                </Typography>
                                <Typography>
                                    Gastroenterite é a inflamação do estômago e intestinos, geralmente causada por infecções virais, bacterianas ou parasitárias.
                                    Os principais sintomas incluem diarreia, vômitos, dor abdominal e febre.
                                </Typography>
                            </CardBody>
                        </Card>

                        <Card className="w-full p-4">
                            <CardBody>
                                <Typography variant="h5" className="mb-2 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                    Dispepsia (Má Digestão)
                                </Typography>
                                <Typography>
                                    Dispepsia, também conhecida como indigestão, refere-se a uma série de sintomas desconfortáveis no abdômen superior, incluindo dor, sensação de plenitude, azia, e náuseas.
                                    Pode ser causada por diversos fatores, como refluxo ácido, gastrite, úlceras gástricas, ou distúrbios digestivos funcionais.
                                </Typography>
                            </CardBody>
                        </Card>


                        <Card className="w-full p-4">
                            <CardBody>
                                <Typography variant="h5" className="mb-2 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                    Úlcera Gástrica
                                </Typography>
                                <Typography>
                                    Úlcera gástrica é uma ferida aberta que se desenvolve na mucosa do estômago.
                                    Pode causar dor abdominal, azia, náuseas e, em alguns casos, sangramento.
                                    As principais causas incluem infecção pela bactéria Helicobacter pylori e o uso prolongado de anti-inflamatórios não esteroides (AINEs).
                                </Typography>
                            </CardBody>
                        </Card>

                        <Card className="w-full p-4">
                            <CardBody>
                                <Typography variant="h5" className="mb-2 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                    Câncer Gastrointestinal
                                </Typography>
                                <Typography>
                                    Câncer gastrointestinal refere-se a tumores que se desenvolvem no trato gastrointestinal, que inclui o esôfago, estômago, intestino delgado, cólon, reto e ânus.
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>

                    <section className="pt-8 ">
                        <div className="text-center p-8 border border-yellow/25">
                            <h3 className="bg-yellow/5 text-lg font-semibold">Não achou a doença que procurava? </h3>
                            <p className="text-center font-thin italic p-4 ">
                                Para mais informações, entre em contato com a nossa equipe para que possamos ajudar o mais breve possível
                            </p>
                        </div>

                    </section>

                </main>
            </body>


        </>
    );
}

export default Doencas;