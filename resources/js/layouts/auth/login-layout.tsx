import { Link } from '@inertiajs/react';
import { Disc3, ShieldCheck } from 'lucide-react';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function LoginLayout({
    children,
    title = 'Administrator sign in',
    description = 'Sign in to manage the Linkin Park band workspace.',
}: AuthLayoutProps) {
    return (
        <main className="dark relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-[#08090d] px-4 py-12 text-slate-100 [color-scheme:dark] sm:px-6">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_18%,rgba(0,190,210,0.12),transparent_42%),radial-gradient(ellipse_at_90%_85%,rgba(85,70,180,0.08),transparent_35%)]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/[0.04] shadow-[0_0_100px_rgba(34,211,238,0.07)]"
            />

            <section className="w-full max-w-md">
                <div className="rounded-2xl border border-cyan-100/10 bg-[#0d1119]/95 p-6 shadow-[0_0_64px_rgba(34,211,238,0.08)] backdrop-blur sm:p-8">
                    <Link
                        href={home()}
                        className="mb-8 inline-flex items-center gap-3 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                    >
                        <span className="flex size-11 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-300/[0.07] text-cyan-100 shadow-[0_0_22px_rgba(34,211,238,0.12)]">
                            <Disc3 className="size-6" aria-hidden="true" />
                        </span>
                        <span className="text-left">
                            <span className="block text-sm font-semibold tracking-[0.2em] text-white">
                                LINKIN PARK
                            </span>
                            <span className="block text-xs text-slate-500">
                                BAND MANAGEMENT
                            </span>
                        </span>
                    </Link>

                    <div className="mb-7">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-200/10 bg-cyan-200/[0.04] px-3 py-1 text-xs font-medium tracking-wide text-cyan-100/80">
                            <ShieldCheck
                                className="size-3.5"
                                aria-hidden="true"
                            />
                            ADMINISTRATOR ACCESS
                        </div>
                        <h1 className="text-2xl font-semibold tracking-tight text-white">
                            {title}
                        </h1>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                            {description}
                        </p>
                    </div>

                    {children}

                    <p className="mt-7 text-center text-xs text-slate-600">
                        Authorized team administrators only
                    </p>
                </div>
            </section>
        </main>
    );
}
