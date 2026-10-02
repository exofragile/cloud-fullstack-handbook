# 1 · Installing Node.js 💾

> **TL;DR:** Download Node.js from nodejs.org. It installs `npm` too. Check with `node -v` and `npm -v`.

## 💡 The big idea

Node.js is a program you install, like any other. Once it's on your machine, a new command, `node`, appears in your terminal and can run JavaScript files.

## 🔍 The details

Node.js can be downloaded from [nodejs.org](https://nodejs.org/). **Installing it also installs npm automatically**, since the two are packaged together.

Once installed, two commands confirm everything is set up correctly:

```bash
node -v   # prints the installed Node.js version
npm -v    # prints the installed npm version
```

**You should see** something like `v22.22.2` and `10.9.7` (your numbers will differ). Any version number means success.

> 🖥️ **"Terminal"?** On Windows use PowerShell or Command Prompt; on macOS use Terminal; on Linux your usual terminal. In VS Code you can open one with **Ctrl+\`** (backtick).

If you see *"command not found"* or *"'node' is not recognized"*, close and reopen the terminal (so it picks up the new install), and if that doesn't help, reinstall Node.js.

## 🛠️ Try it

1. Install Node.js.
2. Run both commands above and note the versions.

## 📚 Go deeper

- [Node.js — official documentation](https://nodejs.org/en/docs/)

---

⬅️ [Chapter 4 home](README.md) · ➡️ Next: [**2 · Running JavaScript with Node**](02-running-javascript-with-node.md)
