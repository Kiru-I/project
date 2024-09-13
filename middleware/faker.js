const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');
const connection = require('../database/mongoConnection')
// Import the News model from the schema file
const News = require('../models/beritaModel'); // Adjust this path according to your project structure

// Connect to MongoDB
connection()
// Data Factory using Faker.js
const createFakeNews = () => {
  return {  
    JudulBerita: faker.lorem.sentence(),
    TanggalUpload: faker.date.past(),
    TanggalDiperbaharui: faker.date.recent(),
    deskripsi: faker.lorem.paragraph(),
    PenanggungJawab: faker.person.fullName(),
    IsiBerita: faker.lorem.paragraphs(3),
    Img: [faker.image.url(), faker.image.url()]
  };
};

// Insert Data into MongoDB
const insertFakeNews = async (num) => {
  try {
    const newsArray = [];
    for (let i = 0; i < num; i++) {
      newsArray.push(createFakeNews());
    }
    await News.insertMany(newsArray); // Using the imported News model
    console.log(`${num} fake news articles inserted successfully`);
  } catch (error) {
    console.error('Error inserting fake data:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Insert 10 fake news articles
insertFakeNews(10);
