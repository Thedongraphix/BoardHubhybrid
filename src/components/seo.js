import React from "react";
import Head from "next/head";

export default function SEO({
  description = "startup product landing page",
  author = "Author",
  meta = [],
  title = "startup landing title",
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      name: `og:title`,
      content: title,
    },
    {
      name: `og:description`,
      content: description,
    },
    {
      name: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}
