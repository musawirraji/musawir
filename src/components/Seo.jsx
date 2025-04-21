import { Helmet } from 'react-helmet';

function SEO() {
  return (
    <Helmet>
      <title>Musawir Raji's Portfolio</title>
      <meta
        name='description'
        content='Experienced React, Webflow & Next.js Developer specializing in creating responsive, performant websites and web applications.'
      />
      <meta
        name='keywords'
        content='Webflow, Next.js, React, Web Development, Frontend Development'
      />
      <meta name='author' content='Musawir Raji' />

      {/* OpenGraph */}
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <meta property='og:url' content='https://www.musawirraji.pro/' />
      <meta property='og:site_name' content="Musawir Raji's Portfolio" />
      <meta
        property='og:title'
        content="Musawir Raji's Portfolio - React, Webflow & Next.js Developer"
      />
      <meta
        property='og:description'
        content='Experienced React, Webflow & Next.js Developer...'
      />

      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content="Musawir Raji's Portfolio - React, Webflow & Next.js Developer"
      />
      <meta
        name='twitter:description'
        content='Experienced React, Webflow & Next.js Developer...'
      />
      <meta name='twitter:image' content='https://x.com/MusawirRaji' />
      <meta name='twitter:creator' content='@MusawirRaji' />
      <meta property='twitter:image:alt' content='Musawir Raji' />

      {/* Robots */}
      <meta name='robots' content='index, follow' />
      <meta
        name='googlebot'
        content='index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1'
      />
    </Helmet>
  );
}

export default SEO;
