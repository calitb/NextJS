import { CharactersResponse, fetchCharacters } from "../../../api/rickandmorty";
import { GetStaticPaths, GetStaticProps } from "next";

import CharacterListItemView from "../../../components/CharacterListItemView";
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function CharacterPage({ characters }: CharactersResponse): JSX.Element {
  const router = useRouter()

  // si fallback es true, se muestra esto mientras está cargando la data con getStaticProps
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Rick and Morty - Characters</title>
      </Head>
      <div className="flex flex-wrap">
        {
          characters.map((character) => (
            <CharacterListItemView key={character.id} character={character} link={`/ssg/character/${character.id}`} />
          ))
        }
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<CharactersResponse, { page: string }> = async ({ params }) => {
  if (!params) throw new Error("Missing params");

  const res = await fetchCharacters(params.page);
  if (!res) {
    return { notFound: true };
  }

  return { props: res };
};


const MAX = 5;
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetchCharacters("2");

  let paths = []
  for (let i = 1; i <= Math.min(MAX, res.apiInfo.pages); i++) {
    const page = "" + i;
    paths.push({ params: { page } })
  }

  return {
    paths, // rutas que se deben generar estáticamente al hacer el build
    fallback: true, // si es false va a mostrar 404 si la pagina no fue generada en el build
  };
};
