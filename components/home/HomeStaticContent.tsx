import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Sparkles, Lock, Zap, Palette, Smartphone, Printer, Heart, ArrowRight, Star, Languages, ScrollText, Wand2, Gem } from 'lucide-react';

interface HomeStaticContentProps {
    locale: string;
}

export default async function HomeStaticContent({ locale }: HomeStaticContentProps) {
    const tHome = await getTranslations({ locale, namespace: 'home' });
    const tFeatures = await getTranslations({ locale, namespace: 'features' });

    return (
        <div className="bg-slate-950">
            {/* What Section */}
            <WhatSection t={tHome} />

            {/* Showcase */}
            <ShowcaseSection locale={locale} />

            {/* ERNIE Differentiation */}
            <ErnieAdvantageSection locale={locale} />

            {/* How Section */}
            <HowSection t={tHome} />

            {/* Features Section */}
            <FeaturesSection t={tFeatures} />

            {/* SEO Content Section */}
            <SEOContentSection t={tHome} />

            {/* FAQ Section */}
            <FAQSection t={tHome} />

            {/* CTA Section */}
            <CTASection t={tHome} locale={locale} />
        </div>
    );
}

function ShowcaseSection({ locale }: { locale: string }) {
    const isZh = locale === 'zh';
    const items = [
        {
            src: 'https://bj.bcebos.com/ibox-thumbnail98/014e0c5788cde80749413265c8f4160e',
            title: isZh ? '东方审美人物' : 'Eastern Portrait Aesthetics',
            desc: isZh ? '来自百度官方素材池的高质感人像示例，适合承接中文审美和人物氛围表达。' : 'An official Baidu visual showing high-fidelity portrait quality and stronger alignment with Chinese aesthetic cues.',
            height: 'h-[340px]'
        },
        {
            src: 'https://bj.bcebos.com/ibox-thumbnail98/90f525091f0319aa52c8e88171094ea0',
            title: isZh ? '叙事感场景' : 'Narrative Scene Rendering',
            desc: isZh ? '更完整的场景组织和光影层次，适合电影感、故事感 prompt。' : 'Richer scene composition and layered lighting for cinematic and story-driven prompts.',
            height: 'h-[280px]'
        },
        {
            src: 'https://bj.bcebos.com/ibox-thumbnail98/5fec5a162ae10e8baf1b0ac269a770c5',
            title: isZh ? '镜头语言表达' : 'Cinematic Language',
            desc: isZh ? '更适合用中文直接描述低机位、侧拍、电影感氛围等镜头语义。' : 'Works well with natural-language camera direction such as low angles, side views, and cinematic framing.',
            height: 'h-[420px]'
        },
        {
            src: 'https://bj.bcebos.com/ibox-thumbnail98/32be7485dcf509539e1bb2501038d10d',
            title: isZh ? '材质与细节' : 'Texture and Detail',
            desc: isZh ? '服饰、皮肤、环境材质的微观层次更适合作为首页信任背书。' : 'Micro-detail in clothing, skin, and surface textures helps build trust immediately.',
            height: 'h-[300px]'
        },
        {
            src: 'https://bj.bcebos.com/ibox-thumbnail98/e71609f2c7e0b03bd72c88a2b2a6913b',
            title: isZh ? '中文文化表达' : 'Chinese Cultural Expression',
            desc: isZh ? '更适合承接汉服、国风、东方建筑、节气氛围这类文化主题。' : 'A better fit for Hanfu, guofeng, eastern architecture, and culturally grounded visual prompts.',
            height: 'h-[360px]'
        },
    ];

    return (
        <section className="py-20 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_35%),linear-gradient(180deg,#020617_0%,#0b1120_100%)] border-y border-slate-800">
            <div className="container px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-200 text-sm">
                            <Gem className="w-4 h-4" />
                            {isZh ? 'Showcase' : 'Showcase'}
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {isZh ? '高精细度结果展示' : 'High-Fidelity Image Showcase'}
                        </h2>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                            {isZh
                                ? '首页直接展示 ERNIE Image 在结构、镜头语言、中文语义理解上的代表性结果，让用户一眼看到“出图上限”。'
                                : 'Show representative ERNIE Image results directly on the homepage so visitors immediately see the ceiling for detail, composition, and Chinese prompt understanding.'}
                        </p>
                    </div>

                    <div className="columns-1 md:columns-2 xl:columns-3 gap-6 [column-fill:_balance]">
                        {items.map((item) => (
                            <div key={item.src} className="mb-6 break-inside-avoid">
                                <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/70 shadow-[0_25px_80px_-35px_rgba(59,130,246,0.45)]">
                                    <div className={`relative w-full ${item.height}`}>
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                                    </div>
                                    <div className="p-5 space-y-2">
                                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                        <p className="text-sm leading-6 text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ErnieAdvantageSection({ locale }: { locale: string }) {
    const isZh = locale === 'zh';

    const pillars = [
        {
            icon: Languages,
            title: isZh ? '更懂中文语境' : 'Built for Chinese Nuance',
            desc: isZh
                ? '人名、地名、成语、节气、古风、美学风格这类中文语义，直接说人话也更容易被理解。'
                : 'Names, places, idioms, solar terms, and Chinese aesthetics can be expressed naturally without awkward prompt gymnastics.',
            tone: 'from-red-500/20 to-amber-500/20'
        },
        {
            icon: ScrollText,
            title: isZh ? '更懂中国文化元素' : 'Stronger Cultural Grounding',
            desc: isZh
                ? '汉服、国潮、非遗纹样、东方园林、电影海报等场景，更适合围绕中文文化语料做生成表达。'
                : 'Hanfu, guochao, traditional motifs, eastern gardens, and poster-style visuals benefit from culturally grounded prompting.',
            tone: 'from-indigo-500/20 to-fuchsia-500/20'
        },
        {
            icon: Wand2,
            title: isZh ? 'Prompt 翻译与增强' : 'Prompt Translation and Enhancement',
            desc: isZh
                ? '先把用户随手写的中文需求整理成更稳定的高质量提示词，再进入生成流程，提升首图命中率。'
                : 'Turn rough Chinese intent into a cleaner, higher-signal prompt before generation to improve first-shot success.',
            tone: 'from-emerald-500/20 to-cyan-500/20'
        },
    ];

    const examples = isZh
        ? [
            {
                label: '原始需求',
                text: '做一张像王家卫电影海报的图，重庆夜色，潮湿街头，一个穿风衣的人回头。'
            },
            {
                label: '增强后 Prompt',
                text: '电影海报风格，重庆山城夜景，潮湿路面反光，霓虹招牌，穿深色风衣的人在街角回头，镜头压缩感，胶片颗粒，王家卫式情绪色彩，高清细节。'
            },
            {
                label: '生成收益',
                text: '主体更明确，场景元素更完整，镜头氛围更统一，中文语义不容易丢。'
            },
        ]
        : [
            {
                label: 'Raw Prompt',
                text: 'Make a Wong Kar-wai style poster, rainy Chongqing night, wet street, someone in a trench coat turning back.'
            },
            {
                label: 'Enhanced Prompt',
                text: 'Cinematic poster, Chongqing nightscape, wet reflective pavement, neon shop signs, a figure in a dark trench coat turning back at the street corner, compressed lens feel, film grain, moody Wong Kar-wai color palette, high detail.'
            },
            {
                label: 'Why It Helps',
                text: 'Clearer subject framing, stronger scene composition, and more stable tone across the first render.'
            },
        ];

    return (
        <section className="py-20 bg-slate-950">
            <div className="container px-4 md:px-6">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm">
                            <Star className="w-4 h-4" />
                            {isZh ? '为什么是 ERNIE Image' : 'Why ERNIE Image'}
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                {isZh ? '差异化不只是模型名，而是中文表达的命中率' : 'The edge is not just the model name, but how well it understands Chinese intent'}
                            </h2>
                            <p className="text-lg leading-8 text-slate-400">
                                {isZh
                                    ? '我们把首页卖点聚焦在两件事上：一是更懂中文语境和中国文化，二是把随手写的需求翻译成更适合出图的 Prompt。这样用户会更容易理解为什么这里不是又一个普通的 AI 生图站。'
                                    : 'We focus the homepage around two ideas: stronger Chinese cultural understanding and better prompt translation before generation. That makes the product feel meaningfully different instead of just another generic AI image site.'}
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {pillars.map((pillar) => {
                                const Icon = pillar.icon;
                                return (
                                    <div key={pillar.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.tone} flex items-center justify-center mb-4 border border-white/10`}>
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">{pillar.title}</h3>
                                        <p className="text-slate-400 leading-7">{pillar.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.98))] p-6 lg:p-8 shadow-[0_30px_120px_-50px_rgba(99,102,241,0.55)]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                                <Wand2 className="w-5 h-5 text-indigo-300" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">
                                    {isZh ? 'Prompt 增强演示' : 'Prompt Enhancement Demo'}
                                </h3>
                                <p className="text-sm text-slate-500">
                                    {isZh ? '把中文意图整理成更稳定的生成表达' : 'Turn rough intent into a stronger generation prompt'}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {examples.map((item, index) => (
                                <div
                                    key={item.label}
                                    className={`rounded-2xl p-4 border ${index === 1 ? 'bg-indigo-500/10 border-indigo-500/30' : 'bg-slate-900 border-slate-800'}`}
                                >
                                    <div className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-2">{item.label}</div>
                                    <p className="text-sm leading-7 text-slate-200">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhatSection({ t }: { t: any }) {
    return (
        <section className="py-20 bg-slate-900/50">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {t('what.title')}
                        </h2>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            {t('what.desc')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                                <Palette className="w-6 h-6 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">
                                {t('what.feature_1_title')}
                            </h3>
                            <p className="text-slate-400">
                                {t('what.feature_1_desc')}
                            </p>
                        </div>

                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                                <Heart className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">
                                {t('what.feature_2_title')}
                            </h3>
                            <p className="text-slate-400">
                                {t('what.feature_2_desc')}
                            </p>
                        </div>

                        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4">
                                <Sparkles className="w-6 h-6 text-pink-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">
                                {t('what.feature_3_title')}
                            </h3>
                            <p className="text-slate-400">
                                {t('what.feature_3_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function HowSection({ t }: { t: any }) {
    const steps = [
        { number: 1, title: t('how.step_1_title'), desc: t('how.step_1_desc') },
        { number: 2, title: t('how.step_2_title'), desc: t('how.step_2_desc') },
        { number: 3, title: t('how.step_3_title'), desc: t('how.step_3_desc') },
        { number: 4, title: t('how.step_4_title'), desc: t('how.step_4_desc') },
    ];

    return (
        <section className="py-20 bg-slate-950">
            <div className="container px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {t('how.title')}
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            {t('how.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step) => (
                            <div key={step.number} className="relative">
                                <div className="text-center space-y-4">
                                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl font-bold shadow-lg shadow-indigo-500/25">
                                        {step.number}
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                                    <p className="text-sm text-slate-400">{step.desc}</p>
                                </div>
                                {step.number < steps.length && (
                                    <div className="hidden md:flex absolute top-8 left-full w-8 -translate-y-1/2 items-center justify-center z-10">
                                        <ArrowRight className="w-6 h-6 text-slate-600" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeaturesSection({ t }: { t: any }) {
    const features = [
        { icon: Lock, title: t('feature_1_title'), desc: t('feature_1_desc'), color: 'indigo' },
        { icon: Zap, title: t('feature_2_title'), desc: t('feature_2_desc'), color: 'yellow' },
        { icon: Palette, title: t('feature_3_title'), desc: t('feature_3_desc'), color: 'purple' },
        { icon: Sparkles, title: t('feature_4_title'), desc: t('feature_4_desc'), color: 'pink' },
        { icon: Smartphone, title: t('feature_5_title'), desc: t('feature_5_desc'), color: 'cyan' },
        { icon: Printer, title: t('feature_6_title'), desc: t('feature_6_desc'), color: 'emerald' },
    ];

    const colorMap: Record<string, string> = {
        indigo: 'bg-indigo-500/20 text-indigo-400',
        yellow: 'bg-yellow-500/20 text-yellow-400',
        purple: 'bg-purple-500/20 text-purple-400',
        pink: 'bg-pink-500/20 text-pink-400',
        cyan: 'bg-cyan-500/20 text-cyan-400',
        emerald: 'bg-emerald-500/20 text-emerald-400',
    };

    return (
        <section className="py-20 bg-slate-900/50">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-6xl space-y-12 text-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {t('title')}
                        </h2>
                        <p className="mx-auto max-w-3xl text-slate-400 text-lg">
                            {t('subtitle')}
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={idx}
                                    className="rounded-xl bg-slate-800/50 p-6 border border-slate-700 hover:border-indigo-500/50 transition-all hover:transform hover:-translate-y-1"
                                >
                                    <div className="space-y-4">
                                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${colorMap[feature.color]}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                        <p className="text-slate-400">{feature.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQSection({ t }: { t: any }) {
    const faqs = [
        { q: t('faq.q1'), a: t('faq.a1') },
        { q: t('faq.q2'), a: t('faq.a2') },
        { q: t('faq.q3'), a: t('faq.a3') },
        { q: t('faq.q4'), a: t('faq.a4') },
    ];

    return (
        <section className="py-20 bg-slate-950 border-t border-slate-800">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {t('faq.title')}
                        </h2>
                        <p className="text-lg text-slate-400">
                            {t('faq.subtitle')}
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                                <div className="text-slate-400 whitespace-pre-line leading-relaxed">
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CTASection({ t, locale }: { t: any; locale: string }) {
    const localePrefix = `/${locale}`;

    return (
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-4xl text-center space-y-8">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
                            <Star className="w-4 h-4" />
                            {locale === 'zh' ? '免费试用' : 'Free to Try'}
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            {t('cta.title')}
                        </h2>
                        <p className="mx-auto max-w-2xl text-slate-400 text-lg">
                            {t('cta.subtitle')}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <Link
                                href={localePrefix}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all font-medium text-lg shadow-lg shadow-indigo-500/25"
                            >
                                {t('cta.button_start')}
                            </Link>
                            <Link
                                href={`${localePrefix}/pricing`}
                                className="px-8 py-4 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors font-medium text-lg border border-slate-700"
                            >
                                {t('cta.button_coloring')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SEOContentSection({ t }: { t: any }) {
    return (
        <section className="py-20 bg-slate-900 border-t border-slate-800">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto prose prose-invert prose-lg">
                {/* Comparison Table */}
                <h2 className="text-3xl font-bold text-white mb-8">{t('seo.comparison_title')}</h2>
                <p className="text-slate-400 mb-8">{t('seo.comparison_intro')}</p>

                <div className="not-prose grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <div className="text-2xl mb-2">🇨🇳</div>
                        <h3 className="font-bold text-white mb-2">{t('seo.compare_chinese')}</h3>
                        <p className="text-sm text-slate-400">{t('seo.compare_chinese_desc')}</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <div className="text-2xl mb-2">⚡️</div>
                        <h3 className="font-bold text-white mb-2">{t('seo.compare_speed')}</h3>
                        <p className="text-sm text-slate-400">{t('seo.compare_speed_desc')}</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <div className="text-2xl mb-2">💰</div>
                        <h3 className="font-bold text-white mb-2">{t('seo.compare_price')}</h3>
                        <p className="text-sm text-slate-400">{t('seo.compare_price_desc')}</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                        <div className="text-2xl mb-2">🚀</div>
                        <h3 className="font-bold text-white mb-2">{t('seo.compare_queue')}</h3>
                        <p className="text-sm text-slate-400">{t('seo.compare_queue_desc')}</p>
                    </div>
                </div>

                {/* Video Tutorial (Schema-ready) */}
                <h2 className="text-3xl font-bold text-white mt-16 mb-6">{t('seo.video_title')}</h2>
                <p className="text-slate-400 mb-8">{t('seo.video_intro')}</p>
                <div className="space-y-6 mb-16">
                    <div className="flex gap-4">
                        <div className="flex-none w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">1</div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-1">{t('seo.video_step_1')}</h3>
                            <p className="text-slate-400">{t('seo.video_step_1_desc')}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-none w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">2</div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-1">{t('seo.video_step_2')}</h3>
                            <p className="text-slate-400">{t('seo.video_step_2_desc')}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-none w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">3</div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-1">{t('seo.video_step_3')}</h3>
                            <p className="text-slate-400">{t('seo.video_step_3_desc')}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-none w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">4</div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-1">{t('seo.video_step_4')}</h3>
                            <p className="text-slate-400">{t('seo.video_step_4_desc')}</p>
                        </div>
                    </div>
                </div>

                {/* Tech Specs */}
                <div className="bg-slate-800/30 p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold text-white mb-6">{t('seo.tech_title')}</h2>
                    <p className="text-slate-300 mb-6">{t('seo.tech_intro')}</p>
                    <ul className="space-y-4 list-none pl-0">
                        <li className="flex gap-3">
                            <span className="text-indigo-400">❖</span>
                            <span><strong className="text-white">{t('seo.tech_feature_1')}:</strong> {t('seo.tech_feature_1_desc')}</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-indigo-400">❖</span>
                            <span><strong className="text-white">{t('seo.tech_feature_2')}:</strong> {t('seo.tech_feature_2_desc')}</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-indigo-400">❖</span>
                            <span><strong className="text-white">{t('seo.tech_feature_3')}:</strong> {t('seo.tech_feature_3_desc')}</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-indigo-400">❖</span>
                            <span><strong className="text-white">{t('seo.tech_feature_4')}:</strong> {t('seo.tech_feature_4_desc')}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
