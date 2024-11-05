This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


# Country Information App

The app is divided into a frontend (React/Next.js) and a backend (Node.js with Express ).

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn to manage dependencies

## Project Setup

1. Clone this repository to your local machine.
2. Make sure to install all dependencies for both the frontend and backend by following the steps below.

## Backend (Node.js + Express)

1. Install dependencies:
    
    ```bash
    npm install
    
    ```
    
2. Create a `.env` file in the backend directory and add the following environment variables:
    
    ```
    PORT=3001
    API_URL=https://date.nager.at/api/v3
    COUNTRIES_NOW_API=https://countriesnow.space/api/v0.1/countries
    ```
    
3. Start the backend server:
    
    ```bash
    npm run dev
    ```
    
4. The backend will be available at `http://localhost:3001`.

### Endpoints

- `GET /api/countries` - Returns the list of available countries.
- `GET /api/countries/:code` - Returns detailed information about a specific country, including borders, population data, and the flag URL.

## Frontend (React + Next.js)

### Setup

1. Navigate to the frontend directory:
    
    ```bash
    cd frontend
    ```
    
2. Install dependencies:
    
    ```bash
    npm install
    ```
    
3. Create a `.env` file in the frontend directory with the following variable:
    
    ```
    NEXT_PUBLIC_API_URL=http://localhost:3000
    ```
    
4. Start the frontend server:
    
    ```bash
    npm run dev
    ```
    
5. The frontend will be available at `http://localhost:3000`.


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
