"use server";
import React, { Attributes } from "react";
import { headers } from "next/headers";

type AddNonceProps = {
  children: React.ReactNode;
};

export default async function AddNonce({ children }: AddNonceProps) {
  const nonce: string = (headers().get("x-nonce") as string) || "[missing]";
  return (
    <>
      {React.Children.map(children, (child) => {
        // Check if the child is a valid React element before cloning
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { nonce } as Partial<unknown> &
            Attributes);
        }
        return child;
      })}
    </>
  );
}
