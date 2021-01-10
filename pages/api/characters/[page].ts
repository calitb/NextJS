import { Character, fetchCharacters } from '../../../api/rickandmorty';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse<Character[]>) => {
  const {
    query: { page },
  } = req;

  const { characters } = await fetchCharacters(page as string);
  res.status(200).json(characters);
};
