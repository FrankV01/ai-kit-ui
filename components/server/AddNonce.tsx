"use server";
import React, { Attributes } from "react";
import { headers } from "next/headers";

type AddNonceProps = {
  children: React.ReactNode;
};

/**
 * The intention is to add the CSP nonce to the children of this component.
 * but it doesn't seem to work as expected. Perhaps because of the
 * use server directive. Not sure.
 * @param children
 * @constructor
 */
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