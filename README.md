# ReadMe - ai-kit-ui

This project is pending a rename. See above. 

### Deploy Instructions.

The deployment is done on Digital Ocean. Scripts are at:
`/Users/frankv/GitHub/k8s-sit/k8s-sit/digital-ocean/poems.AppDocker`
The above is setup. Above is a reminder.

We use docker containers. So to deploy a new version,
run `send.sh` which builds and sends the container to the
repo.

If we get: "unauthorized: authentication required"
run `doctl registry login`.

## Less 

This project uses less but depends on external compilation. 

Using less with Next.js is a bit tricky as a lot of things are not 
supported by server components or this or that. This will change
over time I'm sure but right now, using file watchers is the easiest

------

## Stock notes: 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

