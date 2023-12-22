import React, { useState } from 'react';
import axios from 'axios';

const Personne = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [personne, setPersonne] = useState(null);

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nouvellePersonne = {
      nom: nom,
      prenom: prenom,
    };

    try {
      const response = await axios.post('http://25.16.142.102:8080/personnes/', nouvellePersonne);

      console.log('Réponse de la requête:', response.data);

      setPersonne(response.data); // Mettre à jour le state avec la nouvelle personne
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" value={nom} onChange={handleNomChange} />
        </label>
        <br />
        <label>
          Prénom:
          <input type="text" value={prenom} onChange={handlePrenomChange} />
        </label>
        <br />
        <button type="submit">Soumettre</button>
      </form>

      {personne && (
        <div>
          <h2>Nouvelle Personne créée :</h2>
          <p>Nom : {personne.nom}</p>
          <p>Prénom : {personne.prenom}</p>
        </div>
      )}
    </div>
  );
};

export default Personne;
