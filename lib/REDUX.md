## Redux 


https://redux-toolkit.js.org/usage/nextjs

## General recommendations

Based on the architecture of the App Router we have these **general recommendations for appropriate use of Redux**:

* **No global stores** - Because the Redux store is shared across requests, it should not be defined as a global variable. Instead, the store should be created per request.

* **RSCs should not read or write the Redux store** - RSCs cannot use hooks or context. They aren't meant to be stateful. Having an RSC read or write values from a global store violates the architecture of the Next.js App Router.

* **The store should only contain mutable data** - We recommend that you use your Redux sparingly for data intended to be global and mutable.

#### WHY CLIENT COMPONENTS?
Any component that interacts with the Redux store (creating it, providing it, reading from it, or writing to it) **needs to be a client component**. This is because accessing the store requires React context, and context is only available in client components.