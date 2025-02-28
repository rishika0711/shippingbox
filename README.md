# Shipping Management System

This project is a simple **Shipping Management System** built using **React** and **Context API**. It allows users to add shipping boxes with details like receiver name, weight, color, destination, and calculates the cost based on predefined rates.

---

## 🚀 Features

✅ **Add Shipping Box** - Users can input box details and add them to the shipping table.  
✅ **Real-Time Color Preview** - Selected color is displayed next to the input field.  
✅ **Cost Calculation** - The cost is calculated automatically based on the weight and destination.  
✅ **Table View** - Displays all added boxes in a structured table.  
✅ **Form Validation** - Ensures all required fields are filled before submitting.  
✅ **Context API for State Management** - The app uses React Context API to manage the shipping data globally.  

---

## 🛠️ Installation & Setup

1. **Clone the repository**  
  
   git clone https://github.com/your-username/shipping-management.git
   cd shipping-management
2. **Install dependencies Run the project**
npm install
Run the project

3. **Run the project**
npm start

📌 How It Works

1 Adding a Box
Fill in the Receiver Name, Weight, Color, and Destination fields.
Click Add Box to store the data.

2️ Color Selection
The color input field allows users to select a color.
A small color preview box displays the selected color in real-time.

3 Shipping Cost Calculation

The cost is calculated using:
ini
Copy
Edit
Cost = Weight (kg) × Destination Rate (INR)

Example Rates:

Sweden: 7.35 INR per kg
China: 11.53 INR per kg
Brazil: 15.63 INR per kg
Australia: 50.09 INR per kg

4️ Displaying Data

The shipping table dynamically updates with the new data.
If there is no data, a message is displayed: "Table has no data".

