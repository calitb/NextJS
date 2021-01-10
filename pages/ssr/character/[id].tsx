import { CharacterResponse, fetchCharacter } from "../../../api/rickandmorty";

import { GetServerSideProps } from "next";
import Head from 'next/head';

export default function CharacterPage({ character }: CharacterResponse): JSX.Element {
  const { name, image, origin, species } = character;
  return (
    <>
      <Head>
        <title>Rick and Morty - {name}</title>
      </Head>
      <div className="mt-4 py-8 px-8 max-w-sm mx-auto bg-blue-200 rounded-xl shadow-md space-y-2">
        <img className="block mx-auto h-24 rounded-full " src={image} alt="Woman's Face" />
        <div className="text-center space-y-2 ">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {name}
            </p>
            <p className="text-gray-500 font-medium">
              {species}
            </p>
            <p className="text-gray-500 font-medium">
              {origin}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<CharacterResponse, { id: string }> = async ({ params }) => {
  if (!params) throw new Error("Missing params");

  const res = await fetchCharacter(params.id);
  if (!res) {
    return { notFound: true };
  }

  return { props: res };
};
