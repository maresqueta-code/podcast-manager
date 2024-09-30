/**
 * Podcast item types
 */
export interface PodcastResponse {
  resultCount: number;
  results: Episode[];
}

export interface Episode {
  wrapperType: WrapperType;
  kind: Kind;
  artistId?: number;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: Name;
  trackName: string;
  collectionCensoredName?: Name;
  trackCensoredName?: Name;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: Date;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: Country;
  currency?: string;
  primaryGenreName?: PrimaryGenreNameEnum;
  contentAdvisoryRating: ContentAdvisoryRating;
  artworkUrl600: string;
  genreIds?: string[];
  genres: Array<GenreClass | string>;
  episodeUrl?: string;
  episodeFileExtension?: EpisodeFileExtension;
  artworkUrl160?: string;
  episodeContentType?: EpisodeContentType;
  artistIds?: number[];
  closedCaptioning?: ClosedCaptioning;
  description?: string;
  episodeGuid?: string;
  shortDescription?: string;
  previewUrl?: string;
}

export enum ClosedCaptioning {
  None = 'none',
}

export enum Name {
  TheJoeBuddenPodcast = 'The Joe Budden Podcast',
}

export enum ContentAdvisoryRating {
  Clean = 'Clean',
  Explicit = 'Explicit',
}

export enum Country {
  Usa = 'USA',
}

export enum EpisodeContentType {
  Audio = 'audio',
}

export enum EpisodeFileExtension {
  Mp3 = 'mp3',
}

export interface GenreClass {
  name: PrimaryGenreNameEnum;
  id: string;
}

export enum PrimaryGenreNameEnum {
  Music = 'Music',
}

export enum Kind {
  Podcast = 'podcast',
  PodcastEpisode = 'podcast-episode',
}

export enum WrapperType {
  PodcastEpisode = 'podcastEpisode',
  Track = 'track',
}
