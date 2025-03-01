# Project Documentation

## Expected Deliverables

- **Source code of the backend API**: Available in the GitHub repository.
- **API documentation with request and response examples**: Provided below.
- **Database schema**: Defined using Sequelize ORM and PostgreSQL.

---

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/manikanta5827/restaurant_api.git
   cd restaurant_api
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Setup Environment Variables:**
   ```bash
   cp .env.example .env
   ```
4. **Start the Application:**
   ```bash
   npm start
   ```
5. **Access API Documentation:**
   Open your browser and navigate to:
   ```
   http://localhost:8080/api-docs
   ```

---

## API Documentation

### 1. **Generate Token**

**Endpoint:** `POST /generate-token`

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response:**

```json
{
  "status": "Success",
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

### 2. **Generate Signature**

**Endpoint:** `POST /generate-signature`

**Request Body:**

```json
{
  "data": {
    "restaurantid": 2
  }
}
```

**Response:**

```json
{
  "status": "Success",
  "signature": "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"
}
```

### 3. **Get Menu**

**Endpoint:** `POST /get-menu`

**Headers:**

- `Authorization: Bearer <token>`
- `x-signature: <generated-signature>`

**Request Body:**

```json
{
  "data": {
    "restaurantid": 2
  }
}
```

**Response:**

```json
{
  "status": "Success",
  "data": [
    {
      "id": 4,
      "restaurantid": 2,
      "name": "Pani Puri",
      "price": "20.00",
      "description": "Crispy puris filled with spicy and tangy water",
      "rating": 4.2,
      "preparation_time": 3,
      "offer_tag": "Buy 1 Get 1 Free"
    }
  ]
}
```

### 4. **Create Menu**

**Endpoint:** `POST /create-menu`

**Request Body:**

```json
{
  "data": [
    {
      "restaurantid": 2,
      "name": "Burger",
      "price": "50.00",
      "description": "Cheese burger with fresh lettuce",
      "rating": 4.5,
      "preparation_time": 10,
      "offer_tag": "20% Off"
    }
  ]
}
```

**Response:**

```json
{
  "status": "Success"
}
```

---

## Database Schema

The project uses PostgreSQL as the database. The `Menu` table schema is defined using Sequelize ORM.

Database Schema Explanation

This project uses a PostgreSQL database to store restaurant menu data. The database consists of a single table:

Tables

menu: Stores menu items for different restaurants.

id (Primary Key, Auto-incremented): Unique identifier for each menu item.

restaurantid (Foreign Key): Identifies which restaurant the menu item belongs to.

name (String, Required): Name of the menu item.

price (Decimal, Required): Price of the menu item.

description (Text, Default: 'No description available'): Description of the dish.

rating (Float, Default: 0): Customer rating of the menu item.

preparation_time (Integer, Default: 10 minutes): Estimated time to prepare the dish.

offer_tag (String, Default: 'No Offer'): Promotional offer associated with the menu item.

---

## Notes

- The API uses JWT-based authentication & crypto based signature validation.
- Database connection is handled via `DB_URI` in the `.env` file.
- `generate-token` and `generate-signature` endpoints are required for secure communication.
