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

export interface ShortStory extends RawStory {
    source: string;
    comment?: string;
}

export interface BookRaw extends RawStory {
    date: string;
}

export type Book = {
    name: string;
    launchDate: Date;
    url: URL
}
