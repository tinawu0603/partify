
export interface PlaylistState {
  playlistsSearchResults: SpotifyApi.PlaylistObjectSimplified[];
  playlistsSearchQuery: string;
  playlistsSearchLoading: boolean;

  playlistDetailId?: string;
  playlistDetailPlaylist?: SpotifyApi.PlaylistObjectFull;
  playlistDetailLoading: boolean;
}

export interface BasicInfo {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Recommendation {
  _id: string;
  profile: {
    id: string;
    name: string;
  },
  track: SpotifyApi.TrackObjectFull;
}

export interface Profile {
  _id: string;
  name: string;
  joined: string;
  isPromoter: boolean;
  friends: BasicInfo[];
  playlists: BasicInfo[];
  favoriteTracks: BasicInfo[];
  favoriteArtists: BasicInfo[];
  favoriteAlbums: BasicInfo[];
  favoriteGenres: BasicInfo[];
}

export interface ProfileState {
  selectedProfile?: Profile;
  profile?: Profile;
  loggedIn: boolean;
  logInError: string;
}

export interface ActionType {
  type: string;
  payload: any;
}

import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

// T is State
export type ThunkActionType<T> = ThunkAction<void, T, unknown, Action<string>>;
