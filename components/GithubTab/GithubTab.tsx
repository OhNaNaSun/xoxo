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
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
type DataType = {
  id: string;
  html_url: string;
  pushed_at: string;
  full_name: string;
  topics: string[];
  description: string;
}[];
export default function GithubTab() {
  const [data, isLoading] = useFetch(() => axios.get<DataType>('https://api.github.com/users/OhNaNaSun/repos')) as [
    DataType,
    boolean
  ];
  const repoList = data?.sort(
    (a: { pushed_at: string }, b: { pushed_at: string }) =>
      new Date(b.pushed_at).valueOf() - new Date(a.pushed_at).valueOf()
  );
  return (
    <div>
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
          <CircularProgress size="20px" />
        </Box>
      ) : (
        repoList?.map(({ id, html_url, full_name, pushed_at, topics, description }) => {
          return (
            <Fragment key={id}>
              <Card sx={{ maxWidth: 700 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: 'transparent' }} aria-label="github">
                      🌟
                    </Avatar>
                  }
                  action={
                    <Link className="right" color="primary" variant="caption" href={html_url}>
                      CHECK
                    </Link>
                  }
                  title={full_name}
                  subheader={new Date(pushed_at).toLocaleDateString()}
                />
                <CardContent>
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
                </CardContent>
              </Card>
              <br />
            </Fragment>
          );
        })
      )}
    </div>
  );
}
