import Image from "next/image";
import { Container } from "./container";
import logo from '@/images/logos/cv_logo.png'
import Link from "next/link";
export function Header() {

    return (
        <>
            <Container>
                <Link href="/">
                    <Image src={logo} alt="logo castor volant" className="relative w-64 flex-none overflow-hidden sm:w-64" />
                </Link>
            </Container>
        </>
    )
}