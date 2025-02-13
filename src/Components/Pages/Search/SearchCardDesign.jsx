
import { useNavigate } from "react-router-dom";

const SearchCardDesign = ({
    id, // Receive the _id prop
    busName,
    busUrl,
    availableSeat,
    destinationFrom,
    destinationTo,
    journeyStartDate,
    journeyStartTime,
    journeyEndDate,
    journeyEndTime,
    seatType,
    seatPrice,
  }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
      navigate(`/order/${id}`); // Redirect to the order details page
    };
  
    return (
      <div>
       
        <div
        className="card card-compact bg-base-100 w-96 shadow-xl"
        onClick={handleCardClick}
      >
        <figure>
          <img src={busUrl} alt="Bus" />
        </figure>
        <div className="card-body">
          <div className="card-title">
            <h2 className="card-title">{busName}</h2>
            <div className="badge badge-error">{availableSeat}</div>
          </div>
          <ul className="steps">
            <li className="step step-error">{destinationFrom}</li>
            <li className="step step-error">{destinationTo}</li>
          </ul>
          <ul className="steps">
            <li className="step step-error">
              <span>Departure</span> {journeyStartDate}, {journeyStartTime}
            </li>
            <li className="step step-error">
              <span>Arrival</span> {journeyEndDate}, {journeyEndTime}
            </li>
          </ul>
          <p>Seat: {seatType}</p>
          <p>Seat Price: {seatPrice}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-error">Buy Now</button>
          </div>
        </div>
      </div>
    
      </div>
      
    );
  };
  
  export default SearchCardDesign;
  