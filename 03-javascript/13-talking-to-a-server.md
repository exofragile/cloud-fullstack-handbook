# 13 · Talking to a server: `fetch`, `async/await`, JSON and REST 📡

> **TL;DR:** `fetch` asks a server for something. It takes time, so you `await` the answer inside an `async` function. Data travels as JSON, and the request *method* (GET, POST, PUT, DELETE) tells the server what you want to do.

## 💡 The big idea

So far, everything has happened **locally on the user's device**. Most real applications also talk to a **server**: to load data, save a registration, log someone in.

Think of ordering at a café ☕. You place your order (the **request**), then you *don't* freeze at the counter staring at the barista. You wait, and when the coffee is ready they call your name (the **response**). Meanwhile the café keeps running.

This lesson follows that story:

1. 🕐 **The waiting problem** – why network calls are asynchronous
2. 📞 **`fetch` + `async/await`** – asking and waiting politely
3. 📦 **JSON** – the shape the answer comes in
4. 🚧 **Failure** – when the answer is "no" or never arrives
5. 🧭 **REST** – the vocabulary of requests (GET, POST, PUT, DELETE)
6. ✉️ **Sending data** – POSTing a JSON body

## 🔍 The details

### 1 · The waiting problem 🕐

The browser provides the `fetch` function for talking to servers. **Every network request is asynchronous: it does not pause the rest of the page while it waits for a reply.** Imagine if your whole page froze for two seconds every time it asked for data!

A function containing an asynchronous operation is marked **`async`**. Inside it, **`await`** tells the runtime to **pause that function (not the whole page)** until the awaited line finishes.

Here's a runnable simulation (no internet needed) that shows the order things happen in:

```js
const wait = (ms) => new Promise(res => setTimeout(res, ms));  // pretend network delay

async function fakeFetch() {
  console.log("2. request sent, waiting…");
  await wait(100);
  console.log("4. reply arrived");
  return { name: "Leanne" };
}

async function main() {
  console.log("1. start");
  const promise = fakeFetch();
  console.log("3. page keeps running while we wait");
  const data = await promise;
  console.log("5. data:", data);
}
main();
```

Output, in this order: `1. start` → `2. request sent, waiting…` → `3. page keeps running while we wait` → `4. reply arrived` → `5. data: { name: 'Leanne' }`. Step 3 happens **before** step 4: the code didn't stand still.

The thing `fakeFetch()` returns before the reply arrives is a **Promise** ("I promise to give you a value later"). Print it too early and you'll see `Promise { <pending> }`: a classic bug when you forget `await`.

### 2 · `fetch` + `async/await` 📞

```js
async function getUser() {
  const response = await fetch('https://api.example.com/users/1');
  const data = await response.json(); // parsing the body is also asynchronous
  console.log(data);
}
```

There are **two** `await`s because there are two waits: first for the response to *start* arriving (`fetch`), then for the body to be fully read and parsed (`response.json()`).

### 3 · JSON 📦

Network requests usually send and receive data as **JSON** (JavaScript Object Notation). It follows the same syntax as JS objects, with a few differences:

- Both **keys and string values must use double quotes** `"`.
- The **last property cannot have a trailing comma**.
- Only strings, numbers, booleans, objects, arrays and `null` are allowed as values.
- **Comments are not allowed.**

```json
{
    "firstName": "John",
    "lastName": "Doe",
    "age": 25
}
```

`JSON.parse` turns a JSON **string** into a JavaScript **object**; `JSON.stringify` does the reverse.

```js
const text = '{"firstName":"John","age":25}';
const obj = JSON.parse(text);     // string → object
console.log(obj.age);             // 25

const back = JSON.stringify(obj); // object → string
console.log(back);                // {"firstName":"John","age":25}
```

I checked that all four of these break `JSON.parse` with a `SyntaxError`: unquoted keys (`{name:"John"}`), single quotes (`{'name':'John'}`), a trailing comma (`{"a":1,}`) and a comment. (That's the `try...catch` link from [Lesson 9](09-error-handling.md): if a server answers with something that isn't valid JSON, `response.json()` throws.)

### 4 · When things go wrong 🚧

**`fetch` only rejects on a network failure** (no connection, DNS failure, and similar). An error status such as **404 or 500 still resolves normally**, so you must check **`response.ok`** before trusting the data. Wrapping the call in `try...catch` prevents a network error from crashing the rest of the app.

```js
async function getUser() {
  try {
    const response = await fetch('https://api.example.com/users/1');
    if (!response.ok) {
      console.log('Error:', response.status);
      return;
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Network error:', error);
  }
}
```

