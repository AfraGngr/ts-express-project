# ts-express-project
## Introduction
This README provides instructions on synchronizing the database for ts-project. It's designed for developers or users who wish to set up and test the application in their own environment.

## Prerequisites
To run and test ts-project, you need to have the following installed on your machine:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Database**: A compatible SQL database installed locally. The type of SQL database should match the one configured in your .env files (e.g., PostgreSQL, MySQL).

## Setting Up the Database
### Local Development
1.**Database Configuration:** Configure your database connection in .env.development (for development environment) or appropriate .env file.

- Example configuration:
  ```env
    DATABASE_URL="postgresql://username:password@localhost:5432/yourdb"
    ```

2.**Installing Dependencies:**

- Run `npm install` to install the necessary dependencies.

3.**Applying Initial Migrations:**
- To apply initial migrations to your local development database, run:

    ```bash
    npm run migrate:dev
    ```
4.**Seeding the Database:**

- Before starting the application, seed the database by running:

    ```bash
    npm run seed
    ```
    This will populate the database with initial data necessary for the application.

### Testing
- For testing purposes, use `.env.test` for database configuration. Run:

    ```bash
    npm run migrate:test
    ```
    to apply migrations to the test database.

## Syncing with Production Database

> **Warning**: Always backup your production database before performing any operations.

### Applying Migrations to Production

1. **Review Migration Files**: Before applying new migrations to production, review the migration files in the `prisma/migrations` directory.

2. **Backup Production Database**: Ensure you have a recent backup of your production database.

3. **Deploying Migrations**: Run the following command to deploy migrations to your production database:

    ```bash
    npm run deploy
    ```

    This will apply only the pending migrations to the production database.
