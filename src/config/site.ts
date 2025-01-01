import { SiteConfig } from "@/types";

const site_url = process.env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Sentient AI Flashcards App",
  description:
    "Sentient AI Flashcards App is a flashcard app that uses OpenAI API to generate flashcards. Users can create flashcards based ona topic. The app is powered by Next.js.",
  url: "site_url",
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://x.com/petrov14439",
    github: "https://github.com/petroff69",
    portfolio: "https://zlatimir-petroff-portfolio.vercel.app/",
  },
  mailSupport: "zlatimirpetrov23@gmail.com",
};