import { Character } from "../api/rickandmorty";

interface Props {
  character: Character;
}

export default function CharacterView({ character: { name, image, species, origin } }: Props): JSX.Element {
  return (
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
  );
};
