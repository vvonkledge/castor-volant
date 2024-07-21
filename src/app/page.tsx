import { Container } from "../components/container";
import Link from "next/link";
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from "../components/SocialIcons";
import image1 from '@/images/photos/image-1.png'
import image2 from '@/images/photos/image-2.png'
import image3 from '@/images/photos/image-3.png'
import image4 from '@/images/photos/image-4.png'
import image5 from '@/images/photos/image-5.png'
import Image from 'next/image'
import clsx from "clsx";
import { Button } from "@/components/button";
import Services from "@/components/services";

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20 mb-16 sm:mb-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt="castor volant, arboriste-élagueur"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Arboriste grimpeur, élagueur et <br /> super-héros amateur.
          </h1>
          <p className="max-w-2xl mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Je suis Miguel, arboriste-élagueur de métier, sculpteur d&apos;arbres
            par passion. Fondateur de Castor Volant, j&apos;ai créé plus
            qu&apos;une entreprise - c&apos;est ma mission de préserver et
            sublimer votre patrimoine arboricole.
          </p>
        </div>
        <div className="mt-6 flex gap-6 items-center">
          <SocialLink href="#" aria-label="Follow on Facebook" icon={FacebookIcon} />
          <SocialLink
            href="#"
            aria-label="Follow on Instagram"
            icon={InstagramIcon}
          />
          <SocialLink
            href="#"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
          />
          <Button variant="primary" href="/contact">Demander votre devis</Button>
        </div>
      </Container>
      <Photos />
      <Container className="mt-16">
        <Services />

        <div className="flex items-center justify-center mt-16">
          <Button variant="primary" href="/contact">Discuter de votre projet</Button>
        </div >
      </Container >

    </>
  );
}
