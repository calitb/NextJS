import Head from "next/head";
import Link from "next/link";

export default function Page404(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Rick and Morty - Page not found</title>
      </Head>
      <div className="h-full bg-canvas flex flex-col items-center pb-16 flex-grow">
        <header className="flex flex-col items-center pt-20 md:pt-36 pb-6 px-5 sm:px-10">
          <h1 className="text-center uppercase text-green-600 text-page-header-title">
            404
          </h1>
          <h2 className="text-center mt-2 md:max-w-2.5xl text-page-header-subtitle">
            Page not found
          </h2>
        </header>

        <main className="md:max-w-2xl flex flex-col items-center px-5 md:px-0">
          <div className="flex flex-col items-center text-center text-404-description">
            <div>
              Sorry we couldn’t find the page you’re looking for. Perhaps you’ve
              mistyped the URL? Or the page might be unavailable.
            </div>

            <div className="mt-8 w-fit">
              <Link href="/character">
                <a
                  title="Go to Homepage"
                  className="inline-flex w-full px-4 py-2 rounded-full items-center justify-center text-center uppercase bg-green-600 text-white hover:shadow-green w-fit"
                >
                  Go to Homepage
                </a>
              </Link>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};