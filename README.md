# NASA Explorer - Backend

This is the Express.js backend for the NASA Explorer project. It acts as a proxy and data processor between the frontend and NASA’s public APIs.

---

## Features

* 🌌 APOD (Astronomy Picture of the Day)
* 🔭 Mars Rover Photos with camera and sol filtering
* 🌍 EPIC (Earth Polychromatic Imaging Camera)
* ☄️ Near Earth Objects (NeoWs)
* 📷 NASA Image and Video Library search
* 🛡️ CORS-enabled and secured with `.env` API key

---

## Tech Stack

* Node.js
* Express.js
* Axios
* dotenv
* CORS

---

## Setup Instructions

### Prerequisites

* Node.js v16+

### Installation

```bash
git clone https://github.com/nsalunke729/NasaApp.git
cd NasaApp
npm install
```

### Environment Setup

Create a `.env` file:

```env
NASA_API_KEY=your_nasa_api_key_here
```

### Start Server

```bash
npm start
```

Backend runs at `http://localhost:5000`

---

## API Endpoints

| Endpoint      | Description                          |
| ------------- | ------------------------------------ |
| `/api/apod`   | Fetches Astronomy Picture of the Day |
| `/api/mars`   | Fetches Mars Rover Photos            |
| `/api/epic`   | Gets latest EPIC images              |
| `/api/neo`    | Gets today’s Near Earth Objects      |
| `/api/search` | Search NASA Image and Video Library  |

---

## Deployment

Can be deployed on Render, Railway, or Heroku.

Example for Render:

* Add `web service`
* Set root directory to backend folder
* Add environment variable: `NASA_API_KEY`
* Start command: `npm start`

---

## Author

Built with 💻 by Niranjan Salunke

📫 Email: [your-nsalunke729@gmail.com](mailto:nsalunke729@gmail.com)

---

## License

MIT License
