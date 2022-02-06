import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import ReactPlayer from 'react-player/youtube';
interface MediaCardProps {
  description;
  publishedAt: string;
  channelId: string;
  title: string;
  videoId: string;
  isLoading: boolean;
}
export default function MediaCard({ description, publishedAt, channelId, title, videoId, isLoading }: MediaCardProps) {
  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardHeader
        avatar={
          isLoading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar sx={{ bgcolor: 'transparent' }} aria-label="youtube">
              🌟
            </Avatar>
          )
        }
        title={isLoading ? <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} /> : title}
        subheader={isLoading ? <Skeleton animation="wave" height={10} width="40%" /> : publishedAt}
      />
      {isLoading ? (
        <Skeleton sx={{ height: 360 }} animation="wave" variant="rectangular" />
      ) : (
        <ReactPlayer style={{ margin: '0 auto' }} url={`https://www.youtube.com/watch?v=${videoId}`} />
      )}
      <CardContent sx={{ paddingLeft: '2rem' }}>
        {isLoading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <>
            <Typography component="span" variant="body2" color="text.secondary">
              {description}
            </Typography>
            <br />
            <Link color="primary" variant="caption" href={`https://www.youtube.com/watch?v=${videoId}`}>
              WATCH NOW
            </Link>{' '}
            <Link
              color="primary"
              variant="caption"
              href={`https://www.youtube.com/channel/${channelId}?sub_confirmation=1`}
            >
              SUBSCRIBE
            </Link>
          </>
        )}
      </CardContent>
    </Card>
  );
}
