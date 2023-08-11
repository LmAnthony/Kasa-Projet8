// import composants react-router-dom
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
// (FAKE API / Test with fetch)
// import { fetchData } from '../../data/callapi'

// import data logements.json
import rentalList from '../../data/logements.json'

// import de mes composants : carrousel, collapse, la notation et mes tags
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'

// Composant pour afficher les informations de chaque logement, 
// en commençant par le carrousel et finir par les collapses (description/équipements)
// j'utilise useParams pour extraire le rentalId de mes logements 
// méthode find pour rechercher l'ID de mes logements 
function Rental() {
  
  // For fetch test with fake api
  // const [rentalList, setRentalList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const { rentalId } = useParams();
  const rental = rentalList.find((i) => i.id === rentalId);

  // // useEffect (hook) for side effects, here fetch request
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchData()
  //     .then((resData) => setRentalList(resData))
  //     .catch((error) => {setIsError(true); console.error('Erreur lors de la récupération des données:', error)})
  //     .finally(setIsLoading(false));
  // }, []);

  // Si aucun logement n'est trouvé, ça m'execute cette fonction pour m'envoyer sur ma page /404
  if (!rental) {
    return <Navigate to="/404" />
  }

  return (
    
      <section className="rental-page">
        <Carousel slides={rental.pictures} slideTitles={rental.title} />
        {/* Conteneur qui englobe -les infos du logement et -le nom/img du loueur + rating du logement. */}
        <div className="rental-info-container">
          {/* Information sur le logement, son titre, la location, et ses TAGS */}
          <div className="rental-info">
            <h1 className="rental-info__title">{rental.title}</h1>
            <p className="rental-info__location">{rental.location}</p>
            <div className="rental-info__tags">
              <Tags tag={rental.tags} />
            </div>
          </div>
          {/* Nom et image du loueur / et le rating du logement. */}
          <div className="renter-info">
            <div className="renter-info__identity">
              <p className="renter-info__identity__name">{rental.host.name}</p>
              <img className="renter-info__identity__pic" src={rental.host.picture} alt=""/>
            </div>
            {/* Composant pour l'ajout de la notation des logements (in progress) ************************* */}
            <Rating rating={rental.rating} />
          </div>
        </div>
        {/* Les 2 collapses en dessous pour la description et les équipements à disposition du logement. */}
        <div className="rental-collapse-container">
          <Collapse
            className="collapse collapse--small"
            title="Description"
            text={rental.description}
          />
          <Collapse
            className="collapse collapse--small" title="Équipements"
            text={rental.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          />
        </div>
      </section>
  )
}

export default Rental
