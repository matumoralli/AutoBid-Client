import AutoCard from "@/common/AutoCard";
import FiltersBar from "@/common/FiltersBar";
import SideBar from "@/common/SideBar";
import Head from "next/head";

const cars = [
  {
    id: "1",
    brand: "Toyota",
    model: "Corolla",
    year: 2018,
    kilometers: 50000,
    domain: "ABC123",
    owner: "John Doe",
    engine: "2.0L",
    transmission: "Automatic",
    driveTrain: "FWD",
    bodyType: "Sedan",
    color: "Silver",
    highlights: "Keyless entry, Backup camera",
    equipement: "Air conditioning, Power windows",
    modifications: "None",
    knownkFlaws: "Minor scratches on the left side",
    services: "Regularly serviced at authorized service center",
    addedItems: "Floor mats, Window tint",
    checked: true,
    images: [
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
    ],
  },
  {
    id: "2",
    brand: "Honda",
    model: "Civic",
    year: 2019,
    kilometers: 40000,
    domain: "XYZ789",
    owner: "Jane Smith",
    engine: "1.5L",
    transmission: "Manual",
    driveTrain: "FWD",
    bodyType: "Coupe",
    color: "Red",
    highlights: "Sunroof, Alloy wheels",
    equipement: "Bluetooth connectivity, Cruise control",
    modifications: "Aftermarket exhaust system",
    knownkFlaws: "Small dent on the rear bumper",
    services: "Serviced at local garage",
    addedItems: "Rear spoiler",
    checked: false,
    images: [
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
    ],
  },
  {
    id: "3",
    brand: "Ford",
    model: "Mustang",
    year: 2020,
    kilometers: 15000,
    domain: "DEF456",
    owner: "Michael Johnson",
    engine: "5.0L",
    transmission: "Automatic",
    driveTrain: "RWD",
    bodyType: "Convertible",
    color: "Black",
    highlights: "Leather seats, Navigation system",
    equipement: "Heated seats, Dual-zone climate control",
    modifications: "Performance exhaust, Cold air intake",
    knownkFlaws: "Scratches on the driver-side door",
    services: "Maintained at authorized dealership",
    addedItems: "Custom wheels",
    checked: false,
    images: [
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
    ],
  },
  {
    id: "4",
    brand: "Chevrolet",
    model: "Camaro",
    year: 2017,
    kilometers: 30000,
    domain: "GHI789",
    owner: "Emily Wilson",
    engine: "3.6L",
    transmission: "Automatic",
    driveTrain: "RWD",
    bodyType: "Coupe",
    color: "Yellow",
    highlights: "RS package, Backup camera",
    equipement: "Keyless entry, Power seats",
    modifications: "Upgraded suspension",
    knownkFlaws: "Small dent on the hood",
    services: "Regularly serviced at independent mechanic",
    addedItems: "Hood stripes",
    checked: true,
    images: [
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
    ],
  },
  {
    id: "5",
    brand: "Volkswagen",
    model: "Golf GTI",
    year: 2016,
    kilometers: 40000,
    domain: "JKL123",
    owner: "Olivia Davis",
    engine: "2.0L",
    transmission: "Automatic",
    driveTrain: "FWD",
    bodyType: "Hatchback",
    color: "White",
    highlights: "Sunroof, LED headlights",
    equipement: "Touchscreen infotainment system, Apple CarPlay",
    modifications: "None",
    knownkFlaws: "Scratches on the rear bumper",
    services: "Serviced at authorized service center",
    addedItems: "Roof rack",
    checked: true,
    images: [
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
    ],
  },
  {
    id: "6",
    brand: "BMW",
    model: "3 Series",
    year: 2019,
    kilometers: 25000,
    domain: "MNO456",
    owner: "James Anderson",
    engine: "2.0L",
    transmission: "Automatic",
    driveTrain: "RWD",
    bodyType: "Sedan",
    color: "Blue",
    highlights: "Navigation system, Leather seats",
    equipement: "Keyless entry, Power trunk",
    modifications: "M Sport package",
    knownkFlaws: "Minor paint chips on the front bumper",
    services: "Serviced at BMW dealership",
    addedItems: "M Performance exhaust",
    checked: false,
    images: [
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
    ],
  },
  {
    id: "7",
    brand: "BMW",
    model: "X5",
    year: 2022,
    kilometers: 5000,
    domain: "XYZ123",
    owner: "Daniel Johnson",
    engine: "3.0L",
    transmission: "Automatic",
    driveTrain: "AWD",
    bodyType: "SUV",
    color: "Black",
    highlights: "Panoramic sunroof, Navigation system",
    equipement: "Leather seats, Heated steering wheel",
    modifications: "None",
    knownkFlaws: "None",
    services: "Regularly serviced at authorized dealership",
    addedItems: "Roof rails, All-weather floor mats",
    checked: true,
    images: [
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
    ],
  },
  {
    id: "8",
    brand: "Audi",
    model: "A4",
    year: 2020,
    kilometers: 20000,
    domain: "STU234",
    owner: "William Taylor",
    engine: "2.0L",
    transmission: "Automatic",
    driveTrain: "AWD",
    bodyType: "Sedan",
    color: "Gray",
    highlights: "Virtual cockpit, Bang & Olufsen sound system",
    equipement: "Leather seats, Parking sensors",
    modifications: "None",
    knownkFlaws: "Small scratch on the rear fender",
    services: "Serviced at authorized service center",
    addedItems: "S-Line exterior package",
    checked: true,
    images: [
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
    ],
  },
  {
    id: "9",
    brand: "Nissan",
    model: "Altima",
    year: 2017,
    kilometers: 35000,
    domain: "VWX567",
    owner: "Ava Hernandez",
    engine: "2.5L",
    transmission: "CVT",
    driveTrain: "FWD",
    bodyType: "Sedan",
    color: "Red",
    highlights: "Remote start, Blind spot detection",
    equipement: "Power windows, Keyless entry",
    modifications: "None",
    knownkFlaws: "Minor dent on the rear bumper",
    services: "Regularly serviced at local mechanic",
    addedItems: "Trunk organizer",
    checked: false,
    images: [
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
    ],
  },
  {
    id: "10",
    brand: "Jeep",
    model: "Wrangler",
    year: 2015,
    kilometers: 60000,
    domain: "YZA890",
    owner: "Benjamin Thompson",
    engine: "3.6L",
    transmission: "Manual",
    driveTrain: "4x4",
    bodyType: "SUV",
    color: "Green",
    highlights: "Removable hardtop, Off-road tires",
    equipement: "Power door locks, Cruise control",
    modifications: "Lift kit, LED light bar",
    knownkFlaws: "Minor rust spots on the fenders",
    services: "Maintained at Jeep dealership",
    addedItems: "Winch",
    checked: false,
    images: [
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
      "https://source.unsplash.com/random/384x256/?cars",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>AutoBid</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-20">
        <FiltersBar />

        <section className="flex">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {cars?.map((car, indx) => (
              <AutoCard car={car} key={car.model + "-" + indx} />
            ))}
          </div>

          <SideBar newListingsCars={[...cars].splice(3)} />
        </section>
      </main>
    </>
  );
}
