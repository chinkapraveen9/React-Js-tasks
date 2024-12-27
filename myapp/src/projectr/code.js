// import React, { useState } from 'react';
// // import './App.css';

// const movies = [
//   { id: 1, title: 'Inception', time: ['1:00 PM', '4:00 PM', '7:00 PM'], seats: 10 },
//   { id: 2, title: 'Interstellar', time: ['12:00 PM', '3:00 PM', '6:00 PM'], seats: 8 },
//   { id: 3, title: 'The Dark Knight', time: ['2:00 PM', '5:00 PM', '8:00 PM'], seats: 12 },
// ];

// function App() {
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [selectedTime, setSelectedTime] = useState('');
//   const [seatsLeft, setSeatsLeft] = useState(0);
//   const [bookedSeats, setBookedSeats] = useState(0);
//   const [message, setMessage] = useState('');

//   const handleMovieSelection = (movie) => {
//     setSelectedMovie(movie);
//     setSelectedTime('');
//     setSeatsLeft(movie.seats);
//     setBookedSeats(0);
//     setMessage('');
//   };

//   const handleTimeSelection = (time) => {
//     setSelectedTime(time);
//     setMessage('');
//   };

//   const handleBooking = () => {
//     if (!selectedMovie || !selectedTime || bookedSeats <= 0) {
//       setMessage('Please select a movie, time, and at least one seat.');
//       return;
//     }

//     if (bookedSeats > seatsLeft) {
//       setMessage('Not enough seats available.');
//       return;
//     }

//     setSeatsLeft(seatsLeft - bookedSeats);
//     setMessage(`Successfully booked ${bookedSeats} seat(s) for "${selectedMovie.title}" at ${selectedTime}!`);
//     setBookedSeats(0);
//   };

//   return (
//     <div className="App">
//       <h1>Movie Booking App</h1>

//       <div className="movies-list">
//         <h2>Select a Movie</h2>
//         {movies.map((movie) => (
//           <button
//             key={movie.id}
//             onClick={() => handleMovieSelection(movie)}
//             className={selectedMovie?.id === movie.id ? 'selected' : ''}
//           >
//             {movie.title}
//           </button>
//         ))}
//       </div>

//       {selectedMovie && (
//         <div className="time-selection">
//           <h2>Select a Time</h2>
//           {selectedMovie.time.map((time) => (
//             <button
//               key={time}
//               onClick={() => handleTimeSelection(time)}
//               className={selectedTime === time ? 'selected' : ''}
//             >
//               {time}
//             </button>
//           ))}
//         </div>
//       )}

//       {selectedMovie && selectedTime && (
//         <div className="seat-booking">
//           <h2>Book Seats</h2>
//           <p>Seats Available: {seatsLeft}</p>
//           <input
//             type="number"
//             value={bookedSeats}
//             onChange={(e) => setBookedSeats(Number(e.target.value))}
//             min="1"
//             max={seatsLeft}
//           />
//           <button onClick={handleBooking}>Book Now</button>
//         </div>
//       )}

//       {message && <p className="message">{message}</p>}
//     </div>
//   );
// }

// export default App;

















import React, { useState } from 'react';
// import './App.css'; // Import a CSS file for stylesn

const App = () => {
  const [circles, setCircles] = useState([]);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const getRandomRadius = () => Math.floor(Math.random() * (200 - 20 + 1)) + 20;

  const handleClick = (e) => {
    const newCircle = {
      x: e.clientX,
      y: e.clientY,
      radius: getRandomRadius(),
    };

    const updatedCircles = [...circles, newCircle];

    if (updatedCircles.length > 2) {
      setCircles([]);
      setIsIntersecting(false);
    } else {
      setCircles(updatedCircles);
      checkIntersection(updatedCircles);
    }
  };

  const checkIntersection = (circles) => {
    if (circles.length < 2) {
      setIsIntersecting(false);
      return;
    }

    const [circle1, circle2] = circles;
    const distance = Math.sqrt(
      Math.pow(circle1.x - circle2.x, 2) + Math.pow(circle1.y - circle2.y, 2)
    );

    if (distance < circle1.radius + circle2.radius) {
      setIsIntersecting(true);
    } else {
      setIsIntersecting(false);
    }
  };

  return (
    <div
      className="viewport"
      onClick={handleClick}
      style={{ backgroundColor: isIntersecting ? 'green' : 'white', height: '100vh', position: 'relative' }}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: circle.y - circle.radius,
            left: circle.x - circle.radius,
            width: circle.radius * 2,
            height: circle.radius * 2,
            borderRadius: '50%',
            backgroundColor: 'blue',
          }}
        ></div>
      ))}
    </div>
  );
};

export default App;
