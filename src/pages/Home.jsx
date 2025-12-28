import React from "react";
import Hero from "../components/Hero";
import HoverCard from "../components/HoverCard";
import InfoSection from "../components/InfoSection";
import { asset } from "../utils/asset";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaCloudSun,
  FaNewspaper,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { asset } from "../utils/assets";

const Home = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const YT_ID = "TWLPHnICFYw";
  return (
    <div>
      <Hero />

      {/* Municipality Info */}
      <InfoSection
        title="Our Municipality"
        content={
          <>
            <p>
              Vidreres is a charming municipality located in the region of La
              Selva. With a rich history and a vibrant culture, it serves as a
              gateway to the Costa Brava while maintaining its traditional
              essence.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
                marginTop: "2rem",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                }}
              >
                <h4
                  style={{
                    margin: "0 0 0.5rem",
                    color: "var(--color-primary)",
                  }}
                >
                  Population
                </h4>
                <p
                  style={{ margin: 0, fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  8,000+
                </p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                }}
              >
                <h4
                  style={{
                    margin: "0 0 0.5rem",
                    color: "var(--color-primary)",
                  }}
                >
                  Area
                </h4>
                <p
                  style={{ margin: 0, fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  48 km²
                </p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                }}
              >
                <h4
                  style={{
                    margin: "0 0 0.5rem",
                    color: "var(--color-primary)",
                  }}
                >
                  Elevation
                </h4>
                <p
                  style={{ margin: 0, fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  93 m
                </p>
              </div>
            </div>
          </>
        }
      />

      {/* Video Section */}
      <section style={{ padding: "1rem 0", backgroundColor: "white" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h3
            style={{
              fontSize: "2rem",
              marginBottom: "1.5rem",
              color: "var(--color-secondary)",
            }}
          >
            Experience the Essence
          </h3>

          <div
            className="ytWrap"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            {!isPlaying ? (
              <button
                type="button"
                className="ytCoverBtn"
                onClick={() => setIsPlaying(true)}
                aria-label="Play promotional video"
              >
                {/* Portada (imatge) */}
                <img
                  className="ytCoverImg"
                  src={asset("/media/img/layout/vidreres-2.png")}
                  alt="Vidreres promotional video cover"
                />

                {/* Botó Play */}
                <span className="ytPlayIcon" aria-hidden="true">
                  ▶
                </span>
              </button>
            ) : (
              <iframe
                className="ytIframe"
                src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1`}
                title="Vidreres Promotional Video"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>
        </div>
      </section>

      {/* Fairs & Festivals */}
      <section style={{ padding: "1rem 0", backgroundColor: "#f0f0f0" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Fairs, Festivals & Traditions
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <HoverCard
              image={asset("/media/img/fairs/festa-petita.jpg")}
              title="Festa Petita"
              subtitle="Celebrating the town's patrons, Saint Iscle and Saint Victoria, on November 17th."
              boldText="Also known as the Festival of Saint Iscle and Saint Victoria, it gathers activities for the general public: concerts, cinema, sardanes, chocolate, and children's activities."
              description="It is a great opportunity to enjoy the cultural and festive activity of the municipality together."
            />
            <HoverCard
              image={asset("/media/img/fairs/ranxoVIDRERES.jpg")}
              title="El Ranxo"
              subtitle="Probably the most important festival and tradition in Vidreres, celebrated every Carnival Tuesday."
              boldText="A massive collective stew event involving the whole town: butchers, farmers, and neighbors contributing ingredients like sausages and vegetables."
              description="Ranchers cook about thirty 100-liter pots to satisfy the demand. The preparation involves a parade to collect ingredients, and on the day itself, a grand meal is served to everyone."
            />
            <HoverCard
              image={asset("/media/img/fairs/festa-major-vidreres.jpg")}
              title="Festa Major"
              subtitle="The main town festival, celebrated on the first weekend of September, filling the streets with people."
              boldText="Highlights include the traditional election of the Heir and Heiress, the Gala Ball, and the Correbous."
              description="After waiting through the hot month of August, locals prepare for the biggest party of the town, an excellent moment to meet family and friends."
            />
            <HoverCard
              image={asset("/media/img/fairs/FIRACERVESAVIDRERES.jpg")}
              title="Beer Fair"
              subtitle="Held in early October at Lluís Companys Square."
              boldText="A meeting point for lovers of this quality local beverage, aiming to be a space for discovery and promotion."
              description="It serves as a forum to meet manufacturers, discover brands, and promote the market and culture of craft beer, which is becoming increasingly popular."
            />
            <HoverCard
              image={asset(
                "/media/img/fairs/Vidreres_fira_antiguitats_2024.jpg"
              )}
              title="Antiques Fair"
              subtitle="Gathers a large collective of antique dealers and collectors from all over Catalonia at the Correbous field."
              boldText="Offers a wide range of ancient pieces such as clocks, coins, candelabras, furniture, tableware, and copper items."
              description="Open to everyone, it's a place to enjoy old objects and find that special item you've been looking for."
            />
            <HoverCard
              image={asset("/media/img/fairs/mercat-de-segona-mA.jpg")}
              title="Second Hand Market"
              subtitle="Buying and selling of second-hand products."
              boldText="A project by the City Council to contribute to the environment, offer neighbors a chance to sell unneeded items, and attract visitors."
              description="It allows locals to earn extra income or exchange goods while visitors enjoy the town's shops, bars, and restaurants."
            />
            <HoverCard
              image={asset("/media/img/fairs/festa-de-les-flors-ambient.jpg")}
              title="Flower Festival"
              subtitle="A festival held on a weekend at the end of May to welcome the good weather."
              boldText="Decorates emblematic spaces like Plaça Primer d’Octubre with floral arrangements made by neighbors and local entities."
              description="Days full of color and light offering technical talks, visits, workshops, and demonstrations revolving around plants and flowers."
            />
            <HoverCard
              image={asset("/media/img/fairs/FESTIVAL-JAZZ.jpg")}
              title="Jazz Festival"
              subtitle="For three days, the town becomes the region's jazz center."
              boldText="Dedicated to promoting jazz and honoring the founders of the Vidreres jazz club from the 50s, featuring performances by groups like La Vella Dixieland."
              description="Hosted by the Department of Culture, it revives the 'fresh air jazz festival' tradition, recalling memorable nights with legends like Louis Armstrong."
            />
          </div>
        </div>
      </section>

      {/* Historic Buildings */}
      <section style={{ padding: "1rem 0" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Historic Buildings
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <HoverCard
              image="/media/img/historic/Santa-Susanna-de-Caules-2.jpg"
              title="Esglèsia de Santa Sussana"
              subtitle="Originally dedicated to St. Stephen, later to St. Susanna."
              boldText="Located 4.4 km from town, this church dates back to the 10th century and was the parish of Caulès until 1448."
              description="It has a pre-Romanesque structure with a rectangular nave and trapezoidal apse. The entrance was modified in the 20th century with a new bell tower. It offers great views of the Selva plain."
            />
            <HoverCard
              image="/media/img/historic/castell-santiscle.jpg"
              title="Castell de Sant Iscle"
              subtitle="Belonged to the Viscounts of Cabrera, first mentioned in 1194."
              boldText="Once a strategic fortress, it lost military function by the 16th century and became a forestry estate."
              description="The ruins show a quadrangular structure with a 15m tower and a chapel. It features construction phases from the 12th-13th centuries and the 14th century."
            />
            <HoverCard
              image="/media/img/historic/torre-llobet.jpg"
              title="La Torre d’en Llobet"
              subtitle="Home to the Llobet family, one of Vidreres' oldest lineages."
              boldText="This fortified farmhouse dates from the 15th-16th centuries and features a defense tower and a modernist mill."
              description="The family possessed significant land until the early 20th century. The building has an arched door, Gothic windows, and a hexagonal mill tower added later."
            />
            <HoverCard
              image="/media/img/historic/Vidreres-Esglesia-parroquial-01.jpg"
              title="L’Església Parroquial"
              subtitle="Located in the town center, dedicated to Santa Maria."
              boldText="The current Baroque-Neoclassical building was constructed between 1790 and 1800, replacing older structures mentioned since 1066."
              description="It features a central nave with side chapels. The facade was finished with sgraffito in the 1990s. The bell tower's pyramid was destroyed in the Carlist War."
            />
            <HoverCard
              image="/media/img/historic/casino-launio.jpg"
              title="Casino La Unió"
              subtitle="Built in 1891 as a social center for cork workers."
              boldText="A rectangular building with an ornamented facade featuring a shield and symbols of cork, agriculture, and commerce."
              description="It served as a hub for the 'La Unió' society during the cork industry's boom. A ballroom and theater were added behind the main building in 1899."
            />
            <HoverCard
              image="/media/img/historic/BUNQUER_BATLLOSERA.JPG"
              title="Búnquer de Can Batllosera"
              subtitle="Air raid shelter built next to the 1937 airfield."
              boldText="Built during the Spanish Civil War, this bunker served as a shelter for the command center officers residing at Can Batllosera."
              description="It is a concrete structure, largely underground, with two entrances and a ramp leading to a main chamber capable of sheltering 100 people."
            />
          </div>
        </div>
      </section>

      {/* Natural Areas */}
      <section style={{ padding: "1rem 0", backgroundColor: "#f0f0f0" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Natural Areas
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <HoverCard
              image="/media/img/natural/lapetjadesantmarti.jpg"
              title="La Petja de Sant Martí"
              subtitle="A granite rock with mysterious engravings on the path to Cabanyes."
              boldText="Legend says it marks the spot where Saint Martin landed after jumping from the Caulès ridge to compete with the Devil."
              description="Located 2km from the turnoff to Can Mundet, it features a footprint-like mark and engraved crosses. The spot offers panoramic views of the Mediterranean, Blanes, and the Montseny range."
            />
            <HoverCard
              image="/media/img/natural/pantansllobet.jpg"
              title="Els Pantans d’en Llobet"
              subtitle="A set of three reservoirs near Torre d’en Llobet."
              boldText="Constructed by the Llobet family on the stream of the same name to irrigate their fields."
              description="These three ponds are located just 500m from the historic fortified house, utilizing the local water resources for agriculture."
            />
            <HoverCard
              image="/media/img/natural/bosc-puig.png"
              title="Bosc d’en Puig"
              subtitle="A pine forest located on the right side of the path to Caulès."
              boldText="This forest hides a series of quadrangular trenches used during the Civil War to store bombs and fuel for the airfield."
              description="The trenches are about 5m² each, with rounded corners. Deeper in the forest, remains of a brick kiln can also be found."
            />
          </div>
        </div>
      </section>

      {/* Redesigned Bottom Section */}
      <section
        style={{
          backgroundColor: "var(--color-secondary)",
          color: "white",
          padding: "2rem 0",
          borderTop: "5px solid var(--color-primary)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {/* Weather */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flex: "1 1 250px",
            }}
          >
            <FaCloudSun size={40} color="var(--color-primary)" />
            <div>
              <h4 style={{ margin: 0, color: "var(--color-primary)" }}>
                Temp: 18°C
              </h4>
              <small>Sunny | Wind: 12km/h</small>
            </div>
          </div>

          {/* News Tickler */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flex: "1 1 250px",
              borderLeft: "1px solid #333",
              paddingLeft: "1rem",
            }}
          >
            <FaNewspaper size={30} color="var(--color-primary)" />
            <div>
              <h4 style={{ margin: 0 }}>Latest: Festival Announced</h4>
              <small style={{ color: "#ccc" }}>Read more in News section</small>
            </div>
          </div>

          {/* Social Media */}
          <div style={{ display: "flex", gap: "1.5rem", flex: "0 0 auto" }}>
            <a
              href="#facebook"
              style={{ color: "white", transition: "color 0.3s" }}
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="#youtube"
              style={{ color: "white", transition: "color 0.3s" }}
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="#instagram"
              style={{ color: "white", transition: "color 0.3s" }}
            >
              <FaInstagram size={30} />
            </a>
          </div>

          {/* Navigation Menu */}
          <nav style={{ flex: "0 0 auto" }}>
            <ul
              style={{
                display: "flex",
                gap: "1.5rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <li>
                <Link
                  to="/"
                  style={{
                    color: "var(--color-primary)",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/calendar"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Activities
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Home;
