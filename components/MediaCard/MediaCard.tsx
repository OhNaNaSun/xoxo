import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
export default function MediaCard({ description, publishedAt, channelId, defaultThumbnail, title, videoId }) {
  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'transparent' }} aria-label="youtube">
            🌟
          </Avatar>
        }
        title={title}
        subheader={publishedAt}
      />
      <CardMedia component="img" height="200" image={defaultThumbnail.url} alt={title} />
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
