import React, { useState } from 'react';
import { Pet } from './types';
import { initialPets } from './data';
import PetSelect from './components/PetSelect';
import PetInfo from './components/PetInfo';
import PetEditor from './components/PetEditor';

function App() {
  const [pets, setPets] = useState<Pet[]>(initialPets);
  const [selectedPetId, setSelectedPetId] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const selectedPet = pets.find(pet => pet.id === selectedPetId) || null;

  const handleSelectPet = (id: string) => {
    setSelectedPetId(id);
    setIsEditing(false);
  };

  const handleSavePet = (updatedPet: Pet) => {
    setPets(pets.map(pet => pet.id === updatedPet.id ? updatedPet : pet));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-500 mb-8">Base de Datos de Mascotas</h1>
        <PetSelect pets={pets} selectedPetId={selectedPetId} onSelectPet={handleSelectPet} />
        {selectedPet && (
          <>
            {!isEditing && (
              <>
                <PetInfo pet={selectedPet} />
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mb-4"
                >
                  Editar Datos
                </button>
              </>
            )}
            {isEditing && (
              <PetEditor pet={selectedPet} onSave={handleSavePet} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;