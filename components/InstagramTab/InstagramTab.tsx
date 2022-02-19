import useSWR from 'swr';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
interface DataType {
  data: {
    id: string;
    media_url: string;
  }[];
}

export default function InstagramTab() {
  const { data } = useSWR<DataType>('./api/igmedias', (url) => fetch(url as string).then((res) => res.json()));
  const imgList = data ? data.data.filter(({ media_url }) => !media_url.includes('.mp4')) : [];
  const myLoader = (src: string) => {
    return `${src}`;
  };
  return (
    <ImageList cols={3} rowHeight={250} sx={{ overflowY: 'hidden' }}>
      {imgList.map(({ id, media_url }) => (
        <ImageListItem key={id}>
          <Image
            src={media_url}
            layout="fill"
            objectFit="cover"
            loader={() => myLoader(media_url)}
            alt="ohnana instagram"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88eBNPQAIoQM1zj3TmwAAAABJRU5ErkJggg=="
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
