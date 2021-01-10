export interface APIInfo {
  count: number;
  next: number | null;
  pages: number;
  prev: number | null;
}

export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  origin: string;
}

export interface CharactersResponse {
  characters: Character[];
  apiInfo: APIInfo;
}

export interface CharacterResponse {
  character: Character;
}

export async function fetchCharacters(page: string): Promise<CharactersResponse | undefined> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const body = await response.json();
    if (!body.error) {
      const { results, info } = body;
      const characters = results.map(characterMapper);

      const apiInfo = infoMapper(info.count, info.pages, info.prev, info.next);

      return { characters, apiInfo };
    }

    return undefined;
  } catch (ex) {
    console.log({ ex });
    return undefined;
  }
}

export async function fetchCharacter(id: string): Promise<CharacterResponse | undefined> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const body = await response.json();
    if (!body.error) {
      const character = characterMapper(body);

      return { character };
    }

    return undefined;
  } catch (ex) {
    console.log({ ex });
    return undefined;
  }
}

function characterMapper({ id, name, image, species, origin }: any): Character {
  return {
    id: '' + id,
    name,
    image,
    species,
    origin: origin.name,
  };
}

function infoMapper(count: number, pages: number, prev?: string, next?: string): APIInfo {
  return {
    count,
    pages,
    prev: prev ? parseInt(prev.replace('https://rickandmortyapi.com/api/character?page=', '')) : null,
    next: next ? parseInt(next.replace('https://rickandmortyapi.com/api/character?page=', '')) : null,
  };
}
