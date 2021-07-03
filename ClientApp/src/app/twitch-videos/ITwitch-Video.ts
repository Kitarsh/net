export interface ITwitchVideo {
    title: string;
    description: string;
    url: URL;
    thumbnail_url: string;
}

export class ITwitchVideoExtention {
    public clearThumbnailUrl (twitchVideo: ITwitchVideo): void {
        twitchVideo.thumbnail_url = twitchVideo.thumbnail_url.replace("%{width}", "480");
        twitchVideo.thumbnail_url = twitchVideo.thumbnail_url.replace("%{height}", "360");
    }
}