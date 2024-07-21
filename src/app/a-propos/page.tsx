import { Container } from "@/components/container";
import Image from "next/image";
import portraitImage from "@/images/portrait.png";
import { FacebookIcon, InstagramIcon, LinkedInIcon, MailIcon, XIcon } from "@/components/SocialIcons";
import clsx from "clsx";
import Link from "next/link";

function SocialLink({
    className,
    href,
    children,
    icon: Icon,
}: {
    className?: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}
export default function About() {
    return (
        <Container>
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 mt-16 sm:mt-20 mb-16 sm:mb-20">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        Miguel Stevenson, gardien des arbres d'Ambierle.</h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            Un arboriste grimpeur est un praticien spécialiste de l&#39;entretien des arbres d’ornement. Il
                            grimpe dans l&#39;arbre avec un matériel technique et sécurisé afin d&#39;effectuer l&#39;entretien
                            nécessaire.
                        </p>
                        <p>
                            Depuis l’obtention d’un brevet d’Études Professionnelles en travaux forestiers et un
                            certificat de spécialisation en taille et soins aux arbres je pratique ce métier-passion.
                            Fort de plusieurs années d’expérience en tant que chef d’équipe et gestionnaire de chantiers
                            au sein d’une entreprise d’élagage, je prends à cœur la relation avec mes clients et mes
                            partenaires.
                        </p>
                        <p>
                            Castor Volant, c’est avant tout des conseils professionnels de qualité et des collaborations
                            ciblées avec d&#39;autres spécialistes pour une expertise approfondie des chantiers à mener.
                        </p>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        <SocialLink href="#" icon={FacebookIcon}>
                            Suivez moi sur Facebook
                        </SocialLink>
                        <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                            Suivez moi sur Instagram
                        </SocialLink>
                        <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                            Suivez moi sur LinkedIn
                        </SocialLink>
                        <SocialLink
                            href="mailto:castorvolants@gmail.com"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            castorvolants@gmail.com
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    )
}