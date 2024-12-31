// import { useState } from 'react';
// import '../../.././Components/Pages/Search/Search.css';
// import { Button } from '@/components/ui/button';

// const Search = () => {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [busType, setBusType] = useState('');
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState(null);

//   const handleSearch = async () => {
//     try {
//       setError(null); // Clear any previous errors

//       // Construct the query parameters
//       const queryParams = new URLSearchParams({
//         destinationFrom: from,
//         destinationTo: to,
//         seatType: busType,
//       });

//       // Send the API request
//       const response = await fetch(`http://localhost:5000/search?${queryParams.toString()}`);

//       if (!response.ok) {
//         // Handle non-success status codes
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Something went wrong');
//       }

//       // Parse and update results
//       const data = await response.json();
//       setResults(data);
//     } catch (err) {
//       console.error('Error fetching search results:', err);
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="allHW">
//       <div className="search ">
//         <div className="inputParent">
//           <div className="inputBox form__group-fast">
//             <p className="text-sm">FROM</p>
//             <input
//               type="text"
//               placeholder="Choose a location"
//               value={from}
//               onChange={(e) => setFrom(e.target.value)}
//             />
//           </div>
//           <div className="inputBox form__group-fast">
//             <p className="text-sm">TO</p>
//             <input
//               type="text"
//               placeholder="Choose a location"
//               value={to}
//               onChange={(e) => setTo(e.target.value)}
//             />
//           </div>
//           <div className="inputBox form__group-fast">
//             <p className="text-sm">BUS TYPE</p>
//             <input
//               type="text"
//               placeholder="ALL"
//               value={busType}
//               onChange={(e) => setBusType(e.target.value)}
//             />
//           </div>

//           <Button onClick={handleSearch}>Search</Button>
//         </div>

//         <div className="results">
//           {error && <p className="error text-red-500">{error}</p>}
//           {results.length > 0 ? (
//             <ul>
//               {results.map((bus, index) => (
//                 <li key={index} className="result-item">
//                   <p><strong>From:</strong> {bus.destinationFrom}</p>
//                   <p><strong>To:</strong> {bus.destinationTo}</p>
//                   <p><strong>Type:</strong> {bus.seatType}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             !error && <p>No results found. Try a different search.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;





//////////////////////////////////



// import { useState } from 'react';
// import '../../.././Components/Pages/Search/Search.css';
// import { Button } from '@/components/ui/button';
// import SearchCardDesign from './SearchCardDesign';
// // Import your BusCardDesign component

// const Search = () => {
//   const [from, setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [busType, setBusType] = useState('');
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState(null);

//   const handleSearch = async () => {
//     try {
//       setError(null); // Clear any previous errors

//       // Construct the query parameters
//       const queryParams = new URLSearchParams({
//         destinationFrom: from,
//         destinationTo: to,
//         seatType: busType,
//       });

//       // Send the API request
//       const response = await fetch(`http://localhost:5000/search?${queryParams.toString()}`);

//       if (!response.ok) {
//         // Handle non-success status codes
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Something went wrong');
//       }

//       // Parse and update results
//       const data = await response.json();
//       setResults(data);
//     } catch (err) {
//       console.error('Error fetching search results:', err);
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="allHW">
//       <div className="search">
//         <div className="inputParent">
//           <div className="inputBox form__group-fast">
//             <p className="text-sm">FROM</p>
//             <input
//               type="text"
//               placeholder="Choose a location"
//               value={from}
//               onChange={(e) => setFrom(e.target.value)}
//             />
//           </div>
//           <div className="inputBox form__group-fast">
//             <p className="text-sm">TO</p>
//             <input
//               type="text"
//               placeholder="Choose a location"
//               value={to}
//               onChange={(e) => setTo(e.target.value)}
//             />
//           </div>
//           <div className="inputBox form__group-fast">
//             <p className="text-sm">BUS TYPE</p>
//             <input
//               type="text"
//               placeholder="ALL"
//               value={busType}
//               onChange={(e) => setBusType(e.target.value)}
//             />
//           </div>

//           <Button onClick={handleSearch}>Search</Button>
//         </div>

//         <div className="results">
//           {error && <p className="error text-red-500">{error}</p>}
//           {results.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {results.map((bus) => (
            
//             <SearchCardDesign
//                   key={bus._id} // Use _id as the key
//                   id={bus._id} // Pass _id as a prop
//                   busName={bus.busName}
//                   busUrl={bus.imageUrl} // Ensure `imageUrl` exists in your API response
//                   availableSeat={bus.availableSeat}
//                   destinationFrom={bus.destinationFrom}
//                   destinationTo={bus.destinationTo}
//                   journeyStartDate={bus.journeyStartDate}
//                   journeyStartTime={bus.journeyStartTime}
//                   journeyEndDate={bus.journeyEndDate}
//                   journeyEndTime={bus.journeyEndTime}
//                   seatType={bus.seatType}
//                   seatPrice={bus.seatPrice}
//                 />
//               ))}
//             </div>
//           ) : (
//             !error && <p>No results found. Try a different search.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;



///////////////////////////////////////////////



import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../.././Components/Pages/Search/Search.css';
import { Button } from '@/components/ui/button';

const Search = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [busType, setBusType] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize navigate

  const handleSearch = async () => {
    try {
      setError(null);

      // Construct the query parameters
      const queryParams = new URLSearchParams({
        destinationFrom: from,
        destinationTo: to,
        seatType: busType,
      });

      // Send the API request
      const response = await fetch(`http://localhost:5000/search?${queryParams.toString()}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      // Parse results
      const data = await response.json();
      setFrom('');
      setTo('');
      setBusType('');
      // Redirect to /bus-results with results
      navigate('/search-results', { state: { results: data } });
    } catch (err) {
      console.error('Error fetching search results:', err);
      setError(err.message);

    }
  };

  return (
    <div className="allHW">
      <div className="search">
        <div className="inputParent">
          <div className="inputBox form__group-fast">
            <p className="text-sm">FROM</p>
            <input
              type="text"
              placeholder="Choose a location"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="inputBox form__group-fast">
            <p className="text-sm">TO</p>
            <input
              type="text"
              placeholder="Choose a location"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <div className="inputBox form__group-fast">
            <p className="text-sm">BUS TYPE</p>
            <input
              type="text"
              placeholder="ALL"
              value={busType}
              onChange={(e) => setBusType(e.target.value)}
            />
          </div>

          <Button onClick={handleSearch}>Search</Button>
        </div>
<div className="text-center mt-4">
   {error && <p className="error text-red-500">{error}</p>}
</div>
       
      </div>
    </div>
  );
};

export default Search;
