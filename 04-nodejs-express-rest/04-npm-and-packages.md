# 4 · npm and packages 📦

> **TL;DR:** `npm` is a tool and an online library of free code. `npm init -y` starts a project; `npm install <name>` adds a package to it.

## 💡 The big idea

Why write everything from scratch? **npm** is both a command-line tool and an **online registry of free, reusable packages** of JavaScript code. Instead of writing everything yourself, a project can install a package that already solves a common problem, such as a **server framework** or **talking to a database**. Think of it as an enormous, free **app store for code**.

## 🔍 The details

### Starting a new project

Every Node.js project starts with a **`package.json`** file, which keeps track of the project's **name, version, and dependencies** (the packages it relies on). It can be created with:

```bash
npm init -y     # -y accepts all the default answers
```

This generates a `package.json` file similar to this:

```json
{
    "name": "my-app",
    "version": "1.0.0",
    "main": "index.js"
}
```

(The real file has a few more fields; this is the heart of it.) Think of `package.json` as the project's **ID card plus shopping list**.

### Installing a package

Besides its own built-in modules, Node.js can also use **packages published by other developers**. Installing one adds it to the project and **lists it inside `package.json`**, so it can be loaded with `require()` exactly like a built-in module.

```bash
npm install express
```

From this point on, `require('express')` works anywhere inside the project.

After installing you'll notice two new things:

| What appeared | What it is |
|---|---|
| `node_modules/` | The folder where the downloaded packages (and *their* dependencies) live. It can get huge |
| A `"dependencies"` section in `package.json` | The list of packages your project needs, e.g. `"express": "^5.2.1"` |

> 🚫 **Do not commit `node_modules` to version control.** Anyone can rebuild it by running `npm install`, which reads `package.json`. List it in a `.gitignore` file instead (this repo's own [`.gitignore`](../.gitignore) does). That's one of the chapter's "common mistakes".

> 🔁 **Starting from someone else's project?** Run `npm install` with no package name: npm reads `package.json` and installs everything listed.

## 🛠️ Try it

1. Make a new folder, run `npm init -y`, and open the generated `package.json`.
2. Run `npm install express`. What changed in `package.json`? What's inside `node_modules`?

## 📚 Go deeper

- [W3Schools – Node.js tutorial](https://www.w3schools.com/nodejs/) · [Node.js — official documentation](https://nodejs.org/en/docs)

---

⬅️ [3 · What Node.js adds](03-what-node-adds.md) · ➡️ Next: [**5 · Organizing code with modules**](05-modules.md)
