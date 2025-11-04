const pets = [
  {
    name: "Buddy",
    type: "dog",
    age: "puppy",
    breed: "Golden Retriever",
    location: "Chennai",
    image: "https://place-puppy.com/300x300",
    description: "A friendly and playful puppy who loves people."
  },
  {
    name: "Luna",
    type: "cat",
    age: "adult",
    breed: "Siamese",
    location: "Bangalore",
    image: "https://placekitten.com/300/300",
    description: "A gentle and affectionate cat who enjoys quiet spaces."
  },
  {
    name: "Coco",
    type: "bird",
    age: "senior",
    breed: "Parrot",
    location: "Hyderabad",
    image: "https://placebear.com/300/300",
    description: "A chatty parrot who loves attention and sunflower seeds."
  }
];

function searchPets() {
  const searchTerm = document.getElementById("pet").value.toLowerCase().trim();
  const type = document.getElementById("type").value;
  const age = document.getElementById("age").value;
  const petsGrid = document.getElementById("pets-grid");

  const filteredPets = pets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm) ||
                          pet.breed.toLowerCase().includes(searchTerm);
    const matchesType = !type || pet.type === type;
    const matchesAge = !age || pet.age === age;
    return matchesSearch && matchesType && matchesAge;
  });

  if (filteredPets.length === 0) {
    petsGrid.innerHTML = "<p>No pets found matching your criteria.</p>";
    return;
  }

  petsGrid.innerHTML = filteredPets.map(pet => `
    <div class="pet-card">
      <img src="${pet.image}" alt="${pet.name}" />
      <div class="pet-info">
        <h3>${pet.name} 🐾</h3>
        <p><strong>Breed:</strong> ${pet.breed}</p>
        <p><strong>Location:</strong> ${pet.location}</p>
        <p><strong>Age:</strong> ${pet.age.charAt(0).toUpperCase() + pet.age.slice(1)}</p>
        <p>${pet.description}</p>
      </div>
    </div>
  `).join('');
}

window.onload = searchPets;
