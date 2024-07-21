import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import chainsaw from '@/images/logos/chainsaw.png'
import abattage from '@/images/logos/abattage.png'
import care from '@/images/logos/care.png'
import greenwaste from '@/images/logos/green-waste.png'
import { Card } from './card'
import Image from 'next/image'

const services = [
    {
        name: 'ÉLAGAGE',
        description:
            "Elagueur grimpeur formé à tous types de situation. Pour des tailles d’entretien, tailles sanitaires, tailles architecturées ou d’allégement, etc...",
        link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
        logo: chainsaw,
    },
    {
        name: 'ABATTAGE',
        description: "Pour tous les types de terrains, notre expérience conjugue sécurité et qualité. Abattage par démontage(morceau par morceau) avec ou sans grue, ou abattage direct, nous nous adaptons au chantier.",
        link: { href: '#', label: 'github.com' },
        logo: abattage,
    },
    {
        name: 'SOIN AUX ARBRES',
        description:
            'Identification des maladies, des ravageurs, des faiblesses mécaniques, conseils pour la santé des végétaux. Pause de haubans et de sangles en mesure préventive ou pour sécuriser un arbre.',
        link: { href: '#', label: 'github.com' },
        logo: care,
    },
    {
        name: 'GESTION DES DÉCHETS VERTS',
        description:
            "Engagés dans une gestion durable des ressources, nous assurons à la demande l’évacuation et la valorisation des déchets verts(branches, bois, troncs et souches).",
        link: { href: '#', label: 'github.com' },
        logo: greenwaste,
    },
]

export default function Services() {

    return (
        <>
            <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2"
            >
                {services.map((project) => (
                    <Card as="li" key={project.name}>
                        <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-md shadow-primary-base/5 ring-1 ring-primary-base/5">
                            <Image
                                src={project.logo}
                                alt=""
                                className="h-24 w-24"
                                unoptimized
                            />
                        </div>
                        <h2 className="mt-6 text-base font-semibold text-zinc-800">
                            <Card.Link href={project.link.href}>{project.name}</Card.Link>
                        </h2>
                        <Card.Description>{project.description}</Card.Description>
                    </Card>
                ))}
            </ul>
        </>
    )
}