import React, { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      searchQuery
    )}&key=AIzaSyAnuZgJsageUVqd1gnMsbdhOdYhKi--uPg`;

    fetch(geocodeUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK" && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          const newSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230661.04484706576!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710055164666!5m2!1sen!2sin`;
          document.getElementById("google-map").src = newSrc;
        } else {
          console.error("Geocoding request failed");
        }
      })
      .catch((error) => {
        console.error("Error fetching geocode data:", error);
      });
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter location"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="map-container">
        <iframe
          id="google-map"
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230661.04484706576!2d81.6367710867129!3d25.402171895305088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710055164666!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
