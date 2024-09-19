'use client';

import { gql, useQuery } from '@apollo/client';
import { Character, CharactersData } from '../../types';

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        image
      }
    }
  }
`;

const CharacterList = () => {
  const { loading, error, data } = useQuery<CharactersData>(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {data?.characters.results.map((character: Character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p>
            {character.species} - {character.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
