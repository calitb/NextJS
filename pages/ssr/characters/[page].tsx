import { CharactersResponse, fetchCharacters } from "../../../api/rickandmorty";

import CharacterListItemView from "../../../components/CharacterListItemView";
import { GetServerSideProps } from "next";
import Head from 'next/head';

export default function CharacterPage({ characters }: CharactersResponse): JSX.Element {
  return (
    <>
      <Head>
        <title>Rick and Morty - Characters</title>
      </Head>
      <div className="flex flex-wrap justify-center">
        {
          characters.map((character) => (
            <CharacterListItemView key={character.id} character={character} link={`/ssr/character/${character.id}`} />
          ))
        }
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<CharactersResponse, { page: string }> = async ({ params }) => {
  if (!params) throw new Error("Missing params");

  const res = await fetchCharacters(params.page);
  if (!res) {
    return { notFound: true };
  }

  return { props: res };
};
