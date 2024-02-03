import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Helisson Sousa é um desenvolvedor web front-end, engenheiro e administrador, que adora usar o conhecimento para criar soluções"
      />
      <meta
        name="keywords"
        content="helisson sousa, helisson, sousa, desenvolvedor web portfolio, helisson desenvolvedor web, helisson desenvolvedor, helisson sousa portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Portfolio Helisson Sousa" />
      <meta
        property="og:description"
        content="Um desenvolvedor front-end criando soluções."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Helisson Sousa',
};
