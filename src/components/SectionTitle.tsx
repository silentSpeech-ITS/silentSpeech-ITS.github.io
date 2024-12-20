import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  id?: string,
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  margin?: number,
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      id={props.id}
      className={`flex w-full flex-col ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      } my-${
        props.margin === undefined ? "16" : props.margin
      }`}>
      {props.preTitle && (
        <div className="text-sm font-bold tracking-wider text-pancho-600 uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-6xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-2xl xl:text-2xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}

