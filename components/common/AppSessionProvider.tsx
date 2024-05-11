"use client";

/**
 * AppSessionProvider Component
 *
 * This is a wrapper component for the SessionProvider from next-auth/react.
 * It's used to provide session context to all child components.
 *
 * This seems like it must be a client component.
 *
 * @component
 * @example
 * <AppSessionProvider>
 *   <ChildComponent />
 * </AppSessionProvider>
 *
 * @param {ReactChildrenType} children - The child components that will be wrapped by the SessionProvider.
 *
 * @returns {React.ElementType} Returns a SessionProvider component that wraps the child components.
 */
import { SessionProvider } from "next-auth/react";
import { ReactChildrenType } from "../../lib/Types";

export default function AppSessionProvider({ children }: ReactChildrenType) {
  return <SessionProvider>{children}</SessionProvider>;
}
