# Bloverse API

This is a Node JS (Adonis) implementation of the Devceneter test.

## Setup

- Clone the repository

```bash
git clone https://gitlab.com/uzzu1234/Devcenter_test
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

Update the variables to match your local configurations.

> If you have the previous bloverse postgres database setup update the `DB_DATABASE` variable in your `.env` file and skip the migration step.

- Run the following command to run startup migrations.

```bash
adonis migration:run
```

### Testing
 Run:

```shell
adonis test
```

### Documentation

- [API Documentation](https://gitlab.com/uzzy1234/Devcenter_test/v1API.md)
