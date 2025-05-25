# Workflow repo for the CA

This project is part of assignment workflows to practice using Git, GitHub, npm, ESLint, Prettier, Vite, and GitHub Actions.

---

## Live Demo

[View Live Site](SocanIcode:workflow-repo-ca:workflow)

---

## Features

- Displays basic information for registration form
- Uses ESLint and Prettier for clean code
- Uses environment variables with Vite
- Deploys automatically with GitHub Actions

---

## Technologies Used

- HTML, CSS, JavaScript
- Git & GitHub (branches and pull requests)
- ESLint & Prettier
- Node.js & npm
- Vite
- GitHub Actions

---

## File Structure

---

- ├── index.html
- ├── CSS/style.css
- ├── js/
- ├── .prettierrc
- ├── eslint.config.mjs
- ├── .env
- ├── package.json
- ├── README.md
- └── deploy.yml

---

## Setup Instruction

---

### 1. Clone the Respository

First, fork this Repository:
https://github.com/SocanIcode/Workflow-task-1.git

Then clone your forked vision:

```bash
git clone https://github.com/SocanIcode/Workflow-task-1.git
cd worflow-taks-1
```

### 2 Install Dependency

```bash
   npm install
```

### 3 Run the Project

- If using plain HTML/js
  -- Open index.html directly in browser

- If using vite

```bash
  npm run workflow
```

### 4. Linting and Formatting

Run Eslint

```bash
  npm run lint
```

Format using Prettier

```bash
   npm run format
```

---

## Task Checklist

- [x] Fork GitHub repo
- [x] Clone to own repo and open in VS Code
- [x] Initialize npm
- [x] Install ESLint and configure it
- [x] Install Prettier, configure it, and run formatting
- [x] Set up Husky and lint-staged for pre-commit hooks
- [x] Create config files in package.json for linting/formatting
- [ ] Fetch and display API data
- [ ] Create new dev branch
- [ ] Commit regularly
- [ ] Push branch and open a pull request
- [ ] Merge pull request
- [ ] Use Vite with .env
- [ ] Set up GitHub Actions deployment

---

## Author

SocanIcode
https://github.com/SocanIcode
