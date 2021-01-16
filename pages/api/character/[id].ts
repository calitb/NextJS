import { Character, fetchCharacter } from '../../../lib/rickandmorty';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse<Character>) => {
  const {
    query: { id },
  } = req;

  const { character } = await fetchCharacter(id as string);
  res.status(200).json(character);
};
