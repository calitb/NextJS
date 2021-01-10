import { CharacterResponse, fetchCharacter, fetchCharacters } from "../../../api/rickandmorty";
import { GetStaticPaths, GetStaticProps } from "next";

import CharacterView from "../../../components/CharacterView";
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function CharacterPage({ character }: CharacterResponse): JSX.Element {
  const router = useRouter()

  // si fallback es true, se muestra esto mientras está cargando la data con getStaticProps
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>Rick and Morty - {character.name}</title>
      </Head>
      <CharacterView character={character} />
    </>
  );
};

export const getStaticProps: GetStaticProps<CharacterResponse, { id: string }> = async ({ params }) => {
  if (!params) throw new Error("Missing params");

  const res = await fetchCharacter(params.id);
  if (!res) {
    return { notFound: true };
  }

  return { props: res };
};

const MAX = 20;
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetchCharacters("1");

  let paths = []
  for (let i = 1; i <= Math.min(MAX, res.apiInfo.count); i++) {
    const id = "" + i;
    paths.push({ params: { id } })
  }

  return {
    paths, // rutas que se deben generar estáticamente al hacer el build
    fallback: true, // si es false va a mostrar 404 si la pagina no fue generada en el build
  };
};
