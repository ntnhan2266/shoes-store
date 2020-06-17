import React from 'react';
import Head from 'next/head';
import configs from '@configs/index';

interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
}

const MetaTag: React.FC<Props> = (props: Props): React.ReactElement => {
  const {
    title, description, image, url,
  } = props;
  return (
    <Head>
      {/* <!-- COMMON TAGS --> */}
      <meta charSet="utf-8" />
      <title>{configs.SITE_NAME}</title>
      {/* <!-- Search Engine --> */}
      <meta name="description" content={title} />
      <meta name="image" content={image} />
      {/* <!-- Schema.org for Google --> */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:url" content={url} />
      <meta name="og:site_name" content={configs.SITE_NAME} />
      <meta name="og:locale" content="vi_VN" />
      <meta name="fb:app_id" content={configs.FB_APP_ID} />
      <meta name="og:type" content="website" />
    </Head>
  );
};

export default MetaTag;
