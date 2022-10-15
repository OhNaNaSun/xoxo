import { Fragment, useState, useEffect } from 'react';
import MediaCard from '../MediaCard/MediaCard';
import useSWR from 'swr';
import Alert from '@mui/material/Alert';
import { YoutubeDataType, YoutubeItemType } from '../../types/types';
export default function YoububeTab() {
  const [videoList, setVideoList] = useState<YoutubeItemType>(
    Array(2)
      .fill(null)
      .map((_, index) => {
        return { position: `${index}` };
      })
  );
  const { data } = useSWR<YoutubeDataType>('/api/ytvideos', (url) => fetch(url as string).then((res) => res.json()));
  useEffect(() => {
    data?.data && setVideoList(data.data);
  }, [data]);
  const isLoading = !data;
  return (
    <div>
      {data?.message ? (
        <Alert severity="error">{data.message}</Alert>
      ) : (
        videoList?.map(
          ({
            position,
            thumbnails = { high: { url: '' } },
            channelId,
            description,
            publishedAt,
            title,
            resourceId = { videoId: '' },
          }) => {
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
          }
        )
      )}
    </div>
  );
}
