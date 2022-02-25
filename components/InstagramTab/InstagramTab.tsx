import useSWR from 'swr';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
interface DataType {
  data: {
    id: string;
    media_url: string;
  }[];
}
const ImageGalleryList = styled('ul')(({ theme }) => ({
  display: 'grid',
  padding: 0,
  margin: theme.spacing(0, 4),
  gap: 3,
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

export default function InstagramTab() {
  const { data } = useSWR<DataType>('/api/igmedias', (url) => fetch(url as string).then((res) => res.json()));
  const imgList = data ? data.data.filter(({ media_url }) => !media_url.includes('.mp4')) : [];
  const myLoader = (src: string) => {
    return `${src}`;
  };
  return (
    <ImageGalleryList>
      {imgList.map(({ id, media_url }) => (
        <ImageListItem key={id}>
          <Image
            src={media_url}
            height={300}
            width={200}
            objectFit="cover"
            loader={() => myLoader(media_url)}
            alt="ohnana instagram"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88eBNPQAIoQM1zj3TmwAAAABJRU5ErkJggg=="
          />
        </ImageListItem>
      ))}
    </ImageGalleryList>
  );
}
