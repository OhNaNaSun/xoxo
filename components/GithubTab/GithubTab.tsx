import { Fragment } from 'react';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import useFetch from '../../hooks/useFetch';
import Skeleton from '@mui/material/Skeleton';
type DataType = {
  id: string;
  html_url: string;
  pushed_at: string;
  full_name: string;
  topics: string[];
  description: string;
}[];
export default function GithubTab() {
  const [data, isLoading] = useFetch(() => axios.get('./api/ghrepos')) as [DataType, boolean];
  const repoList = data
    ? data.sort(
        (a: { pushed_at: string }, b: { pushed_at: string }) =>
          new Date(b.pushed_at).valueOf() - new Date(a.pushed_at).valueOf()
      )
    : [];
  return (
    <div>
      {repoList.map(({ id, html_url, full_name, pushed_at, topics, description }) => {
        return (
          <Fragment key={id}>
            <Card sx={{ maxWidth: 700 }}>
              <CardHeader
                avatar={
                  isLoading ? (
                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                  ) : (
                    <Avatar sx={{ bgcolor: 'transparent' }} aria-label="github">
                      🌟
                    </Avatar>
                  )
                }
                action={
                  isLoading ? null : (
                    <Link className="right" color="primary" variant="caption" href={html_url}>
                      CHECK
                    </Link>
                  )
                }
                title={
                  isLoading ? (
                    <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                  ) : (
                    full_name
                  )
                }
                subheader={
                  isLoading ? (
                    <Skeleton animation="wave" height={10} width="40%" />
                  ) : (
                    new Date(pushed_at).toLocaleDateString()
                  )
                }
              />
              <CardContent>
                {isLoading ? (
                  <>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                  </>
                ) : (
                  <>
                    <Typography component="div" sx={{ mb: 1.5 }} color="text.secondary">
                      <Stack direction="row" spacing={1}>
                        {topics.map((topic: string) => (
                          <Chip size="small" key={topic} label={topic} />
                        ))}
                      </Stack>
                    </Typography>
                    <Typography variant="body2">
                      {description}
                      <br />
                    </Typography>
                  </>
                )}
              </CardContent>
            </Card>
            <br />
          </Fragment>
        );
      })}
    </div>
  );
}
