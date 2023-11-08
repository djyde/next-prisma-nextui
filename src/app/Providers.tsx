'use client'

import { NextUIProvider } from "@nextui-org/react";

export function Providers(props: {
  children: React.ReactNode

}) {
  return (
    <>
      <NextUIProvider>
        {props.children}
      </NextUIProvider>
    </>
  )
}