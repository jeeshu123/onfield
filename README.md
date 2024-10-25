# Sports News Recommendation Web Application - MERN Stack

## Project Overview

**Sports News Web Application** is a dynamic and user-friendly platform aimed at delivering personalized sports news, real-time updates, and interactive live coverage for sports enthusiasts. Using cutting-edge content recommendation algorithms and real-time data APIs, the platform caters to the evolving needs of sports fans by offering a personalized, engaging, and seamless user experience. 

The application offers features such as:
- **Personalized News Feeds**: Tailored content based on user preferences and behavior.
- **Real-Time Data**: Live scores, stats, and game updates using real-time APIs.
- **Interactive Live Coverage**: In-depth, interactive coverage of live sporting events.
- **User Engagement**: Features designed to enhance user engagement, such as comments, likes, and sharing options.

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Installation and Setup](#installation-and-setup)
3. [Features](#features)
4. [API Integration](#api-integration)
5. [License](#license)

## Technologies Used

This web application is built using the following technologies:

- **Frontend**: React.js, Redux (for state management), React Router
- **Database**: MongoDB
- **Real-Time Data**: APIs for live scores ([API_SPORTS](https://api-sports.io/)) and sports news ([NewsCatcher](https://www.newscatcherapi.com/))
- **Authentication**: JWT (JSON Web Tokens) for secure user authentication
- **Styling**: CSS, Tailwind CSS

## Installation and Setup

To set up the project locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **MongoDB** (locally or using a cloud service like MongoDB Atlas)
- **npm** (comes with Node.js)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jeeshu123/onfield.git
   cd onfield

2. **Install dependencies:**

   ```bash
   npm install

3. **Run Project:**

   ```bash
   npm start

4. **In your local browser go to:**

   ```bash
   http://localhost:3000

## Features

- User Authentication: Users can sign up, log in, and manage their profiles.
- Personalized News Feeds: Tailored content recommendations based on the user’s selected sports, teams, and past interactions.
- Real-Time Scores and Updates: Live sports updates powered by real-time APIs.
- Interactive Live Coverage: Users can follow matches, view stats, and interact during live events.
- User Engagement: Users can like, comment on, and share articles and live updates.

## API Integration

This application uses real-time sports data APIs to fetch live scores and updates. Here are the key APIs:

- [API_SPORTS](https://api-sports.io/): Provides real-time scores, stats, and schedules for various sports.
- [NewsCatcher](https://www.newscatcherapi.com/): Fetches the latest news articles related to sports events, players, and teams.

## License


