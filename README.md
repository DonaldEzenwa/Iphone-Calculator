# iPhone Calculator

A fully functional, beautifully designed iPhone-style calculator built with vanilla HTML, CSS, and JavaScript. This project replicates the classic iOS calculator interface with smooth interactions and accurate calculations.

## 🎯 Features

- **Realistic iPhone Design**: Authentic iOS calculator appearance with proper color scheme and layout
- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Advanced Functions**:
  - Clear All (AC)
  - Sign change (+/-)
  - Percentage calculations (%)
  - Decimal point support
  - Delete/Backspace functionality
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Graceful handling of invalid calculations
- **Real-time Display**: Shows calculations as you type

## 🚀 Demo

[Live Demo](#) _(You can clone and test locally)_

## 📸 Screenshots

![Calculator Interface](not yet Added)
_Main calculator interface showing the iOS-inspired design_

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Advanced styling with flexbox, custom properties, and responsive design
- **Vanilla JavaScript**: ES6+ features, event handling, and DOM manipulation
- **Responsive Design**: Mobile-first approach with viewport meta tag

## 📁 Project Structure

```
iPhone-Calculator/
├── index.html          # Main HTML structure
├── style.css          # All styling and responsive design
├── script.js          # Calculator functionality and logic
├── README.md          # Project documentation
└── screenshots/       # Project screenshots (optional)
```

## 🎨 Design Details

### Color Scheme

- **Body**: Deep black background (#000000)
- **Screen**: Dark gray background (rgb(23, 22, 22)) with white text
- **Number Buttons**: Dark gray (rgb(43, 41, 41)) with white text
- **Operator Buttons**: Golden/orange (goldenrod) for visual distinction
- **Function Buttons**: Medium gray (rgb(108, 108, 108)) for AC, +/-, %

### Layout

- **Calculator Body**: 280px × 430px rounded rectangle with 5% border radius
- **Screen**: 90% width with 15px margin, 20% height of calculator
- **Buttons**: 55px × 55px perfect circles with 1px spacing
- **Grid Layout**: 4×5 button grid with proper alignment

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/DonaldEzenwa/Iphone-Calculator.git
   cd IPhone-Calculator
   ```

2. **Open in Browser**

   - Simply open `index.html` in any modern web browser
   - No build process or dependencies required

3. **Local Development Server** (Optional)

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

## 🎮 Usage

### Basic Operations

- **Numbers**: Click number buttons (0-9) to input digits
- **Decimal**: Use the "." button for decimal numbers
- **Operators**: Use +, -, ×, ÷ buttons for arithmetic operations
- **Equals**: Press "=" to calculate the result

### Function Buttons

- **AC (All Clear)**: Clears the entire calculation
- **+/- (Sign Change)**: Toggles between positive and negative values
- **% (Percentage)**: Converts the current value to percentage
- **Del (Delete)**: Removes the last entered digit or operator

### Example Calculations

```
25 + 30 = 55
100 - 25% = 75
50 × 2 = 100
200 ÷ 4 = 50
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Basic arithmetic operations work correctly
- [ ] Decimal calculations are accurate
- [ ] Percentage calculations work properly
- [ ] Sign change functionality toggles correctly
- [ ] Delete button removes last character
- [ ] AC button clears everything
- [ ] Error handling displays "Error" for invalid inputs
- [ ] Responsive design works on mobile devices

### Browser Compatibility

- ✅ Chrome (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Edge (v90+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Known Issues

- **Division by Zero**: Currently displays "Error" but could be more descriptive
- **Long Numbers**: Very long results may overflow the screen display
- **Keyboard Input**: Currently only supports mouse/touch input

## 🔮 Future Enhancements

- [ ] Keyboard support for numbers and operators
- [ ] Scientific calculator mode toggle
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] History of calculations
- [ ] Copy result to clipboard
- [ ] Sound effects toggle
- [ ] Dark/light theme switcher
- [ ] Animation effects for button presses

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Contribution Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👏 Acknowledgments

- Inspired by the classic iOS calculator design
- Built with modern web standards and best practices
- Thanks to the open-source community for continuous inspiration

## 📞 Contact

- LinkedIn: [Donald Ezenwa](https://www.linkedin.com/in/donaldezenwa/)
- GitHub: [@DonaldEzenwa](https://github.com/DonaldEzenwa)
- Email: luxdeiofficial@gmail.com

Project Link: [https://github.com/DonaldEzenwa/Iphone-Calculator.git]
(https://github.com/DonaldEzenwa/Iphone-Calculator)

---

<div align="center">
  <p><i>Built with ❤️ using vanilla HTML, CSS, and JavaScript</i></p>
</div>
