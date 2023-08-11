// Composant <Banner/> de ma page d'accueil
function Banner({ title, picture, className }) {
  return (
    <div>
      <div className={className}>
        <img className="banner__img" src={picture} alt="" />
        <h1 className="banner__title">{title}</h1>
      </div>
    </div>
  )
}

export default Banner
