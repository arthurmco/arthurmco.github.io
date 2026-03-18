import type { RawBook, RawShortStory } from "./Book";

export type StoryInfo =
    | { type: "book" }
    | { type: "shortstory"; comment?: string; source: string }

export type Story = {
    name: string;
    launchDate: Date;
    url: URL;
    info: StoryInfo
    inUniverse: {
        universe: string;
        storyDate: Date;
    }
}

function launchFromSource(source: string): Date {
    return new Date();
}

function makeInternalDate(year: number, month: number | undefined) {
    const m = month ? month - 1 : 0;
    return new Date(year, m, 1);
}

export class StoryParser {
    public static fromShortStory(s: RawShortStory): Story {
        return {
            name: s.name,
            launchDate: launchFromSource(s.source),
            url: new URL(s.url),
            info: {
                type: "shortstory",
                comment: s.comment,
                source: s.source
            },
            inUniverse: {
                universe: s.internal_time.universe,
                storyDate: makeInternalDate(s.internal_time.year, s.internal_time.month)
            }
        } as Story
    }

    public static fromBook(s: RawBook): Story {
        return {
            name: s.name,
            launchDate: new Date(s.date),
            url: new URL(s.url),
            info: {
                type: "book",
            },
            inUniverse: {
                universe: s.internal_time.universe,
                storyDate: makeInternalDate(s.internal_time.year, s.internal_time.month)
            }
        } as Story
    }

}
