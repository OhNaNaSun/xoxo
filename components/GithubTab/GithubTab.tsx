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
export default function GithubTab() {
  const [data, isLoading] = useFetch(() => axios.get('https://api.github.com/users/OhNaNaSun/repos'));
  const repoList = data?.sort((a, b) => new Date(b.pushed_at).valueOf() - new Date(a.pushed_at).valueOf());
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
                      {topics.map((topic) => (
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
