export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Hella Music App",
  description: "A beautiful music streaming app built with Next.js and HeroUI.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Library",
      href: "/library",
    },
    {
      label: "Search",
      href: "/search",
    },
  ],
  navMenuItems: [
    {
      label: "My Library",
      href: "/library",
    },
    {
      label: "Search",
      href: "/search",
    },
    {
      label: "Playlists",
      href: "/playlists",
    },
    {
      label: "Favorites",
      href: "/favorites",
    },
    {
      label: "Recently Played",
      href: "/recent",
    },
    {
      label: "Settings",
      href: "/settings",
    },
  ],
  links: {
    github: "https://github.com/Satwinder04/hella-music-app",
    twitter: "https://twitter.com/your-twitter",
    docs: "https://github.com/your-username/hella-music-app",
  },
};
