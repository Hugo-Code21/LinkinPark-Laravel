import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowDown, Disc3, Music2, Users } from 'lucide-react';
import { dashboard, login, register } from '@/routes';
import type { Auth, Team } from '@/types';

const highlights = [
    {
        icon: Disc3,
        title: 'Explore the albums',
        description:
            'Revisit the records, eras, and sounds that shaped the band’s journey.',
    },
    {
        icon: Music2,
        title: 'More than one sound',
        description:
            'From heavy riffs to electronic textures, every era brings a new energy.',
    },
    {
        icon: Users,
        title: 'Made for fans',
        description:
            'A place to celebrate the music and the community built around it.',
    },
];

export default function Welcome() {
    const { auth, currentTeam } = usePage<{
        auth: Auth;
        currentTeam: Team | null;
    }>().props;
    const dashboardUrl = currentTeam ? dashboard(currentTeam.slug) : '/';

    return (
        <>
            <Head title="Linkin Park" />

            <div className="relative isolate min-h-screen overflow-hidden bg-[#080a0d] text-slate-100">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(34,211,238,0.13),transparent_55%)]"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.16)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_80%)] [background-size:72px_72px] opacity-[0.08]"
                />

                <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
                    <a
                        href="#top"
                        className="text-sm font-bold tracking-[0.24em] text-white"
                    >
                        LINKIN PARK
                    </a>

                    <nav
                        aria-label="Main navigation"
                        className="flex items-center gap-3 text-sm"
                    >
                        <a
                            href="#about"
                            className="hidden rounded-full px-4 py-2 text-slate-400 transition hover:text-white sm:inline-flex"
                        >
                            About
                        </a>
                        {auth.user ? (
                            <Link
                                href={dashboardUrl}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-medium text-slate-200 transition hover:border-cyan-200/30 hover:bg-white/[0.08]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="rounded-full px-3 py-2 text-slate-400 transition hover:text-white"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={register()}
                                    className="rounded-full border border-cyan-200/25 bg-cyan-200/10 px-4 py-2 font-medium text-cyan-100 transition hover:border-cyan-100/50 hover:bg-cyan-200/15"
                                >
                                    Join the community
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <main
                    id="top"
                    className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12"
                >
                    <section className="grid min-h-[72vh] items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
                        <div className="max-w-3xl">
                            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-cyan-200/75 uppercase">
                                <span className="h-px w-8 bg-cyan-200/60" />
                                A fan-made tribute to the music
                            </p>
                            <h1 className="mt-6 text-6xl leading-[0.95] font-semibold tracking-[-0.06em] text-white sm:text-7xl md:text-8xl">
                                Linkin
                                <br />
                                <span className="text-slate-400">Park.</span>
                            </h1>
                            <p className="mt-8 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                                Discover the sound, albums, and story of a band
                                that keeps pushing beyond the expected. From
                                raw, unforgettable beginnings to bold new
                                directions, Linkin Park’s music brings intensity
                                and emotion together.
                            </p>
                            <div className="mt-9 flex flex-wrap items-center gap-4">
                                <a
                                    href="#about"
                                    className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
                                >
                                    Explore this page
                                    <ArrowDown
                                        aria-hidden="true"
                                        className="size-4"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
                            <div
                                aria-hidden="true"
                                className="absolute inset-8 rounded-full border border-cyan-100/[0.08]"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-16 rounded-full border border-cyan-100/[0.12]"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-24 rounded-full bg-cyan-200/[0.04] blur-2xl"
                            />
                            <div className="relative flex size-48 items-center justify-center rounded-full border border-white/10 bg-[#0d1117]/90 shadow-[0_0_100px_rgba(34,211,238,0.08)] sm:size-60">
                                <span className="text-7xl font-black tracking-[-0.12em] text-white sm:text-8xl">
                                    LP
                                </span>
                                <span className="absolute bottom-8 text-[9px] font-medium tracking-[0.32em] text-cyan-100/55 uppercase">
                                    Music · Memory · Movement
                                </span>
                            </div>
                            <div className="absolute top-[14%] right-[13%] size-2 rounded-full bg-cyan-100/70 shadow-[0_0_18px_rgba(165,243,252,0.8)]" />
                            <div className="absolute bottom-[17%] left-[12%] size-1.5 rounded-full bg-slate-400/70" />
                        </div>
                    </section>

                    <section
                        id="about"
                        className="border-t border-white/[0.08] py-16 sm:py-20"
                    >
                        <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-xs font-semibold tracking-[0.22em] text-cyan-200/65 uppercase">
                                    The experience
                                </p>
                                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                    A home for the music.
                                </h2>
                            </div>
                            <p className="max-w-md text-sm leading-6 text-slate-500">
                                Take a closer look at the records and the
                                creative evolution behind one of rock’s most
                                distinctive voices.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            {highlights.map(
                                ({ icon: Icon, title, description }) => (
                                    <article
                                        key={title}
                                        className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-cyan-100/20 hover:bg-white/[0.04]"
                                    >
                                        <Icon
                                            aria-hidden="true"
                                            className="size-5 text-cyan-100/75"
                                        />
                                        <h3 className="mt-5 text-base font-semibold text-slate-100">
                                            {title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-500">
                                            {description}
                                        </p>
                                    </article>
                                ),
                            )}
                        </div>
                    </section>
                </main>

                <footer className="mx-auto flex w-full max-w-7xl flex-col gap-2 border-t border-white/[0.08] px-6 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
                    <span>Linkin Park fan page</span>
                    <span>Built for the music and the people who love it.</span>
                </footer>
            </div>
        </>
    );
}
