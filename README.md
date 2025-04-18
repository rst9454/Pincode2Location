# 📍 Address Lookup by Pincode - Autofill Country, State & District
## 🧑‍💻 Author

**Sunil Pandey**  
🚀 .NET Developer | Full Stack Enthusiast | Tech Educator  

🔗 **LinkedIn**: [linkedin.com/in/sunilpandey9454](https://linkedin.com/in/sunilpandey9454)  
🌐 **Website**: [BihariDeveloper.com](https://biharideveloper.com)  
📺 **YouTube**: [@bihari-developer](https://youtube.com/@bihari-developer)  

👉 Passionate about building developer-friendly solutions and sharing knowledge through open source.
## 💻 How to Use

1. Clone the repo:
   ```bash
   git clone https://github.com/rst9454/Pincode2Location

https://github.com/rst9454/Pincode2Location/blob/master/wwwroot/lib/autfill-form.png

This project helps users **automatically fetch and autofill Country, State, and District** details by simply entering a **valid Indian Pincode**.

🔹 Clean UI • 🔹 Real-time validation • 🔹 Auto-reset • 🔹 Loader animation

---

## ✨ Features

- 🔢 **Pincode Validation** – Only allows 6-digit numeric input (000000 is invalid).
- 🌍 **Autofill Address** – Country, State, and District auto-filled using [India Post Pincode API](https://api.postalpincode.in).
- 🧹 **Field Reset** – If the pincode input is cleared, all address fields are reset.
- ⏳ **Loading Indicator** – A simple loader is shown while fetching data.
- 🎯 **Clean UI Design** – Responsive and elegant form using Bootstrap 5.
- 📦 **Easy Integration** – Just plug and play in any web project.

---

## 📸 Screenshot

https://github.com/rst9454/Pincode2Location/blob/master/wwwroot/lib/filled-address.png

---

## 🛠️ Tech Stack

- HTML5  
- Bootstrap 5  
- jQuery  
- India Post API

---

## 🚀 How It Works
4. On success, autofill:
- Country
- State
- District
5. If pincode input is cleared:
- All fields are cleared
6. A loader is shown during the API request

---

## 🚀 API returns structured data like:
- Country (India)
- State (e.g., Bihar, Maharashtra)
- District (e.g., Patna, Pune)
- These values auto-fill into respective form fields.


## 🧪 Validation Rules

| Rule                          | Status |
|------------------------------|--------|
| Must be numeric only         | ✅     |
| 6 digits only                | ✅     |
| `000000` not allowed         | ✅     |
| No alphabets/special chars   | ✅     |
| Auto-clear on input reset    | ✅     |

---

## 📂 Project Structure

```bash
📁 autofill-pincode
│
├── index.html         # Main UI
├── js/
│   └── autofill.js    # Pincode validation and API logic
├── css/
│   └── styles.css     # Optional styling
└── README.md          # Project documentation


1. User enters a **6-digit Indian Pincode**
2. Validation checks:
   - Only digits allowed
   - Must be exactly 6 digits
   - `000000` is not valid
3. API Request made to:


pincode lookup, address autofill, india post api, autofill country state city, jquery pincode, address form india, postal code autocomplete, location autofill, biharideveloper, sunil pandey, form validation, bootstrap ui form
