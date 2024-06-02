import React from "react";
import Head from "next/head";

const Seo = ({
  title = "Abhishek Singh",
  description = "Hey! I am Abhishek Singh, a Senior Software Engineer from India.",
  OGImage = "/images/logo.png",
  OGType = "website",
  canonicalUrl = "https://abhidev.com/",
  publishedDate = new Date(),
  children,
}) => {
  return (
    <React.Fragment>
      <Head>
        {/* basic metadata */}
        <title>{`${title} | Abhishek Singh`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Abhishek Singh" />
        <meta name="author" content="abhishek" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/images/icon.ico" type="image/x-icon" />

        {/* twitter metadata */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@abhish655" />
        <meta name="twitter:creator" content="@abhis655" />
        <meta name="twitter:title" content="Abhishek Singh" />
        <meta
          name="twitter:description"
          content="Hey! I am Abhishek Singh, a Senior Software Engineer from India."
        />
        <meta
          name="twitter:image"
          content="/images/abhishekProfile.png"
        />

        {/* canonical link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* open graph metadata */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={OGType} />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OGImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:section" content={title} />
        <meta property="article:published_time" content={publishedDate} />
        {children}
      </Head>
    </React.Fragment>
  );
};

export default Seo;
