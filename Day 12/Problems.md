# Javascript Problem Solving Assignment (Assignment 2)

## গুরুত্বপূর্ণ নির্দেশনা

- **ফাংশনের নাম পরিবর্তন করা যাবে না:** প্রতিটি প্রবলেমে যে ফাংশনের নাম দেওয়া আছে ঠিক সেটাই ব্যবহার করতে হবে — অন্য কোনো নাম বা রিনেম করা যাবে না।
- **ফাংশন থেকে অবশ্যই `return` ব্যবহার করে ভ্যালু রিটার্ন করতে হবে:** শুধু `console.log()` করলে হবে না — প্রয়োজনীয় ভ্যালু রিটার্ন না করলে, লজিক ঠিক থাকলেও তা সঠিক উত্তর হিসেবে গণ্য হবে না।
- **সব লজিক এবং ভ্যারিয়েবল ফাংশনের ভেতরে লিখতে হবে:** কোনো ভ্যারিয়েবল ফাংশনের বাইরে (গ্লোবালি) ডিক্লেয়ার করা যাবে না।
- **প্রতিটি প্রবলেম ভালোভাবে পড়ে, লজিক বুঝে তারপর কোড লিখবে।**
- **ফাংশন থেকে ঠিক যা রিটার্ন করতে বলা হয়েছে তাই রিটার্ন করবে:** অতিরিক্ত কিছু রিটার্ন করা যাবে না — লজিক ঠিক থাকলেও ভুল রিটার্ন করলে মার্ক পাবে না।
- **এই ডকুমেন্টই ফাইনাল:** কোনো কনফিউশন থাকলে এই ডকুমেন্ট ফলো করবে।
- **চ্যাটজিপিটি সহ অন্য কোনো AI টুল বা বন্ধুর সাহায্য নেওয়া যাবে না:** আমাদের AI এক্সটেনশন যদি তোমার ফাংশনকে AI-Generated হিসেবে ডিটেক্ট করে, তাহলে এসাইনমেন্টে জিরো পাবে।

> **Hidden Test Case:** তোমার সমাধান এখানে দেখানো Sample Test Case ছাড়াও আরও Hidden Test Case দিয়ে যাচাই করা হবে।

---

## Problem 1 — Match Winner

**Function Name:** `matchWinner`

২০২৬ FIFA World Cup-এর Group Stage চলছে। প্রতিটি ম্যাচ শেষে FIFA-এর Automated Result System দুই দলের গোল সংখ্যা গ্রহণ করে এবং ম্যাচের ফলাফল প্রকাশ করে।

তোমার কাজ হলো এমন একটি Function তৈরি করা যা Team A এবং Team B-এর গোল সংখ্যা দেখে ম্যাচের ফলাফল নির্ধারণ করবে।

### Input
Function দুটি Parameter গ্রহণ করবে—
- `teamAGoals` → Team A-এর Goal সংখ্যা
- `teamBGoals` → Team B-এর Goal সংখ্যা

### Rules
- Team A বেশি Goal করলে `"Team A Won"` Return করতে হবে।
- Team B বেশি Goal করলে `"Team B Won"` Return করতে হবে।
- Goal সমান হলে `"Draw"` Return করতে হবে।

### Challenge
Return `"Invalid"` যদি কোনো Input Number না হয়।

### Starter Code
```javascript
function matchWinner(teamAGoals, teamBGoals) {
  // Write your code here…
}
```

### Sample Test Cases

| Input | Output |
| :--- | :--- |
| `2, 1` | `Team A Won` |
| `1, 3` | `Team B Won` |
| `2, 2` | `Draw` |
| `"3", 2` | `Invalid` |

---

## Problem 2 — Elevator Weight Safety Checker

**Function Name:** `isElevatorSafe`

একটি অ্যাপার্টমেন্ট বিল্ডিং এর স্মার্ট এলিভেটরের সর্বোচ্চ নিরাপদ ওজন সীমা ৪০০ কেজি। দরজা বন্ধ হওয়ার আগে, এলিভেটরের সেন্সর ভেতরে দাঁড়ানো প্রতিটি মানুষের ওজন একটি Array আকারে রিড করে, এবং একটি ফাংশনকে ঠিক করতে হবে এটা চলা নিরাপদ কিনা।

### Input
একটি Number array, যেখানে প্রতিটি সংখ্যা একজন মানুষের ওজন (কেজি), যেমন: `[60, 75, 50]`

### Output
একটি Boolean — `true` যদি মোট ওজন ৪০০ কেজি বা তার কম হয় (চলা নিরাপদ), `false` যদি ৪০০ কেজির বেশি হয় (ওভারলোড)।

### Challenge
Input Array না হলে `"Invalid"` রিটার্ন করবে।

> **টিপস:** Array এর মধ্য দিয়ে loop চালিয়ে প্রতিটা weight যোগ করে মোট ওজন বের করো।

### Starter Code
```javascript
function isElevatorSafe(weights) {
  // Write your code here
}
```

### Sample Test Cases

| Input | Output |
| :--- | :--- |
| `[60, 75, 50]` | `true` |
| `[90, 100, 95, 120]` | `false` |
| `[400]` | `true` |
| `"60,75,50"` | `Invalid` |

---

## Problem 3 — AI Token Cost Calculator

**Function Name:** `calculateAiCost`

PromptPal, একটি AI writing assistant app, প্রতিদিন প্রতিটি ইউজারকে ৫০০ free token দেয়। এর বেশি ব্যবহার করলে অতিরিক্ত ব্যবহারের জন্য চার্জ করা হয় — এবং app টি চায় এমন একটি function যা স্বয়ংক্রিয়ভাবে বিল হিসাব করবে।

