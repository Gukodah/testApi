## Getting Started

Tho run this project follow the instructions below

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Gukodah/testApi.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Rename env.example inside the src folder to `.env`

5. Run server
   ```sh
   npm start
  ```
6. Access some of the available routes 

    List all cars - [GET] http://localhost:3001/car/index

    or

    Create a new car register - [POST] http://localhost:3001/car/create
    
    The POST request expects a JSON with the following body:
      
    * "brand":"chevrolet"






