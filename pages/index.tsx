import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { AllPostsDataType } from '../types/types';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
};

type HomeProps = {
  allPostsData: AllPostsDataType[];
};
export default function Home({ allPostsData }: HomeProps) {
  const { t } = useTranslation('home');
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ol className={utilStyles.list}>
          <li className={utilStyles.listItem} key="1">
            <Link href="/profile/gh">
              <a>{t('link')}</a>
            </Link>
          </li>
          {allPostsData.map(({ id, date, title, read }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} /> · {read} min read
              </small>
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  );
}
