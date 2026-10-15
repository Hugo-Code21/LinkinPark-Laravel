import { Head } from '@inertiajs/react';
import {
    Album,
    ArrowUpRight,
    CalendarDays,
    Disc3,
    Music2,
    ShieldCheck,
    Users,
} from 'lucide-react';
import { useState } from 'react';
import PendingInvitationsModal from '@/components/pending-invitations-modal';
import { dashboard } from '@/routes';
import type { DashboardInvitation } from '@/types';

type AlbumRecord = {
    title: string;
    year: number;
    tracks: string[];
    source: string;
};

const albums: AlbumRecord[] = [
    {
        title: 'Hybrid Theory',
        year: 2000,
        source: 'https://en.wikipedia.org/wiki/Hybrid_Theory',
        tracks: [
            'Papercut',
            'One Step Closer',
            'With You',
            'Points of Authority',
            'Crawling',
            'Runaway',
            'By Myself',
            'In the End',
            'A Place for My Head',
            'Forgotten',
            'Cure for the Itch',
            'Pushing Me Away',
        ],
    },
    {
        title: 'Meteora',
        year: 2003,
        source: 'https://en.wikipedia.org/wiki/Meteora_(album)',
        tracks: [
            'Foreword',
            "Don't Stay",
            'Somewhere I Belong',
            'Lying from You',
            'Hit the Floor',
            'Easier to Run',
            'Faint',
            'Figure.09',
            'Breaking the Habit',
            'From the Inside',
            "Nobody's Listening",
            'Session',
            'Numb',
        ],
    },
    {
        title: 'Minutes to Midnight',
        year: 2007,
        source: 'https://en.wikipedia.org/wiki/Minutes_to_Midnight_(Linkin_Park_album)',
        tracks: [
            'Wake',
            'Given Up',
            'Leave Out All the Rest',
            'Bleed It Out',
            'Shadow of the Day',
            "What I've Done",
            'Hands Held High',
            'No More Sorrow',
            "Valentine's Day",
            'In Between',
            'In Pieces',
            'The Little Things Give You Away',
        ],
    },
    {
        title: 'A Thousand Suns',
        year: 2010,
        source: 'https://en.wikipedia.org/wiki/A_Thousand_Suns',
        tracks: [
            'The Requiem',
            'The Radiance',
            'Burning in the Skies',
            'Empty Spaces',
            'When They Come for Me',
            'Robot Boy',
            'Jornada del Muerto',
            'Waiting for the End',
            'Blackout',
            'Wretches and Kings',
            'Wisdom, Justice, and Love',
            'Iridescent',
            'Fallout',
            'The Catalyst',
            'The Messenger',
        ],
    },
    {
        title: 'Living Things',
        year: 2012,
        source: 'https://en.wikipedia.org/wiki/Living_Things_(Linkin_Park_album)',
        tracks: [
            'Lost in the Echo',
            'In My Remains',
            'Burn It Down',
            'Lies Greed Misery',
            "I'll Be Gone",
            'Castle of Glass',
            'Victimized',
            'Roads Untraveled',
            'Skin to Bone',
            'Until It Breaks',
            'Tinfoil',
            'Powerless',
        ],
    },
    {
        title: 'The Hunting Party',
        year: 2014,
        source: 'https://en.wikipedia.org/wiki/The_Hunting_Party_(album)',
        tracks: [
            'Keys to the Kingdom',
            'All for Nothing',
            'Guilty All the Same',
            'The Summoning',
            'War',
            'Wastelands',
            "Until It's Gone",
            'Rebellion',
            'Mark the Graves',
            'Drawbar',
            'Final Masquerade',
            'A Line in the Sand',
        ],
    },
    {
        title: 'One More Light',
        year: 2017,
        source: 'https://en.wikipedia.org/wiki/One_More_Light',
        tracks: [
            'Nobody Can Save Me',
            'Good Goodbye',
            'Talking to Myself',
            'Battle Symphony',
            'Invisible',
            'Heavy',
            'Sorry for Now',
            'Halfway Right',
            'One More Light',
            'Sharp Edges',
        ],
    },
    {
        title: 'From Zero',
        year: 2024,
        source: 'https://en.wikipedia.org/wiki/From_Zero_(album)',
        tracks: [
            'From Zero (Intro)',
            'The Emptiness Machine',
            'Cut the Bridge',
            'Heavy Is the Crown',
            'Over Each Other',
            'Casualty',
            'Overflow',
            'Two Faced',
            'Stained',
            'IGYEIH',
            'Good Things Go',
        ],
    },
];

