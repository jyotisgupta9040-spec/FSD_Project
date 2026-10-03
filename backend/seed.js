const mongoose = require("mongoose");
require("dotenv").config();

const Pandal = require("./models/Pandal");

const pandals = [
  {
    name: "Lalbaugcha Raja",
    location: "Lalbaug, Mumbai",
    image: "/images/lalbaugcha-raja.webp",
    latitude: 18.9907,
    longitude: 72.8376,
    mukhDarshan: 45,
    charanDarshan: 25,
    crowd: "High",
    queue: "Very Long"
  },

  {
    name: "GSB Seva Mandal",
    location: "King's Circle, Mumbai",
    image: "/images/gsb-ganpati.webp",
    latitude: 19.0268,
    longitude: 72.8553,
    mukhDarshan: 30,
    charanDarshan: 15,
    crowd: "High",
    queue: "Long"
  },

  {
    name: "Andhericha Raja",
    location: "Andheri West, Mumbai",
    image: "/images/andhericha-raja.jpg",
    latitude: 19.1320,
    longitude: 72.8296,
    mukhDarshan: 25,
    charanDarshan: 10,
    crowd: "Medium",
    queue: "Medium"
  },

  {
    name: "Chinchpokli Chintamani",
    location: "Chinchpokli, Mumbai",
    image: "/images/chinchpokli-chintamani.jpeg",
    latitude: 18.9826,
    longitude: 72.8321,
    mukhDarshan: 35,
    charanDarshan: 20,
    crowd: "High",
    queue: "Long"
  },

  {
    name: "Khetwadi Ganraj",
    location: "Khetwadi, Girgaon, Mumbai",
    image: "/images/khetwadi-ganraj.jpeg",
    latitude: 18.9582,
    longitude: 72.8276,
    mukhDarshan: 30,
    charanDarshan: 15,
    crowd: "Medium",
    queue: "Long"
  },

  {
    name: "Mumbaicha Raja",
    location: "Ganesh Galli, Lalbaug, Mumbai",
    image: "/images/ganesh-galli.jpeg",
    latitude: 18.9900,
    longitude: 72.8355,
    mukhDarshan: 40,
    charanDarshan: 20,
    crowd: "High",
    queue: "Long"
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Pandal.deleteMany();

    await Pandal.insertMany(pandals);

    console.log("6 Pandals Added Successfully");

    await mongoose.connection.close();

    console.log("Database Connection Closed");
  } catch (error) {
    console.log("Error:", error.message);
  }
};

seedDatabase();