import { Character } from "../api/rickandmorty";
import Link from "next/link";

interface Props {
  character: Character;
  link: string;
}

export default function CharacterListItemView({ character: { id, name, image }, link }: Props): JSX.Element {
  return (
    <Link key={id} href={link}>
      <a title={name} className="my-2 mx-2 py-8 px-8 w-48 bg-blue-200 rounded-xl shadow-md space-y-2 border">
        <img className="block mx-auto h-24 rounded-full" src={image} alt="Woman's Face" />
        <div className="text-center space-y-2">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {name}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};