const members = [
    {
        name: 'Mike Shinoda',
        specialty: 'Vocals, rhythm guitar, keyboards',
        note: 'Co-founder · songwriting & production',
    },
    {
        name: 'Brad Delson',
        specialty: 'Lead guitar',
        note: 'Co-founder · studio production',
    },
    {
        name: 'Dave “Phoenix” Farrell',
        specialty: 'Bass guitar',
        note: 'Backing vocals',
    },
    {
        name: 'Joe Hahn',
        specialty: 'Turntables, samples & programming',
        note: 'Visual direction',
    },
    {
        name: 'Emily Armstrong',
        specialty: 'Lead vocals',
        note: 'Joined for the From Zero era',
    },
    {
        name: 'Colin Brittain',
        specialty: 'Drums',
        note: 'Songwriter & producer',
    },
];

const formerMembers = [
    {
        name: 'Chester Bennington',
        specialty: 'Lead vocals · 1999–2017',
    },
    {
        name: 'Rob Bourdon',
        specialty: 'Drums · founding member',
    },
];

type Props = {
    pendingInvitations?: DashboardInvitation[];
};

export default function Dashboard({ pendingInvitations = [] }: Props) {
    const [showInvitations, setShowInvitations] = useState(
        pendingInvitations.length > 0,
    );
    const [selectedAlbumTitle, setSelectedAlbumTitle] = useState(
        albums[0].title,
    );
    const selectedAlbum =
        albums.find((album) => album.title === selectedAlbumTitle) ?? albums[0];
    const totalTracks = albums.reduce(
        (total, album) => total + album.tracks.length,
        0,
    );

    return (
        <>
            <Head title="Linkin Park · Band dashboard" />
            <PendingInvitationsModal
                invitations={pendingInvitations}
                open={pendingInvitations.length > 0 && showInvitations}
                onOpenChange={setShowInvitations}
            />

            <main className="min-h-full space-y-6 bg-[#080b11] p-4 text-slate-100 md:p-6">
                <header className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[radial-gradient(ellipse_at_85%_20%,rgba(0,190,210,0.12),transparent_36%),linear-gradient(120deg,#111824,#0d1118_60%,#10131c)] p-6 md:p-8">
                    <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-200/[0.05] px-3 py-1 text-xs font-medium tracking-[0.14em] text-cyan-100/80">
                                <ShieldCheck
                                    className="size-3.5"
                                    aria-hidden="true"
                                />
                                TEAM ADMIN WORKSPACE
                            </div>
                            <p className="text-sm font-medium tracking-[0.24em] text-slate-400 uppercase">
                                Band operations
                            </p>
                            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                                Linkin Park
                            </h1>
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                                A working overview of the band roster and
                                studio-album catalogue.
                            </p>
                        </div>
                        <a
                            href="https://linkinpark.com/music"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-200/20 hover:text-cyan-100"
                        >
                            Official music
                            <ArrowUpRight
                                className="size-4"
                                aria-hidden="true"
                            />
                        </a>
                    </div>
                </header>

                <section
                    aria-label="Catalogue summary"
                    className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
                >
                    <SummaryCard
                        icon={Disc3}
                        label="Studio albums"
                        value={String(albums.length).padStart(2, '0')}
                        detail="2000 — 2024"
                    />
                    <SummaryCard
                        icon={Music2}
                        label="Standard-edition tracks"
                        value={String(totalTracks)}
                        detail="Across the studio catalogue"
                    />
                    <SummaryCard
                        icon={Users}
                        label="Current members"
                        value={String(members.length).padStart(2, '0')}
                        detail="From Zero lineup"
                    />
                    <SummaryCard
                        icon={CalendarDays}
                        label="Latest studio album"
                        value="2024"
                        detail="From Zero"
                    />
                </section>

                <section
                    aria-labelledby="albums-heading"
                    className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e131c]"
                >
                    <div className="flex flex-col gap-2 border-b border-white/[0.07] px-5 py-5 sm:flex-row sm:items-end sm:justify-between md:px-6">
                        <div>
                            <p className="text-xs font-medium tracking-[0.18em] text-cyan-200/70 uppercase">
                                Discography
                            </p>
                            <h2
                                id="albums-heading"
                                className="mt-1 text-xl font-semibold text-white"
                            >
                                Studio albums
                            </h2>
                        </div>
                        <p className="text-sm text-slate-500">
                            Select an album to view its complete standard
                            tracklist.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-[minmax(15rem,0.78fr)_minmax(0,1.22fr)]">
                        <nav
                            aria-label="Studio albums"
                            className="grid content-start gap-2 border-b border-white/[0.07] p-4 sm:grid-cols-2 lg:border-r lg:border-b-0 lg:p-5"
                        >
                            {albums.map((album, index) => {
                                const isSelected =
                                    album.title === selectedAlbum.title;

                                return (
                                    <button
                                        key={album.title}
                                        type="button"
                                        aria-pressed={isSelected}
                                        onClick={() =>
                                            setSelectedAlbumTitle(album.title)
                                        }
                                        className={`group flex min-h-20 items-center gap-3 rounded-xl border p-3 text-left transition focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:outline-none ${
                                            isSelected
                                                ? 'border-cyan-200/25 bg-cyan-200/[0.07] shadow-[0_0_24px_rgba(34,211,238,0.06)]'
                                                : 'border-white/[0.07] bg-white/[0.015] hover:border-white/15 hover:bg-white/[0.04]'
                                        }`}
                                    >
                                        <span
                                            className={`flex size-10 shrink-0 items-center justify-center rounded-lg border ${
                                                isSelected
                                                    ? 'border-cyan-200/20 bg-cyan-200/[0.08] text-cyan-100'
                                                    : 'border-white/[0.08] bg-white/[0.03] text-slate-500 group-hover:text-slate-300'
                                            }`}
                                        >
                                            <Album
                                                className="size-5"
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <span className="min-w-0">
                                            <span className="block truncate text-sm font-medium text-slate-100">
                                                {album.title}
                                            </span>
                                            <span className="mt-1 block text-xs text-slate-500">
                                                {album.year}
                                                <span className="px-1.5 text-slate-700">
                                                    ·
                                                </span>
                                                {album.tracks.length} tracks
                                            </span>
                                        </span>
                                        <span className="ml-auto hidden text-xs text-slate-600 sm:block">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </button>
                                );
                            })}
                        </nav>

                        <article
                            aria-live="polite"
                            className="min-w-0 p-5 md:p-7"
                        >
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
                                <div className="flex size-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-100/10 bg-[radial-gradient(circle_at_35%_25%,rgba(34,211,238,0.2),transparent_38%),linear-gradient(145deg,#202e39,#11141d_65%,#292034)] shadow-[0_12px_40px_rgba(0,0,0,0.28)]">
                                    <Disc3
                                        className="size-14 text-cyan-100/70"
                                        strokeWidth={1}
                                        aria-hidden="true"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-medium tracking-[0.16em] text-cyan-200/65 uppercase">
                                        Studio album · {selectedAlbum.year}
                                    </p>
                                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                                        {selectedAlbum.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-slate-500">
                                        {selectedAlbum.tracks.length} tracks
                                        <span className="px-2 text-slate-700">
                                            /
                                        </span>
                                        Standard edition
                                    </p>
                                </div>
                                <a
                                    href={selectedAlbum.source}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex w-fit items-center gap-1.5 text-xs text-slate-500 transition hover:text-cyan-100"
                                >
                                    Tracklist source
                                    <ArrowUpRight
                                        className="size-3.5"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>

                            <ol className="mt-6 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                                {selectedAlbum.tracks.map((track, index) => (
                                    <li
                                        key={track}
                                        className="flex items-center gap-4 py-3"
                                    >
                                        <span className="w-6 shrink-0 text-right font-mono text-xs text-slate-600">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-white/[0.035] text-slate-500">
                                            <Music2
                                                className="size-3.5"
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <span className="text-sm text-slate-200">
                                            {track}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                            <p className="mt-4 text-xs leading-5 text-slate-600">
                                Standard studio-album editions are shown; bonus
                                tracks, remixes, and anniversary-release extras
                                are excluded.
                            </p>
                        </article>
                    </div>
                </section>

                <section
                    id="members"
                    aria-labelledby="members-heading"
                    className="rounded-2xl border border-white/[0.08] bg-[#0e131c] p-5 md:p-6"
                >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-xs font-medium tracking-[0.18em] text-cyan-200/70 uppercase">
                                Roster
                            </p>
                            <h2
                                id="members-heading"
                                className="mt-1 text-xl font-semibold text-white"
                            >
                                Band members
                            </h2>
                        </div>
                        <p className="text-sm text-slate-500">
                            Current From Zero lineup
                        </p>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                        {members.map((member, index) => (
                            <article
                                key={member.name}
                                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-lg border border-cyan-200/10 bg-cyan-200/[0.04] font-mono text-sm text-cyan-100/75">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <span className="rounded-full border border-emerald-200/10 bg-emerald-200/[0.04] px-2.5 py-1 text-[10px] font-medium tracking-wide text-emerald-100/70 uppercase">
                                        Member
                                    </span>
                                </div>
                                <h3 className="mt-4 font-semibold text-white">
                                    {member.name}
                                </h3>
                                <p className="mt-1 text-sm text-cyan-100/80">
                                    {member.specialty}
                                </p>
                                <p className="mt-2 text-xs text-slate-500">
                                    {member.note}
                                </p>
                            </article>
                        ))}
                    </div>

                    <details className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.015]">
                        <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-slate-400 transition outline-none hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-cyan-200">
                            Notable former members
                        </summary>
                        <div className="grid gap-3 border-t border-white/[0.06] p-4 sm:grid-cols-2">
                            {formerMembers.map((member) => (
                                <div
                                    key={member.name}
                                    className="rounded-lg border border-white/[0.06] bg-black/10 p-3"
                                >
                                    <p className="text-sm font-medium text-slate-200">
                                        {member.name}
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        {member.specialty}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </details>

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.06] pt-4">
                        <a
                            href="https://en.wikipedia.org/wiki/Linkin_Park"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-slate-600 transition hover:text-cyan-100"
                        >
                            Roster reference
                            <ArrowUpRight
                                className="size-3"
                                aria-hidden="true"
                            />
                        </a>
                        <a
                            href="https://linkinpark.com/music"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-slate-600 transition hover:text-cyan-100"
                        >
                            Official Linkin Park music
                            <ArrowUpRight
                                className="size-3"
                                aria-hidden="true"
                            />
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}

function SummaryCard({
    icon: Icon,
    label,
    value,
    detail,
}: {
    icon: typeof Disc3;
    label: string;
    value: string;
    detail: string;
}) {
    return (
        <article className="rounded-xl border border-white/[0.08] bg-[#0e131c] p-4">
            <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-slate-400">{label}</p>
                <Icon className="size-4 text-cyan-100/60" aria-hidden="true" />
            </div>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-white">
                {value}
            </p>
            <p className="mt-1 text-xs text-slate-600">{detail}</p>
        </article>
    );
}

Dashboard.layout = (props: { currentTeam?: { slug: string } | null }) => ({
    breadcrumbs: [
        {
            title: 'Band dashboard',
            href: props.currentTeam ? dashboard(props.currentTeam.slug) : '/',
        },
    ],
});
