import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: "article" | "website";
  breadcrumbs?: BreadcrumbItem[];
}

const SITE_URL = "https://fiber-glow-learn.lovable.app";
const SITE_NAME = "Fiber Optic Guide";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a1ea90f4-fb01-49c0-a2e8-3de21337973c/id-preview-a3fa1499--afedd358-442c-41b0-b7a0-3398aa174f58.lovable.app-1774067308080.png";

const SEOHead = ({ title, description, path, type = "article" }: SEOHeadProps) => {
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type === "website" ? "WebSite" : "Article",
    name: fullTitle,
    headline: title,
    description,
    url: canonical,
    image: OG_IMAGE,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(type === "website" && {
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    }),
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEOHead;
