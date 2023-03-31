import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(plants => setPlants(plants))
  }, [])

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }
    const displayPlants = plants.filter(plant => {
      return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onSearchChange={setSearchTerm}/>
      <PlantList plants={displayPlants}/>
    </main>
  );
}

export default PlantPage;
