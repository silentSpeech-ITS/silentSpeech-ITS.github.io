import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/team/LorenzoFiorini.jpg";
import userTwoImg from "../../public/img/team/TafuroFrancesco.jpeg";
import userThreeImg from "../../public/img/team/CervinoSimone.jpeg";
import userFourImg from "../../public/img/brands/ad.png";
import Link from "next/link";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-7 rounded-2xl py-7 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal text-center">
              <Link
                href="mailto:lorenzo@silentspee.ch"
              >lorenzo@silentspee.ch</Link>
            </p>

            <Avatar
              image={userOneImg}
              name="Lorenzo Fiorini"
              title="Lead Architect"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-7 rounded-2xl py-7 dark:bg-trueGray-800">
          <p className="text-2xl leading-normal text-center">
              <Link
                href="mailto:francesco@silentspee.ch"
              >francesco@silentspee.ch</Link>
            </p>

            <Avatar
              image={userTwoImg}
              name="Francesco Tafuro"
              title="Developer"
            />
          </div>
        </div>
         <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-7 rounded-2xl py-7 dark:bg-trueGray-800">
          <p className="text-2xl leading-normal text-center">
              <Link
                href="mailto:valentina@silentspee.ch"
              >valentina@silentspee.ch</Link>
            </p>

            <Avatar
              image={userFourImg}
              name="Valentina Di Stasi"
              title="Developer"
            />
          </div> 
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-7 rounded-2xl py-7 dark:bg-trueGray-800">
          <p className="text-2xl leading-normal text-center">
              <Link
                href="mailto:simone@silentspee.ch"
              >simone@silentspee.ch</Link>
            </p>

            <Avatar
              image={userThreeImg}
              name="Simone Cervino"
              title="Developer"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
