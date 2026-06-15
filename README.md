# Next.js Posts Application

🚀 **Live Demo:** [nextjs-posts-app.vercel.app](https://nextjs-posts-app.vercel.app)

This is a responsive web application built with **Next.js**, **SWR**, and **Tailwind CSS** that fetches and filters posts from the JSONPlaceholder API. It includes advanced UX patterns like debounced searching, network resilience, and slow connection notifications.

## Features Included

- **Debounced Filter:** Real-time search by User ID with a 500ms delay to avoid API throttling.
- **Network Resilience:** Automatically revalidates requests when the internet connection is regained.
- **Slow Connection Alerts:** Displays a user-friendly message if the API request takes longer than expected.
- **Modern UI:** Responsive grid layout built with Tailwind CSS, including a centered large loading state and empty states.

## Getting Started

First, clone the repository and install the dependencies:
pnpm install

Then, run the development server:
pnpm dev

Open http://localhost:3000 with your browser to see the result.