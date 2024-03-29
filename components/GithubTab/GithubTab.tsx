import { useEffect, useState, Fragment } from 'react';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import useSWR from 'swr';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import { GithubDataType } from '../../types/types';
export default function GithubTab() {
  const { data: resData } = useSWR<GithubDataType>('/api/ghrepos', (url) =>
    fetch(url as string).then((res) => res.json())
  );
  const [postList, setPostList] = useState(
    Array(5)
      .fill(null)
      .map((_, index) => {
        return { id: index };
      })
  );
  useEffect(() => {
    resData?.data && setPostList(resData.data);
  }, [resData]);
  const isLoading = !resData;
  return (
    <div>
      {resData?.message ? (
        <Alert severity="error">{resData.message}</Alert>
      ) : (
        postList.map(({ id, html_url, full_name, pushed_at, topics, description }) => {
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
                          {topics?.map((topic: string) => (
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
        })
      )}
    </div>
  );
}
