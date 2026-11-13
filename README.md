# Playwright POM Automation Framework — Sauce Demo

![Playwright](https://img.shields.io/badge/Playwright-v1.65.0-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Test Status](https://img.shields.io/badge/Tests-3%20Passed-brightgreen?style=for-the-badge)

A robust, scalable end-to-end UI automation testing framework built with **Playwright (JavaScript)** using the **Page Object Model (POM)** design pattern and **Data-Driven Testing (DDT)** methodology against [Sauce Demo](https://www.saucedemo.com/).

---

## 📌 Project Overview

This project demonstrates automated web testing using best-practice software quality assurance patterns:
- **Page Object Model (POM):** Decouples page element locators and user interactions from test scripts for high reusability and clean maintainability.
- **Data-Driven Testing (DDT):** Test data is completely externalized into JSON format (`data/users.json`), allowing multiple authentication scenarios (positive & negative) to execute dynamically from a single test specification.
- **CLI Test Execution:** Dedicated npm scripts for lightweight, headless test execution via command-line interface.

---

## 🏗️ Project Architecture & Folder Structure

```text
Ashiquzzaman MD9/
│
├── data/
│   └── users.json            # Externalized test dataset (positive & negative test cases)
│
├── pages/
│   ├── LoginPage.js          # POM class for Sauce Demo Login page (locators & actions)
│   └── InventoryPage.js      # POM class for Sauce Demo Products/Inventory page
│
├── tests/
│   └── login.spec.js         # Data-driven test script looping through users.json
│
├── .gitignore                # Git ignore rules for node_modules, reports, cache
├── package.json              # Project metadata, dependencies, and custom npm scripts
├── package-lock.json         # Dependency tree lockfile
├── playwright.config.js      # Playwright runner configuration (Chromium, baseURL, reporter)
└── README.md                 # Project documentation
```

---

## 🧪 Test Scenarios Covered

The test suite executes 3 data-driven test cases based on [data/users.json](data/users.json):

| Test Case | Username | Password | Expected Outcome | Verification / Assertion |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01 (Positive)** | `standard_user` | `secret_sauce` | `success` | Verifies `InventoryPage.isLoaded()` is `true` (title and product grid are visible). |
| **TC-02 (Negative)** | `locked_out_user` | `secret_sauce` | `error` | Verifies `LoginPage.getErrorMessage()` returns an active non-empty error message. |
| **TC-03 (Negative)** | `standard_user` | `wrong_password` | `error` | Verifies `LoginPage.getErrorMessage()` returns an active non-empty error message. |

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Playwright Browsers (Chromium)
```bash
npx playwright install chromium
```

---

## 💻 Running Tests via CLI

Run the dedicated npm test script configured in `package.json`:

```bash
npm run test:login
```

### Expected Output
```text
Running 3 tests using 3 workers

  ✓ 1 tests/login.spec.js:8:5 › Sauce Demo Data-Driven Login Tests › Login attempt for "standard_user" expecting success
  ✓ 2 tests/login.spec.js:8:5 › Sauce Demo Data-Driven Login Tests › Login attempt for "standard_user" expecting error
  ✓ 3 tests/login.spec.js:8:5 › Sauce Demo Data-Driven Login Tests › Login attempt for "locked_out_user" expecting error

  3 passed
```

### Additional Test Commands
- **Run tests in headed mode (visible browser window):**
  ```bash
  npx playwright test tests/login.spec.js --headed
  ```
- **View HTML test report:**
  ```bash
  npx playwright show-report
  ```

---

## 🤖 AI-Assisted Engineering Reflection

- **Initial Scaffolding:** Used **Claude Web** to generate base Playwright project configuration, template POM classes (`LoginPage`, `InventoryPage`), and data-driven test structure.
- **Manual Adjustments & DevTools Inspection:**
  - Inspected real DOM elements on [saucedemo.com](https://www.saucedemo.com) to ensure high-reliability locators using dedicated `[data-test="..."]` attributes.
  - Implemented explicit visibility waits inside `LoginPage.getErrorMessage()` and `InventoryPage.isLoaded()` to eliminate race conditions and flaky assertions.
  - Configured parameterized dynamic test names inside the loop so test reports clearly identify each scenario.

---

## 👤 Author

- **Name:** Ashiquzzaman
- **Course:** Software Quality Assurance (SQA) — Module 9
- **Assignment:** Building a Playwright POM Framework with Claude Web and CLI