Two different kinds of failure, two different guards:

| Failure | Example | How you catch it |
|---|---|---|
| **The server answered, but with "no"** | 404 Not Found, 500 Server Error | `if (!response.ok)` |
| **No answer at all** | Wi-Fi off, server down | `try…catch` |

`response.ok` is `true` for status codes 200–299.

### 5 · REST: the language of requests 🧭

Network communication commonly follows **REST** (Representational State Transfer), an architectural style built on HTTP's request/response flow. **Every request carries a method telling the server which action to perform.**

| Method | Purpose | Café analogy |
|---|---|---|
| `GET` | Requesting data. This is `fetch`'s **default** method | "What's on the menu?" |
| `POST` | Sending **new** data | "I'd like to place a new order" |
| `PUT` | **Updating** existing data | "Change my order to oat milk" |
| `DELETE` | Deleting data | "Cancel my order" |

(Chapter 4 explains REST in much more depth and has you build a server that understands these four.)

### 6 · Sending data ✉️

To send data, set `method` to `POST` (or `PUT`), and turn the JS object into a JSON string with `JSON.stringify` for the request **body**.

```js
async function createUser() {
  const response = await fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json'
    },
    body: JSON.stringify({
       name: 'John',
       age: 25
    })
  });
  const data = await response.json();
  console.log(data);
}
```

| Option | What it is |
|---|---|
| `method` | `'POST'`, `'PUT'`, `'DELETE'` and similar; tells the server the intended action |
| `headers` | Metadata about the request. `Content-Type` tells the server what format the body is in |
| `body` | The actual data sent. Since it is JSON here, it must be turned into a string with `JSON.stringify` |

> ⚠️ Forget the `Content-Type: application/json` header and many servers won't understand the body. You'll see this go wrong for real in [Chapter 4](../04-nodejs-express-rest/10-building-a-rest-api.md).

## 🛠️ Try it — Exercise 13

> 🌐 These exercises call a free practice API, [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/), so they need an internet connection. I couldn't reach it from my own test environment, so the outputs below are described from how the API is documented to behave; yours should match closely.

1. **Write an `async` function that fetches `https://jsonplaceholder.typicode.com/users/1` and logs the result. Then log just one property from it.**
   ```js
   async function getUser() {
     const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
     const user = await response.json();
     console.log(user);        // a big object with id, name, username, email, address…
     console.log(user.name);   // one property (e.g. "Leanne Graham")
   }
   getUser();
   ```
2. **Change the URL to a path that does not exist on that host and check `response.ok` and `response.status` instead of assuming the request "worked".**
   ```js
   const response = await fetch('https://jsonplaceholder.typicode.com/nope');
   console.log(response.ok, response.status);   // false 404
   ```
   No exception was thrown, yet `ok` is `false` and `status` is `404`. That's the "fetch doesn't reject on 404" rule in action.
3. **Wrap a `fetch` call in `try...catch` and test it with the browser's DevTools set to "Offline" (Network tab) to see the `catch` branch run.**
   In DevTools → **Network** → change "No throttling" to **Offline**, then run the function. `fetch` rejects with a `TypeError: Failed to fetch`, your `catch` runs, and you see `Network error: …`.
4. **POST a small object to `https://jsonplaceholder.typicode.com/posts` with `JSON.stringify` in the body and log the response.**
   ```js
   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ title: 'Hello', body: 'My first post', userId: 1 })
   });
   console.log(await response.json());
   // your object echoed back, plus a new id (the practice API doesn't really save it)
   ```
5. **Fetch an array of objects and use `.map()` ([Lesson 6](06-arrays.md)) to turn each one into a short HTML string, then insert the result into the page with `innerHTML` ([Lesson 11](11-working-with-the-dom.md)).**
   ```js
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const users = await response.json();
   const html = users.map(u => `<li>${u.name}</li>`).join('');
   document.querySelector('#user-list').innerHTML = html;
   ```
   (This is fine for trusted practice data. With user-supplied text, build elements with `createElement` and `textContent` instead of `innerHTML`, as discussed in Lesson 11.)

## ⚠️ Watch out

- Forgetting `await` on `fetch` or `response.json()` and logging a Promise instead of the data.
- Assuming a non-2xx response is an error `fetch` will catch.
- Forgetting the `Content-Type` header, or forgetting `JSON.stringify` on the body.

## 📚 Go deeper

- [MDN – Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [json.org – the JSON format](https://www.json.org/json-en.html)

---

⬅️ [12 · Events](12-events.md) · ➡️ Next: [**Capstone: bring the page to life**](14-capstone-bring-the-page-to-life.md)
