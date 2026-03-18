export type InUniverseTimeInformation = {
    universe: string;
    year: number;
    month?: number;
}

export interface RawStory {
    name: string;
    url: string;
    internal_time: InUniverseTimeInformation
}

export interface RawShortStory extends RawStory {
    source: string;
    comment?: string;
}

export interface RawBook extends RawStory {
    date: string;
}

export type Book = {
    name: string;
    launchDate: Date;
    url: URL
}

