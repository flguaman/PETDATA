import React from 'react';
import { Pet } from '../types';

interface PetSelectProps {
  pets: Pet[];
  selectedPetId: string;
  onSelectPet: (id: string) => void;
}

const PetSelect: React.FC<PetSelectProps> = ({ pets, selectedPetId, onSelectPet }) => {
  return (
    <div className="mb-4">
      <label htmlFor="pet-select" className="block text-sm font-medium text-gray-300 mb-2">
        Selecciona una mascota:
      </label>
      <select
        id="pet-select"
        className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        value={selectedPetId}
        onChange={(e) => onSelectPet(e.target.value)}
      >
        <option value="">Selecciona una mascota</option>
        {pets.map((pet) => (
          <option key={pet.id} value={pet.id}>
            {`${pet.name} (${pet.type}) - Dueño: ${pet.owner}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PetSelect;