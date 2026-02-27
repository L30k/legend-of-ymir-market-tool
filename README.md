# Profit Calculator

Web version of the profit calculator to compare sales using Diamonds and WEMIX.

## Project Structure

```
src/
├── index.html                 # Main HTML page
├── assets/
│   ├── css/
│   │   └── styles.css        # Application CSS styles
│   └── js/
│       ├── calculadora.js    # Calculation logic class
│       ├── main.js           # Interface logic and events
│       ├── footer.js         # Footer and explanation modal control
│       ├── i18n.js           # Internationalization system
│       └── init.js           # i18n initialization and language selector
└── README.md                  # This file
```

## Architecture

### HTML (`index.html`)
- Semantic page structure
- Clear separation of sections (settings, sales, results)
- Accessibility with ARIA attributes

### CSS (`assets/css/styles.css`)
- Styles organized by components
- Responsive design for mobile devices
- Color variables for easy maintenance

### JavaScript

#### `calculadora.js`
`CalculadoraLucro` class responsible for:
- Storing settings (fees and conversion rates)
- Calculating net profit in diamonds
- Calculating net profit in WEMIX
- Comparing both options and determining the best one

#### `main.js`
Interface logic responsible for:
- Managing input events
- Updating the calculator with new values
- Rendering results on the screen
- Displaying comparison between options

#### `footer.js`
Footer and modal control responsible for:
- Managing opening and closing of the explanation modal
- Handling footer events (explanation button and GitHub link)
- Closing the modal when pressing ESC or clicking outside

#### `i18n.js`
Internationalization system responsible for:
- Managing translations in Portuguese and English
- Dynamically updating interface texts
- Persisting language preference in localStorage

#### `init.js`
System initialization responsible for:
- Loading saved language translations
- Configuring the language selector (switch)
- Updating the interface when switching languages

## How It Works

1. **Settings**: The user defines fees and conversion values
2. **Sale Values**: The user enters the values to be sold
3. **Automatic Calculation**: Calculations are updated on every change
4. **Results**: Displays net profits and values in local currency
5. **Comparison**: Shows which option is more advantageous

## Features

- **Automatic Calculation**: Real-time updates as values are entered
- **Visual Comparison**: Highlights the best option with different colors
- **Explanation Modal**: Footer button explaining how the calculation works
- **GitHub Link**: Direct access to the developer’s profile
- **Internationalization (i18n)**: Support for Portuguese and English with a language switch
- **Responsive Design**: Works perfectly on mobile devices
