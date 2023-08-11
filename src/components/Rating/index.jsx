// import de mes images
import greyStar from '../../assets/rate_star.svg'
import orangeStar from '../../assets/rate_star_active.svg'

//Component
function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5]
  return (
    <div className="rating-container">
      {range.map((rangeElem) =>
        rating >= rangeElem ? (
          <img className="rating-container__stars" src={orangeStar} alt="orangeStar" key={rangeElem.toString()} />
        ) : ( 
          <img className="rating-container__stars" src={greyStar} alt="greyStar" key={rangeElem.toString()} />
        )
      )}
    </div>
  )
}

export default Rating
