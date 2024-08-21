import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
    return (
        <>
            <div className="flex justify-center bg-yellow/75 text-black">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        Dr. Hans Chucrute
                    </p>

                    <p className="font-light text-md p-2">
                        © 2024
                    </p>

                    <p className="text-md pb-2">
                        Acesse:
                    </p>

                    <div className="flex gap-2 ">
                        <a href="https://github.com/ddesyrre/" target="_blank">
                            <div className="transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                <GithubLogo size={32} weight="light" />
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/desyrre/" target="_blank">
                            <div className="transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                <LinkedinLogo size={32} weight="light" />
                            </div>
                        </a>

                        <a href="https://instagram.com/3treslimoes/" target="_blank">
                            <div className="transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                <InstagramLogo size={32} weight="light" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;