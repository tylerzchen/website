export const runtime = 'nodejs'
export const revalidate = 7200

import Parser from 'rss-parser'
import Link from 'next/link'

type SubstackFeedItem = {
    title?: string
    link?: string
    isoDate?: string
    contentSnippet?: string
}

type SubstackFeed = {
    title?: string
    items: SubstackFeedItem[]
}

const SUBSTACK_FEED_URL: string = 'https://tylerzchen.substack.com/feed'

async function getSubstackFeed(): Promise<SubstackFeed | null> {
    const parser = new Parser<SubstackFeedItem, SubstackFeed>()
    try {
        const res = await fetch(SUBSTACK_FEED_URL, { next: { revalidate } })
        if (!res.ok) {
            return null
        }
        const xml = await res.text()
        const feed = await parser.parseString(xml)
        return {
            title: feed.title,
            items: Array.isArray(feed.items) ? feed.items : [],
        }
    } catch {
        return null
    }
}

function formatDate(isoDate?: string): string | null {
    if (!isoDate) return null
    const date = new Date(isoDate)
    if (isNaN(date.getTime())) return null
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    })
}

export default async function Writing() {
    const feed = await getSubstackFeed()

    return (
        <div>
            <div className="page-container">
                <div className="mb-12">
                    <h1 className="heading-1 mb-6">
                        Writing
                    </h1>
                    <div>
                        <Link href="/writing/bookshelf" className="group block">
                            <div className="heading-2 group-hover:underline">
                                Bookshelf
                            </div>
                            <div className="meta-text mt-1">
                                Last Updated: November 18th, 2025
                            </div>
                            <p className="body-text mt-2">
                                Books I&apos;m currently reading and books I love. Always open to recommendations!
                            </p>
                        </Link>
                    </div>
                </div>

                {!feed && (
                    <p className="text-left meta-text">Unable to load Substack posts right now.</p>
                )}

                {feed && (
                    <div>

                        {feed.items.length === 0 ? (
                            <p className="text-left meta-text"></p>
                        ) : (
                            <ul className="space-y-10">
                                {feed.items.map((item) => {
                                    const href = item.link ?? '#'
                                    const date = formatDate(item.isoDate)
                                    return (
                                        <li key={href} className="group">
                                            <a href={href} className="block">
                                                <div className="heading-2 group-hover:underline">
                                                    {item.title ?? 'Untitled post'}
                                                </div>
                                                {date && (
                                                    <div className="meta-text mt-1">{date}</div>
                                                )}
                                                {item.contentSnippet && (
                                                    <p className="body-text mt-2 line-clamp-3">
                                                        {item.contentSnippet}
                                                    </p>
                                                )}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        )}

                        <div className="mt-8">
                            <a
                                href={SUBSTACK_FEED_URL.replace(/\/feed$/, '')}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                my substack!
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}