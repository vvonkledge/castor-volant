'use client'

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { sendEmail } from "../actions/send-email";

async function send() {
    const result = await sendEmail()
    console.log(result)
}
export default function Contact() {
    return (
        <Container>
            <div className="relative isolate bg-white mt-8 sm:mt-12">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                                <svg
                                    aria-hidden="true"
                                    className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                >
                                    <defs>
                                        <pattern
                                            x="100%"
                                            y={-1}
                                            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                            width={200}
                                            height={200}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path d="M130 200V.5M.5 .5H200" fill="none" />
                                        </pattern>
                                    </defs>
                                    <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                                    <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                                        <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                    </svg>
                                    <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
                                </svg>
                            </div>
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Discutons ensemble de votre projet !<br /> Que ce soit par e-mail, téléphone ou perchés sur un arbre, le choix vous appartient. Je m'adapterai à votre préférence pour échanger sur vos projets.
                            </p>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Adresse</span>
                                        <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                    </dt>
                                    <dd>
                                        297 chemin des Pensées
                                        <br />
                                        42820 Ambierle
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Téléphone</span>
                                        <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                    </dt>
                                    <dd>
                                        <a href="tel:+33 6 82 50 69 12" className="hover:text-gray-900">
                                            +33 6 82 50 69 12
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                    </dt>
                                    <dd>
                                        <a href="mailto:castorvolant.s@gmail.com" className="hover:text-gray-900">
                                            castorvolant.s@gmail.com
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <form action={send} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Prénom
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-base sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Nom
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-base sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-base sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Numéro de téléphone
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            id="phone-number"
                                            name="phone-number"
                                            type="tel"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-base sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-base sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <Button type="submit" variant="primary">
                                    Envoyer message
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}