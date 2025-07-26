import Head from 'next/head'

interface SNSProps {
  title?: string
  description?: string
  url?: string
  image?: string
}

export default function SeoHead({
  title = 'NEWWAY BREAD',
  description = '뉴웨이교회 성경어플입니다..',
  url = 'https://yjineey.github.io/nw-bread-front/',
  image = 'https://cdn.imweb.me/upload/S2023020869d0205dba053/94d155e4d81c7.png',
}: SNSProps) {
  return (
    <Head>
      <title>{title}</title>

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="뉴웨이교회" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  )
}
