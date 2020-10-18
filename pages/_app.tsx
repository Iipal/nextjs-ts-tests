import NextNporgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNporgress color='#87566e' startPosition='0.2' stopDelayMs='200' height='2' />
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </>
  );
}
