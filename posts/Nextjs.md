---
title: 'Fetching data in Nextjs'
date: '2022-02-10'
---

## 1. Pre-rendering

[Pre-rendering](https://nextjs.org/docs/basic-features/pages#pre-rendering)
By default, Next.js **pre-renders** every page. This means that **Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript.**
Pre-rendering can result in **better performance and SEO**.
Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called **hydration**.)

### Two forms of Pre-rendering

[Two forms of Pre-rendering](https://nextjs.org/docs/basic-features/pages#two-forms-of-pre-rendering)
Next.js has two forms of pre-rendering:
**Static Generation** and **Server-side Rendering**.
The difference is in **when** it generates the HTML for a page.

- [Static Generation (Recommended)](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) : The HTML is generated at **build time** and will be reused on each request.
- [Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) : The HTML is generated on **each request**.

**use Static Generation over Server-side Rendering for performance reasons.**
**Statically generated pages can be cached by CDN with no extra configuration to boost performance.**

## 2. Client-side Rendering

[Fetching data on the client side](https://nextjs.org/docs/basic-features/data-fetching#fetching-data-on-the-client-side)
If your page contains frequently updating data, and you don’t need to pre-render the data, you can fetch the data on the client side.
An example of this is user-specific data. Here’s how it works:

> - First, immediately show the page without data. Parts of the page can be **pre-rendered using Static Generation**. You can show loading states for missing data.
> - Then, fetch the data on the **client side** and display it when ready.
>   This approach works well for user dashboard pages, for example. Because a dashboard is a private, user-specific page, SEO is not relevant and the page doesn’t need to be pre-rendered. The data is frequently updated, which requires request-time data fetching.

you can use the **useEffect** hook to make the request or the [useSwr](https://swr.vercel.app/) custom hook made by Vercel engineers which implements **stale-while-revalidate**.
_SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data._

> [SWR](https://nextjs.org/docs/basic-features/data-fetching#swr): The team behind Next.js has created a React hook for data fetching called [SWR](https://swr.vercel.app/). It handles caching, revalidation, focus tracking, refetching on interval, and more.

**SWR code example:**

```js
import useSWR from ‘swr’

function Profile() {
  const { data, error } = useSWR(‘/api/user’, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading…</div>
  return <div>hello {data.name}!</div>
}
```

## 3. API Routes

[API routes](https://nextjs.org/docs/api-routes/introduction) provide a solution to build your API with Next.js.

Any file inside the folder pages/api is mapped to /api/\* and will be treated as an API endpoint instead of a page. They are server-side only bundles and won't increase your client-side bundle size.

### Use Cases

For new projects, you can build your entire API with API Routes. If you have an existing API, you do not need to forward calls to the API through an API Route. Some other use cases for API Routes are:

> - Masking the URL of an external service (e.g. `/api/secret` instead of `https://company.com/secret-url`)
> - Using Environment Variables on the server to securely access external services.

`react`
