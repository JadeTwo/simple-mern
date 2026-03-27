<p align="center">
  <img src="https://user-images.githubusercontent.com/14852491/64910580-cc163700-d70f-11e9-99ec-8c49095a8c3b.png" />
  <br/>
  A simple MERN (MongoDB, Express, React and Node) monorepo setup
</p>

## Intro

A refactored version of the [original repository](https://github.com/jmsv/simple-mern) by [James Vickery](https://github.com/jmsv). 

This one uses [Vite](https://vite.dev/) for the frontend and ES Module syntax in the backend (the rest of the code is pretty much the same). 

## Getting Started

### Development

1. `npm run build` in the root directory
2. Rename the `.env.example` file to `.env` and add MONGO_URI for your database connection string
3. `npm run dev` in the root directory 

### Production

1. Deploy on [render](https://render.com/) as a Web Service
2. Use `npm run build` as the Build Command
3. Use `npm start` as the Start Command
3. Add your MONGO_URI environment variable
