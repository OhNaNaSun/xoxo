import { Fragment } from 'react';
import MediaCard from '../MediaCard/MediaCard';
import useSWR from 'swr';
import Alert from '@mui/material/Alert';
import { YoutubeDataType } from '../../types/types';
export default function YoububeTab() {
  const { data } = useSWR<YoutubeDataType>('/api/ytvideos', (url) => fetch(url as string).then((res) => res.json()));
  const isLoading = !data;
  return (
    <div>
      {data?.message ? (
        <Alert severity="error">{data.message}</Alert>
      ) : (
        data?.data?.map(({ position, thumbnails, channelId, description, publishedAt, title, resourceId }) => {
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
        })
      )}
    </div>
  );
}
