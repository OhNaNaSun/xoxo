import { Fragment } from 'react';
import MediaCard from '../MediaCard/MediaCard';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function YoububeTab() {
  const [data, isLoading] = useFetch(() => {
    return axios.get(
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PL3NGRQjfpiMNBKxKq-O8WcM0FLVO4GYP3&key=AIzaSyD2eP8D5vGdzoWKJX8CwpR5gOKUhVsnimk'
    );
  });
  const videoList = data?.items.slice(0, 5).map((i: { snippet: unknown }) => i.snippet);
  return (
    <div>
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
          <CircularProgress size="20px" />
        </Box>
      ) : (
        videoList?.map(({ position, thumbnails, channelId, description, publishedAt, title, resourceId }) => {
          const { videoId } = resourceId;
          const defaultThumbnail = thumbnails.high;
          return (
            <Fragment key={position}>
              <MediaCard
                {...{
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
