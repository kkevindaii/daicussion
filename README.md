# Daicussion:

Based off of Ben Awad's "Fullstack React GraphQL TypeScript Tutorial"

*UPDATE: Currently Daicussion is not being hosted on any platform, but can be hosted locally.

![](https://github.com/kkevindaii/daicussion/blob/main/readme_imgs/Capture3.JPG?raw=true)

# What is Daicussion

Daicussion is a simple reddit clone that features login, register, forget password, creating/updating/deleting a post, and many more to come. Daicussion is currently fully developed by kkevindaii (both backend and frontend).

# How Daicussion works

Daicussion can be broken down into 2 main components - Frontend and Backend.

## Backend

The backend utilizes Apollo (Graphql), express (REST), Redis for caching, Postgresql, and TypeORM. Typescript/NodeJS was the main language choice used here.
Apollo and express work in conjuction to make requests to the client and as well as receive data from the client. 
Postgresql is the main database that currently only stores the only items on the site (Posts and Users). 
TypeORM is utilized to run migrations to keep the database updated while the server is running. 
Typegraphql is used to handle client->server functions such as logining in, registering, etc.
Argon2 is used to hash the passwords on the database.

The backend is currently being hosted on Digital Ocean and a VPS to SSH and also use Dokku to deploy and redeploy the site into prod. The backend also utilizes Docker to manage the Postgresql and Redis containers before having Dokku manage all of these things. 

## Frontend

The Frontend is composed of mostly of Chakra, React, and Urql.
Chakra + React handles the HTML and CSS parts of the website and Urql handles exporting the pages onto the website itself. The frontend also uses Graphql to connect backend functions to frontend buttons and forms.

The Frontend is hosted on Vercel.

## How to Run locally

To run the project locally, use a idle such as VS Code and access the lireddit-server and the lireddit-web folder through terminal. From there use the command "yarn dev" on both the lireddit-server and lireddit-web terminals. There you should see that localhost:3000 is being used to host the server and all features can be explored (creating posts, users, upvotes, etc.) from there.

SCREENSHOTS


# Future Features
* Delete Account
* Commentting
* Reclicking on vote remove vote
