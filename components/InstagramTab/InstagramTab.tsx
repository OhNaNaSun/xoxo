import useSWR from 'swr';
import ImageList from '@mui/material/ImageList';
import Image from 'next/image';
import ImageListItem from '@mui/material/ImageListItem';
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function InstagramTab() {
  const { data } = useSWR('./api/igmedias', fetcher);
  const imgList = data?.data.filter(({ media_url }) => !media_url.includes('.mp4'));
  if (!imgList) return null;
  console.log(imgList);
  // alert();
  return (
    <ImageList cols={3} rowHeight={250} sx={{ overflowY: 'hidden' }}>
      {imgList?.map(({ id, media_url }) => (
        <ImageListItem key={id}>
          <img
            src={`${media_url}&h=250&fit=crop&auto=format`}
            srcSet={`${media_url}&h=250&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
