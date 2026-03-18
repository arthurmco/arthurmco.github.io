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

const extractSourceInfo = (source: string): [string, number] => {
    if (source.startsWith("RLF Especial")) {
        const sinfo = source.toLowerCase().split(" ");
        return ["rlfe", parseInt(sinfo[2])]
    }

    if (source.startsWith("RLF") || source.startsWith("BF")) {
        const sinfo = source.toLowerCase().split("vol.");
        return [sinfo[0].trim(), parseInt(sinfo[1])]
    }

    if (source.startsWith("COF")) {
        const sinfo = source.toLowerCase().split("v");
        return [sinfo[0].trim(), parseInt(sinfo[1])]
    }

    return ["unknown", 0];
}

const anthologyMap: Record<string, Record<number, string>> = {
    "rlf": {
        13: "2026-03-13"
    },
    "rlfe": {},
    "bf": {},
    "cof": {}
};

function launchFromSource(source: string): Date {
    const [anthology, volume] = extractSourceInfo(source);

    if (!anthologyMap[anthology]) {
        //console.error("no anthology data for " + source);
        return new Date();
    }

    const dstr = anthologyMap[anthology][volume];
    if (!dstr) {
        //console.warn("unknown date for " + source);
        return new Date();
    }

    return new Date(dstr);
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
