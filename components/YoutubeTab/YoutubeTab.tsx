import { Fragment } from 'react';
import MediaCard from '../MediaCard/MediaCard';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import { YoutubeDataType } from '../../types/types';
export default function YoububeTab() {
  const [data, isLoading] = useFetch(() => {
    return axios.get(
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PL3NGRQjfpiMNBKxKq-O8WcM0FLVO4GYP3&key=AIzaSyD2eP8D5vGdzoWKJX8CwpR5gOKUhVsnimk'
    );
  }) as [YoutubeDataType, boolean];
  const videoList = data?.items.slice(0, 5).map((i) => i.snippet);
  return (
    <div>
      {videoList?.map(({ position, thumbnails, channelId, description, publishedAt, title, resourceId }) => {
        const { videoId } = resourceId;
        const defaultThumbnail = thumbnails.high;
        return (
          <Fragment key={position}>
            <MediaCard
              {...{
                isLoading,
                description,
                publishedAt,
                defaultThumbnail,
                channelId,
                title,
                videoId,
              }}
            />
            <br />
          </Fragment>
        );
      })}
    </div>
  );
}
