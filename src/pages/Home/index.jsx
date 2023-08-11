// Link = créer des liens de navigation
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
// (FAKE API / Test with fetch)
// import { fetchData } from '../../data/callapi'
import rentalList from '../../data/logements.json'

// import de mon composant Banner et mes Cards
import Banner from '../../components/Banner'
import Card from '../../components/Card'

// import de la bannière de ma page d'accueil
import homeBanner from '../../assets/banner_home.png'

// import de ma data logements.json
// import rentalList from '../../data/logements.json'

// Composant de ma page d'accueil <Home/>
function Home() {
  // const [rentalList, setRentalList] = useState([]);

  // useEffect(() => {
  //   fetchData()
  //     .then((jsonData) => setRentalList(jsonData))
  //     .catch((error) => console.error('Erreur lors de la récupération des données:', error));
  // }, []);
  // console.log(rentalList);

  return (
    <div>
      {/* Bannière de ma page d'accueil */}
      <Banner picture={homeBanner} title="Chez vous, partout et ailleurs" className="banner"/>
      <section className="rental-section">
        <div className="rental-section__cards-container">
          {rentalList.map((rental) => (
            <Link to={`/logement/${rental.id}`} key={rental.id}>
              <Card picture={rental.cover} title={rental.title} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
