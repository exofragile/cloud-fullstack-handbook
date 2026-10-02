# 5 · Objects 🗃️

> **TL;DR:** Objects store data as key-value pairs called properties.

## 💡 The big idea

Everything else in JavaScript is an object, including functions and arrays. An object is like a **contact card**: labelled fields (name, phone, address), each with a value. The key is always treated as a **string**; the value can be any type, including *another object*.

If a key follows the variable naming rules (no spaces, does not start with a digit) it **does not need quotes**. If it doesn't, quotes are required. Keys are conventionally written in **camelCase**.

## 🔍 The details

```js
const user = {
   name: "John",
   "University Major": "Computer Science",
   age: 19,
   address: {
     street: "Street 7",
     house: "3020H"
   }
};
```

### Reading values

Values are read with **dot notation** or **bracket notation**. Bracket notation is required when the key is not a single word, or when the key itself is **stored in a variable**.

```js
console.log(user.name);                      // John
console.log(user["University Major"]);       // Computer Science
console.log(user.address.street);            // Street 7
console.log(user["address"]["house"]);       // 3020H

const key = "age";
console.log(user[key]);                      // 19 (bracket notation needed: the key is a variable)
```

`user.key` would look for a property literally named `"key"` and give `undefined`; `user[key]` uses the *value* of the variable `key` (`"age"`).

### Changing, adding, deleting, checking

An object is modified by assigning to its properties, adding new ones the same way, or removing one with `delete`. Whether a key exists at all is checked with the `in` operator.

```js
user.name = "Jake";               // change a property
user.familyName = "Smith";        // add a new property
delete user["University Major"];  // delete a property

console.log(user);
// { name: 'Jake', age: 19, address: { street: 'Street 7', house: '3020H' }, familyName: 'Smith' }

console.log('name' in user);   // true
console.log('school' in user); // false
```

(Yes, you can change a property of a `const` object: `const` locks the *variable*, not the contents.)

## 🛠️ Try it — Exercise 5

1. **Build an object describing one workshop (name, date, level). Read one property with dot notation and one with bracket notation.**
   ```js
   const workshop = { name: "Introduction to AWS", date: "12 October", level: "Beginner" };
   console.log(workshop.name);      // Introduction to AWS
   console.log(workshop["date"]);   // 12 October
   ```
2. **Add a `speaker` property after creating the object, then delete the `level` property. Log the object before and after.**
   ```js
   console.log(workshop);   // { name: …, date: …, level: 'Beginner' }
   workshop.speaker = "Sara";
   delete workshop.level;
   console.log(workshop);   // { name: …, date: …, speaker: 'Sara' }
   ```
3. **Store a property name in a variable and use it with bracket notation to read that property. Try the same with dot notation and see why it fails.**
   ```js
   const prop = "date";
   console.log(workshop[prop]);   // 12 October
   console.log(workshop.prop);    // undefined — looks for a property literally called "prop"
   ```
4. **Check with `in` whether a property you have not added yet exists.**
   ```js
   console.log("room" in workshop);   // false
   workshop.room = "Room 204";
   console.log("room" in workshop);   // true
   ```

## ⚠️ Watch out

- Using dot notation with a key stored in a variable.
- Forgetting quotes around keys with spaces.

## 📚 Go deeper

- [W3Schools – JS Objects](https://www.w3schools.com/js/js_objects.asp)
- [MDN – Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

---

⬅️ [4 · Primitive types](04-primitive-types.md) · ➡️ Next: [**6 · Arrays**](06-arrays.md)
