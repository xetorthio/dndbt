import { useState } from 'react';

import CharactersTable from './components/CharactersTable'
import NewCharacter from './components/NewCharacter';
import NextTurn from './components/NextTurn';
import RoundNumber from './components/RoundNumber';
import useLocalStorageState from './userLocalStorageState';
import NewEncounter from './components/NewEncounter';

function App() {
  const [encounter, setEncounter] = useLocalStorageState('encounter', {characters: [], rounds: 1, currentTurn: -1 });

  const updateCharacter = (character) => {
    const characterIndex = encounter.characters.findIndex((char) => char.id === character.id);

    if (characterIndex === -1) {
      // didn't find character, so it is a new and we need to add it
      setEncounter((prevEncounter) => {
        const updatedCharacters = [...prevEncounter.characters, character];
        const sortedCharacters = sortCharactersByInitiative(updatedCharacters);

        return {
          ...prevEncounter,
          characters: sortedCharacters
        };
      });
    } else {
      setEncounter((prevEncounter) => {
        const updatedCharacters = [...prevEncounter.characters];
        updatedCharacters[characterIndex] = character;
        const sortedCharacters = sortCharactersByInitiative(updatedCharacters);

        return {
          ...prevEncounter,
          characters: sortedCharacters
        };
      });
    }
  };

  const sortCharactersByInitiative = (characters) => {
    const sortedCharacters = characters.sort((a, b) => {
      if (a.initiative === b.initiative) {
        const rA = a.initiative + Math.random();
        const rB = b.initiative + Math.random();
        return rA - rB;
      }
      return b.initiative - a.initiative;
    });
    return sortedCharacters;
  };

  const handleNextTurn = () => {
    setEncounter((prevEncounter) => {
      let currentTurn = prevEncounter.currentTurn + 1;
      let rounds = prevEncounter.rounds;

      if (currentTurn > prevEncounter.characters.length-1) {
        currentTurn = 0;
        rounds = rounds + 1;
      }

      return {
        ...prevEncounter,
        rounds,
        currentTurn
      };
    });
  }

  const handleNewEncounter = () => {
    setEncounter({characters: [], rounds: 1, currentTurn: -1 });
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewEncounter newEncounter={handleNewEncounter} />
        <NewCharacter addCharacter={updateCharacter} />
        <NextTurn nextTurn={handleNextTurn} />
        <RoundNumber rounds={encounter.rounds} />
        <CharactersTable updateCharacter={updateCharacter} characters={encounter.characters} currentTurn={encounter.currentTurn} />
      </header>
    </div>
  );
}

export default App;
