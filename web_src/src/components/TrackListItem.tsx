import React, { useState } from 'react';
import SpotifyIcon from './SpotifyIcon';
import MakeRecommendation from '../containers/MakeRecommendation';

interface IProps {
  playlistIdx: number;
  track: SpotifyApi.PlaylistTrackObject;
}

const TrackListItem = (props: IProps) => {
  const {
    playlistIdx, track
  } = props;

  const [recommendDialog, setRecommendDialog] = useState<boolean>(false);

  return (
    <div>
      <div className="sm:flex bg-black justify-start my-3 p-3"
        style={{backgroundColor: '#130f15'}}>
        <div className="">
          <img className="w-24 h-24" src={ track.track.album.images[0]?.url }/>
        </div>
        <div className="p-2 h-full">
          <span className="text-purple-700 pr-2">
            { track.track.artists.map(a => a.name).join(',') }
          </span>
          <div className="text-lg">
            { track.track.name }
            <a href={track.track.uri}
              target="_blank"
              className="ml-2"><SpotifyIcon/></a>
          </div>
          <div className="sm:flex mt-2">
            <button className="mr-2" onClick={() => setRecommendDialog(!recommendDialog)}>
              Recommend to a friend
            </button>
            <button className="mr-2">
              Add to your own playlist
            </button>
          </div>
        </div>
      </div>
      { recommendDialog && 
      <MakeRecommendation 
        track={props.track.track} 
        resolve={() => setRecommendDialog(false)} /> }
    </div>
  )
}
export default TrackListItem;
