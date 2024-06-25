const CONFIG = {
  // profile setting (required)
  profile: {
    name: "猫与狗",
    image: "/avatar-meow.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "兴趣使然的文具爱好者",
    bio: "发现有趣的文具！",
    email: "",
    linkedin: "",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `猫狗的文具小屋`,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "猫狗的文具小屋",
    description: "欢迎来的猫狗的文具小屋!",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://catdogstationary.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "zh-CN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "/catdogstationary",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1 * 1, // revalidate time for [slug], index
}

module.exports = { CONFIG }
