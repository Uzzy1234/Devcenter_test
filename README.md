# Bloverse API

This is a Node JS (Adonis) implementation of the Devceneter test.

## Setup

- Clone the repository

```bash
git clone https://github.com/uzzy1234/Devcenter_test
```

- Install the Adonis cli globally

```bash
npm i -g @adonisjs/cli
```

- Install project dependencies

```bash
cd Devcenter_test
npm install
```

- Create a `.env` file and copy the contents of the `.env.example` into it. Or run:

Linux:
```bash
cp .env.example .env
```

Windows:
```shell
xcopy .env.example .env
```

> If you already have postgres installed database setup the `DB_DATABASE` variable in your `.env` file and move to the migration step.

> If you DO NOT already have postgres installed, please install postgres, to be able to work with this project.


- Run the following command to run startup migrations.

```bash
adonis migration:run
```
- Run the following command to seed the Developer Categories and Car Types data to the database.
```bash
adonis seed
```

### Testing
 Run:

```shell
adonis test
```

### Documentation

- [API Documentation](https://github.com/Uzzy1234/Devcenter_test/blob/master/v1API.md)