### Billing Rules
প্রথম ৫০০ token ফ্রি। এরপর প্রতি অতিরিক্ত ১০০ token এর জন্য ৫ টাকা চার্জ হবে।

### Input
একটি সংখ্যা, `tokensUsed` — সেদিন মোট কতগুলো token ব্যবহার হয়েছে।

### Output
মোট খরচ, টাকায়, একটি সংখ্যা হিসেবে।

### Challenge
`tokensUsed` সংখ্যা না হলে, অথবা negative হলে, `"Invalid"` রিটার্ন করবে।

> **টিপস:** প্রথমে ফ্রি ৫০০ token বাদ দাও, তারপর বাকি token কে ১০০ দিয়ে ভাগ করে `Math.floor()` দিয়ে পূর্ণ সংখ্যা বের করো, তারপর rate দিয়ে গুণ করো।

### Starter Code
```javascript
function calculateAiCost(tokensUsed) {
  // Write your code here.
}
```

### Sample Test Cases

| Input | Output |
| :--- | :--- |
| `300` | `0` |
| `500` | `0` |
| `650` | `5` |
| `1000` | `25` |
| `-10` | `Invalid` |
| `"500"` | `Invalid` |

---

## Problem 4 — Top Rated Restaurant Finder

**Function Name:** `topRatedRestaurant`

FoodNow একটি food delivery app, যা একজন কাস্টমারের এলাকার সবচেয়ে ভালো রেটিং পাওয়া রেস্টুরেন্ট হাইলাইট করতে চায়। রেস্টুরেন্টের তথ্য একটি Array of Object হিসেবে সংরক্ষণ করা হয়েছে, যেখানে প্রতিটি Object-এ `name` এবং একটি `rating` থাকবে।

তোমার কাজ হলো এমন একটি ফাংশন লেখা যা সবচেয়ে বেশি rating পাওয়া রেস্টুরেন্টের নাম খুঁজে বের করে সেটি Uppercase করে Return করবে।

### Input
একটি Array of Object, যেমন:
`[{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 }]`

### Output
সবচেয়ে বেশি rating পাওয়া রেস্টুরেন্টের নাম, Uppercase করে (`toUpperCase()` ব্যবহার করে)।

### Challenge
Input Array না হলে, অথবা Array Empty হলে, `"Invalid"` রিটার্ন করবে।

> **টিপস:** Array এর মধ্য দিয়ে loop চালিয়ে এখন পর্যন্ত সবচেয়ে বেশি rating পাওয়া রেস্টুরেন্ট ট্র্যাক করো।

### Starter Code
```javascript
function topRatedRestaurant(restaurants) {
  // Write your code here
}
```

### Sample Test Cases

| Input | Output |
| :--- | :--- |
| `[{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]` | `SULTAN'S DINE` |
| `[{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]` | `PIZZA HUT` |
| `[]` | `Invalid` |
| `"restaurants"` | `Invalid` |

---

## Problem 5 — Debugging Challenge: API Response Time Monitor

**Function Name:** `averageResponseTime`

DevWatch একটি backend monitoring dashboard, যা একটি service-এর সাম্প্রতিক কয়েকটি API request-এর response time (মিলিসেকেন্ডে) একটি array-তে লগ করে। একজন Junior Developer average response time বের করার জন্য একটি function লিখেছে, যাতে টিম বুঝতে পারে API ধীর হয়ে যাচ্ছে কিনা — কিন্তু function-এ একাধিক bug আছে, তাই এটা ভুল ফলাফল দিচ্ছে।

তোমার কাজ হলো সব bug খুঁজে বের করে ঠিক করা, যাতে সব sample test case এ সঠিক Output আসে। ফাংশনের নাম পরিবর্তন করা যাবে না।

### Input
একটি Number array, যেখানে প্রতিটি সংখ্যা একটি request-এর response time (ms), যেমন: `[120, 200, 150, 130]`

### Output
একটি সংখ্যা — সব logged request-এর গড় (average) response time

### Challenge
Bug ঠিক করার পরে function এটাও handle করবে —
- Input Array না হলে `"Invalid"` রিটার্ন করবে
- Array Empty হলে `"Invalid"` রিটার্ন করবে
- Array-এর মধ্যে Number ছাড়া অন্য কিছু থাকলে `"Invalid"` রিটার্ন করবে

### Buggy Code
```javascript
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (Array.isArray(times) = false) {
    return "Invalid";
  }
  if (times.length = 0) {
    return "Invalid";
  }
  let total = 0;
  for (let i = 1; i <= times.length; i++) {
    total = total + time[i];
  }
  return total / times;
}
```

> **টিপস:** এখানে ৬টি আলাদা bug আছে — খেয়াল করে দেখো: array চেক কীভাবে লেখা হয়েছে, empty-array চেক কীভাবে লেখা হয়েছে, loop কোথা থেকে শুরু হচ্ছে, loop কোথায় শেষ হচ্ছে, loop-এর ভেতরে ব্যবহৃত variable-এর নাম, এবং শেষে কী দিয়ে ভাগ করা হচ্ছে।

### Sample Test Cases

| Input | Output |
| :--- | :--- |
| `[120, 200, 150, 130]` | `150` |
| `[100, 100]` | `100` |
| `[]` | `Invalid` |
| `"logs"` | `Invalid` |
| `[120, "200", 150]` | `Invalid` |