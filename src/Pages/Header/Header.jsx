import React, { useRef, useState } from "react";
import "./Header.css";
import ScrollToTop from "../ScrollToTop";
import { Link } from "react-router-dom";
import { packages } from "../../utils/db";
import PackagesCard from "../../Components/packagesCard/PackageCard";
// import PackagesCard from "../button/Components/packagesCard/PackageCard.jsx";
// import PackagesCard from "../../Components/packagesCard/PackagesCard";
const Header = () => {
  const [sliderValue, SetSliderValue] = useState(0);
  console.log("sliderValue", sliderValue);
  const [filteredpackages, setFilteredPackages] = useState([]);
  const [search, setSearch] = useState(null);
  const handleChange = (e) => {
    SetSliderValue(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const res = packages.filter((item) => {
      return item.durDetail.location.some((place) => {
        return (
          parseInt(item.price) <= sliderValue &&
          place.toLowerCase().includes(search)
        );
      });
    });
    setFilteredPackages(res);
  };

  return (
    <>
      <ScrollToTop />
      
      <div className="packages">
        <h3>Our Packages</h3>
        <h1>Search Your Holiday</h1>
        <div>
          <form action="#">
            <div id="form1">
              <div id="dest">
                <div>
                  <label htmlFor="destination">Search Your Destination</label>
                  <br /> <br />
                  <input
                    type="text"
                    name="destination"
                    id="destination"
                    value={search}
                    placeholder="Kathmandu"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                  <br /> <br />
                </div>
                <div>
                  <label htmlFor="date">Select Your date</label>
                  <br /> <br />
                  <input type="date" name="date" id="date" />
                  <br /> <br />
                </div>
                <div className="slidercontainer">
                  <label htmlFor="price">
                    Max Price : <span id="demo">{sliderValue}</span>
                  </label>
                  <br />
                  <br />
                  <input
                    type="range"
                    min="0"
                    value={sliderValue}
                    max="100000"
                    steps="1"
                    className="slider"
                    id="myRange"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div id="sbutton">
                <button onClick={handleSearch}>Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {filteredpackages.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {filteredpackages.map((item, id) => {
            return <PackagesCard item={item} key={id} />;
          })}
        </div>
      ) : (
        <div className="why-travel">
          <div className="nature">
            <h1>WHY TRAVEL NEPAL? | NATURE AND SPRITUAL TOUR</h1>
            <p>
              Nepal is a beautiful paradise on earth. It has a variety of
              landscapes, cultures, traditions, and friendly people. It is one
              of the most popular tourist destinations in Asia because of its
              natural beauty, breathtaking Himalayan views that include Mt.
              Everest, huge biodiversity, multi-culture and religions, religious
              sites including the birthplace of Gautam Buddha, deep lakes like
              Shey-Phoksundo, Tilicho, Rara, etc., splendid rivers like Karnali,
              Koshi, Narayani, etc. and many other stunning scenarios and sites.
              Nepal is a unique country. It is peaceful and gives you a sense of
              serenity. There can be hundreds of reason to visit Nepal, here we
              are briefing the main reasons to visit Nepal.{" "}
            </p>
            <div className="natural-beauty">
              <img src="./Assets/d.jpg" alt="#" />
              <h2>Natural Beauty</h2>
              <p>
                Nepal is blessed with innumerable gifts of nature. The country
                has tremendous geographical and topological diversity that
                divides the country into Terai, Hilly, and Himalayan Regions.
                From lowlands to snow-capped mountains, the weather also diverse
                in these regions. There are many big rivers that flow
                beautifully, deep lakes, greeny forests, mountains, and high
                snow-capped mountains that are breathtaking. Wherever you are in
                Nepal, you will always be surrounded by the view of its natural
                beautiful scenario. The mesmerizing morning sunrise and sunset
                can be witnessed from hilly stations like Nagarkot, Sarangkot,
                Dhulikhel, Daman, and plains like Sauraha (Chitwan National
                Park). The beautiful nature brings a feeling of harmony, peace,
                and serenity. To explore these natural beauties of Nepal,
                tourist can choose the plan of trekking, driving tour or small
                hiking.
              </p>
            </div>
            <div className="heritage-sites">
              <img src="./Assets/e.jpg" alt="#" />
              <h2>Heritage Sites</h2>
              <p>
                Nepal has sites that are listed in the UNESCO World Heritage in
                Kathmandu Valley, Lumbini, and Chitwan. In Kathmandu valley, you
                can find ancient arts and architectures including Patan Durbar
                Square, Kathmandu Durbar Square, Bhaktapur Durbar Square that
                resides from the reign of Malla Kings from the 16th to 18th
                century. Temples and stupas listed as World Heritage are
                Pashupatinath Temple, Bouddhanath Stupa, and Swayambhunath Stupa
                that withstand since ancient times. They hold valuable
                historical importance. There are many more temples and monuments
                all over Nepal that are holy and have their own importance.
                Lumbini, the birthplace of Buddha is also enlisted as a World
                Heritage Site. It has many old temples such as Mayadevi Temple,
                and others funded by Buddhist organizations from various
                countries. The other main attractions here are World Peace
                Pagoda, Maynmar Golden Temple, Ashoka Pillar, etc. Therefore,
                Nepal is a great destination for enthusiasts of history,
                culture, arts, and architecture. Trips to these historical and
                holy places will bring you inner peace and, delightful and
                enlightening experiences. It can be your nature and spiritual
                tour in Nepal including walking tour in the heritage sides.
              </p>
            </div>
            <div className="adventurous-activities">
              <img src="./Assets/f.jpg" alt="#" />
              <h2>Adventurous Activities</h2>
              <p>
                Nepal has an extremely diverse topography from the world’s
                highest Mountain (Mt. Everest) to the world’s deepest Gorge
                (Kali Gandaki Gorge). No wonder it is a paradise for
                adventure-seeking travellers. You will find activities and
                sports of your interest and ideals here.
                <br />
                <br />
                With 8 out of the 10 highest mountains in the world, Nepal is
                mostly known as a trekking and mountaineering destination. The
                widely popular trekking destinations are Annapurna Base Camp,
                Everest Basecamp Trek, Mustang Trek, Langtang Trek, Tsum Valley
                and Manaslu Trek etc, You can also go for short treks and hiking
                to places like Nagarkot, Dhulikhel, Kakani, Phulchowki,
                Nagarjun, Daman, Sarangkot, and many more. <br />
                <br />
                There are many other adventure sports aside from trekking like
                mountain biking, rock climbing, water rafting, zip fly, jungle
                safari, paragliding, bungee jumping, hot air ballooning,
                skydiving, motorbiking tour and more. You can arrange bookings
                to these sports through licensed agencies that provide safety
                measures and equipment. These are the many activities you can
                experience according to your interest. You can enjoy these
                adventures alongside beautiful nature and sightseeing places.
              </p>
            </div>
            <div className="affordable">
              <img src="./Assets/g.jpg" alt="#" />
              <h2>Affordable</h2>
              <p>
                Nepal is an excellent choice for budget-minded travellers.
                Restaurants are reasonably priced and there are a lot of cheap
                accommodations. The trekking trails and other adventurous sports
                are also reasonable. Your experience and abundant memories will
                be worth the price you spend here.
              </p>
            </div>
            <div>
              <p>
                Nepal is one of the best travel destinations you should visit
                once in a lifetime. It is a safe place to travel. It is a
                destination for people of all ages and people of different
                interests as it has everything to offer from religious
                pilgrimage tours to adventurous sports. It is not much expensive
                and you can easily travel and collect many memories in a short
                period of time. The best season to visit Nepal is in autumn and
                spring season but there are many destinations can visit in
                winter and rainy season, thus Nepal is possible to visit
                throughout the year.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
