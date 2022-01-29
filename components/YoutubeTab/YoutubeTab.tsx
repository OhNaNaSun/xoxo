import { useEffect, useState, Fragment } from 'react';
import MediaCard from '../MediaCard/MediaCard';

export default function YoububeTab() {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    void (async (): Promise<unknown> => {
      try {
        const res = await fetch(
          'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PL3NGRQjfpiMNBKxKq-O8WcM0FLVO4GYP3&key=AIzaSyD2eP8D5vGdzoWKJX8CwpR5gOKUhVsnimk'
        );
        const data = await res.json();
        if (data.items) {
          setVideoList(data.items.slice(0, 5).map((i: { snippet: unknown }) => i.snippet));
        }
      } catch {}
    })();
  }, []);
  return (
    <div>
      {videoList.map(({ position, thumbnails, channelId, description, publishedAt, title, resourceId }) => {
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
      })}
    </div>
  );
}
