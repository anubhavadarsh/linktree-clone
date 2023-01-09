import clsx from "clsx";
import Image from "next/image";
import { Inter } from "@next/font/google";

import data from "../data.json";
import getIcon from "../util/get-icon";

const inter = Inter({
  weight: ["500", "700"],
});

export default function Page() {
  return (
    <div className="flex min-h-screen">
      <div className="flex h-full w-full flex-col p-16">
        <div className="mx-auto h-full w-full max-w-2xl">
          <Header />
          <div className="mt-8">
            {data.links.map((arg) => (
              <LinkCard key={arg.href} {...arg} />
            ))}
          </div>
          <SocialsCard />
        </div>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="mb-4">
        <Image
          className="rounded-full"
          alt={data.name}
          src={data.avatar}
          width={96}
          height={96}
        />
      </div>
      <div className="mx-4 flex items-center">
        <h1 className={clsx("text-xl font-bold", inter.className)}>
          @{data.name}
        </h1>
      </div>
    </div>
  );
};

const LinkCard = ({
  title,
  href,
  image,
}: {
  title: string;
  href: string;
  image: string;
}) => {
  return (
    <div className="mb-4 h-auto rounded bg-white/[.8] shadow-sm shadow-black/[.08] transition-transform hover:scale-105">
      <a
        href={href}
        target="_blank"
        className="relative flex cursor-pointer items-center justify-center px-16  py-4 transition-all"
      >
        <div className="absolute top-2/4 left-1 flex h-12 w-12 -translate-y-2/4 items-center justify-center overflow-hidden rounded">
          <Image
            alt={title}
            width={48}
            height={48}
            className="block h-full w-full object-contain"
            src={image}
          />
        </div>
        <p className={clsx("text-base font-medium", inter.className)}>
          {title}
        </p>
      </a>
    </div>
  );
};

const SocialsCard = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-center">
        {data.socials.map(({ link, handle, name }) => (
          <a
            key={name}
            href={`${link}${handle}`}
            className="mx-2 flex h-8 w-8 items-center justify-center transition-transform"
          >
            {getIcon(name)}
          </a>
        ))}
      </div>
    </div>
  );
};
