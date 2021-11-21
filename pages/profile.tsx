import Link from 'next/link';
import Image from 'next/image';
export default function Profile() {
  return (
    <>
      <h1>About Me</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/images/profile.png" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="NaNa"
      />
    </>
  );
}
