import { CharactersResponse, fetchCharacters } from "../../api/rickandmorty";

import CharacterListItemView from "../../components/CharacterListItemView";
import { GetServerSideProps } from "next";
import Head from 'next/head';

export default function CharacterPage({ characters }: CharactersResponse): JSX.Element {
  return (
    <>
      <Head>
        <title>Rick and Morty - Characters</title>
      </Head>
      <div className="flex flex-wrap">
        {
          characters.map((character) => (
            <CharacterListItemView key={character.id} character={character} link={`/character_ssr/${character.id}`} />
          ))
        }
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<CharactersResponse> = async () => {
  const res = await fetchCharacters("1");
  if (!res) {
    return { notFound: true };
  }

  return { props: res };
};