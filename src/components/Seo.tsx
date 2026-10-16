import { Helmet } from "react-helmet-async";

const SITE_URL = "https://sauravcodes.vercel.app";
const SITE_NAME = "Saurav Singh";
const DEFAULT_DESCRIPTION =
  "Saurav Singh is a Frontend Developer with 3+ years of experience building web apps with React, Next.js, TypeScript, Shopify, and React Native.";

interface SeoProps {
  /** Page name, shown before "| Saurav Singh" in the browser title */
  title: string;
  /** Meta description; falls back to the site-wide description */
  description?: string;
  /** Route path, e.g. "/work", used to build the canonical URL */
  path: string;
  /** Social preview image, a path on this site or a full URL */
  image?: string;
}

/** Sets the title, description, canonical and social tags for one page. */
export default function Seo({ title, description = DEFAULT_DESCRIPTION, path, image = "/logo.png" }: SeoProps) {
  const fullTitle = title === "Home" ? `${SITE_NAME} - Frontend Developer` : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
