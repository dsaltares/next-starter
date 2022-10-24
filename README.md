# 🚀 Next Starter Template

This is the Next.js starter template that I use for all my new web applications.

These are the principles I followed to make technology and config choices:

- Excellent developer experience
- Tight feedback loops
- [Pit of success](https://blog.codinghorror.com/falling-into-the-pit-of-success)
- Focus on building the product, not managing the infrastructure

# 🧰 Technologies & Features

This template wires a bunch of technologies together to facilitate a great user and developer experience.

- [⚛️ Next.js](https://nextjs.org/) - **the** fullstack framework.
- [🚀 Typescript](https://www.typescriptlang.org/) - for the superior developer experience and to catch issues early.
- [🎨 Tailwind CSS](https://tailwindcss.com/) - never write CSS again, ship as little as possibl to the client.
- [🔗 tRPC](https://trpc.io/) - end to end typesafe APIs. This setup makes it easy to test procedures in isolation.
- [🌍 React Query](https://tanstack.com/query/v4) - the best server state management library. The template includes a `useMutation` hooks that makes optimistic updates an absolute breeze.
- [🔒 NextAuth.js](https://next-auth.js.org/) - trivial authentication for Next.js apps while owning all of your data.
- [📙 Prisma](https://www.prisma.io/) - the best ORM for Typescript. This template assumes you'll be using PostgreSQL.
- [🐳 Docker](https://www.docker.com/) - 100% offline development is enabled by a local PostgreSQL and email server.
- [🃏 Jest](https://jestjs.io/) - unit tests with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [msw](https://mswjs.io/). Integration tests that can talk to an ephemeral PostgreSQL database. Coverage is automatically collected.
- 🚢 [Github Actions](https://github.com/features/actions) and [Vercel](https://vercel.com/) - linting, testing; and full preview and production deployments.
- [🌳 Dependabot](https://github.com/dependabot) - to keep all your dependencies up to date.

Yep, this is very similar to the [T3 stack](https://create.t3.gg/). However, I've created this to match my exact preferences.

# 🏎️ Get started

Install dependencies:

- [Docker](https://www.docker.com/)
- node (ideally via [fnm](https://github.com/Schniz/fnm))

Create a new Next.js project using this starter template. You can use either `yarn` or `npm`.

```
yarn create next-app --example https://github.com/dsaltares/next-starter <your_app_name>
```

```
npx create-next-app --example https://github.com/dsaltares/next-starter <your_app_name>
```

Set up your local environment variables.

```
cp .env.sample .env
```

Spin up infrastructure dependencies locally.

```
yarn docker:up
```

Start the development server.

```
yarn dev
```

Run all tests, only unit tests or only integration tests.

```
yarn test
yarn test:unit
yarn test:integration
```

Run tests in watch mode and break stuff!

```
yarn test:unit --watch
```

The local development database is persisted locally in the `database` folder.

## ✍️ Contributing

Please understand this is my personal Next.js starter template. Although I welcome issues and PRs with suggestions, I may reject them if they do not match the technologies I use or my preferred workflows.

Please do not be offended nor surprised if your contribution is not accepted.

By all means, feel free to draw inspiration from this template for your own project setup.
