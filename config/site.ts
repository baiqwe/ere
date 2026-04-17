// config/site.ts
// 站点全局配置 - 上站时只需修改此文件

export const siteConfig = {
  // === 品牌标识 ===
  name: "ERNIE Image",                        // 网站名称
  domain: "ernieai.net",             // 主域名
  url: "https://ernieai.net",        // 完整 URL
  author: "ERNIE Image Team",                 // 作者
  supportEmail: "support@ernieai.net", // 联系邮箱

  // === 分析追踪 ===
  gaId: "G-PLACEHOLDER",                    // Google Analytics ID - 待用户提供

  // === 国际化配置 ===
  i18n: {
    locales: ['en', 'zh'] as const,         // 支持的语言列表
    defaultLocale: 'en' as const,           // 默认语言
    baseLocale: 'en' as const,              // 翻译基准语言
  },

  // === PWA 主题 ===
  themeColor: "#f97316",                    // Orange 主题色（匹配新 logo）
  backgroundColor: "#0f172a",               // 深色背景
};

// 类型导出
export type Locale = (typeof siteConfig.i18n.locales)[number];
