import { Fragment } from 'react';
import MediaCard from '../MediaCard/MediaCard';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import { YoutubeDataType } from '../../types/types';
export default function YoububeTab() {
  const [data, isLoading] = useFetch(() => {
    return axios.get('./api/ytvideos');
  }) as [YoutubeDataType, boolean];
  return (
    <div>
      {data?.map(({ position, thumbnails, channelId, description, publishedAt, title, resourceId }) => {
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
