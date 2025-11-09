# Travel-ICT Website Project

## Group Members

| Name             | Matric Number     |
| ---------------- | ----------------- |
| [Student Name 1] | [Matric Number 1] |
| [Student Name 2] | [Matric Number 2] |
| [Student Name 3] | [Matric Number 3] |
| [Student Name 4] | [Matric Number 4] |

---

## Objectives

The main objectives of this project are:

1. **Design and develop a responsive travel website** that showcases Nigerian tourist destinations
2. **Implement modern web design principles** using HTML5, CSS3, and JavaScript
3. **Create an interactive user experience** with dynamic features and smooth navigation
4. **Practice collaborative web development** using version control (Git/GitHub)
5. **Apply ICT skills** to build a real-world application for the tourism industry
6. **Demonstrate proficiency** in front-end web development technologies

---

## Tools & Technologies Used

### Languages

- **HTML5** - Structure and content markup
- **CSS3** - Styling, layouts, and animations
- **JavaScript** - Interactive features and form validation

### Libraries & Frameworks

- **Font Awesome 6.5.1** - Icon library for enhanced UI elements
- **Google Fonts** - Typography and font styling

### Development Tools

- **Visual Studio Code** - Code editor
- **Git & GitHub** - Version control and collaboration
- **Browser DevTools** - Testing and debugging

### Design Resources

- **Unsplash** - High-quality destination images
- **Google Maps API** - Embedded location map

---

## Website Features Overview

### 1. Home Page (`index.html`)

- **Hero Section** with call-to-action button
- **Featured Destinations** showcase (3 highlighted locations)
- **Why Choose Us** section with key benefits:
  - Best Prices (Flight icon)
  - Expert Guides (Star icon)
  - Safe & Secure (Shield icon)
  - Easy Booking (Briefcase icon)
- **Responsive Navigation** with mobile menu toggle
- **Footer** with contact information and quick links

### 2. Destinations Page (`destinations.html`)

- **Destination Grid** displaying 12 Nigerian tourist locations:
  - Lagos, Abuja, Calabar
  - Port Harcourt, Enugu, Obudu Mountain Resort
  - Ibadan, Badagry, Jos
  - Yankari Game Reserve, Osun-Osogbo Sacred Grove, Ikogosi Warm Springs
- **Search Functionality** to filter destinations
- **Pricing in Naira (₦)** for all packages
- **Book Now** buttons linking to contact page

### 3. About Page (`about.html`)

- **Company Overview** and mission statement
- **Expert Travel Tips** section featuring:
  - Plan Ahead
  - Budget Wisely
  - Pack Smart
  - Stay Safe
  - Stay Connected
  - Respect Local Culture
- **Our Mission** with detailed objectives
- **Achievement Statistics** (Years, Travelers, Destinations, Satisfaction Rate)

### 4. Contact & Booking Page (`contact.html`)

- **Interactive Booking Form** with validation for:
  - Personal details (Name, Email, Phone)
  - Destination selection
  - Travel dates (Departure & Return)
  - Number of travelers
  - Package type selection
  - Special requests
- **Contact Information** with icons:
  - Physical address
  - Email addresses
  - Phone numbers
  - Business hours
- **Embedded Google Map** showing office location
- **Multiple Contact Options** (Live Chat, WhatsApp, Email, Phone)
- **FAQ Section** answering common questions

### 5. Common Features Across All Pages

- **Responsive Design** - Mobile, tablet, and desktop compatible
- **Consistent Navigation** - Easy access to all pages
- **Font Awesome Icons** - Professional icon integration
- **CSS Variables** - Consistent color scheme and theming
- **Smooth Transitions** - Enhanced user experience
- **Accessibility** - Semantic HTML and proper alt text

---

## Screenshots of Main Pages

### Home Page

![Home Page Screenshot](screenshots/home-page.png)
_The landing page featuring the hero section and featured destinations_

### Destinations Page

![Destinations Page Screenshot](screenshots/destinations-page.png)
_Grid layout showcasing all 12 Nigerian tourist destinations_

### About Page

![About Page Screenshot](screenshots/about-page.png)
_Company information and expert travel tips_

### Contact Page

![Contact Page Screenshot](screenshots/contact-page.png)
_Booking form and contact information with embedded map_

> **Note:** To add screenshots, create a `screenshots` folder in the project root and add images with the names specified above.

---

## Project Structure

```
travel-ict/
├── index.html              # Home page
├── destinations.html       # Destinations listing page
├── about.html             # About us page
├── contact.html           # Contact and booking page
├── styles.css             # Main stylesheet
├── script.js              # JavaScript functionality
├── README.md              # Project documentation
└── assets/                # Images and other assets
```

---

## Key Features Implementation

### 1. Responsive Navigation

- Mobile-friendly hamburger menu
- Smooth transitions and toggles
- Active page highlighting

### 2. Form Validation (Contact Page)

- Real-time input validation
- Error message display
- Required field checking
- Date validation (future dates only)
- Success message on submission

### 3. Search Functionality (Destinations Page)

- Live search filtering
- Case-insensitive matching
- Instant results display

### 4. Icon Integration

- Font Awesome icons throughout
- Consistent visual language
- Enhanced UI/UX

---

## Challenges & Lessons Learned

### Challenges Encountered

1. **Responsive Design**

   - **Challenge:** Making the website look good on all screen sizes
   - **Solution:** Implemented CSS Grid and Flexbox with media queries for different breakpoints

2. **Form Validation**

   - **Challenge:** Implementing comprehensive form validation for the booking form
   - **Solution:** Created custom JavaScript validation functions with real-time feedback

3. **Image Optimization**

   - **Challenge:** Managing large image files affecting page load speed
   - **Solution:** Used Unsplash with specific dimensions and compression parameters

4. **Browser Compatibility**

   - **Challenge:** Ensuring consistent appearance across different browsers
   - **Solution:** Used modern CSS with fallbacks and tested on multiple browsers

5. **Navigation Menu Toggle**

   - **Challenge:** Creating smooth mobile menu animations
   - **Solution:** Combined CSS transitions with JavaScript event listeners

6. **Content Localization**
   - **Challenge:** Replacing international destinations with Nigerian locations
   - **Solution:** Researched Nigerian tourist attractions and updated all content accordingly

### Lessons Learned

1. **Planning is Crucial**

   - Creating a clear structure before coding saves time and reduces errors
   - Wireframing helps visualize the final product

2. **Code Organization**

   - Using CSS variables makes theme management easier
   - Commenting code improves team collaboration
   - Consistent naming conventions improve code readability

3. **Version Control**

   - Regular commits help track changes
   - Branching allows safe experimentation
   - Git is essential for team collaboration

4. **Responsive Design Principles**

   - Mobile-first approach is more efficient
   - Testing on real devices reveals issues simulators miss
   - Flexbox and Grid are powerful layout tools

5. **User Experience Matters**

   - Clear navigation improves user satisfaction
   - Form validation prevents user errors
   - Visual feedback (hover effects, transitions) enhances interactivity

6. **Accessibility**

   - Semantic HTML improves SEO and accessibility
   - Alt text for images is essential
   - Proper heading hierarchy helps screen readers

7. **Modern Tools & Libraries**
   - Font Awesome significantly enhances visual appeal
   - CDNs provide fast, reliable resource delivery
   - External libraries can speed up development

---

## How to Run the Project

1. **Clone the repository**

   ```bash
   git clone https://github.com/Nebulaz7/travel-ict.git
   ```

2. **Navigate to the project folder**

   ```bash
   cd travel-ict
   ```

3. **Open in browser**

   - Simply open `index.html` in any modern web browser
   - Or use a live server extension in VS Code for better development experience

4. **Optional: Use Live Server**
   ```bash
   # If you have VS Code Live Server extension
   # Right-click on index.html and select "Open with Live Server"
   ```

---

## Future Enhancements

- [ ] Add backend functionality for form submissions
- [ ] Implement user authentication and booking management
- [ ] Add payment gateway integration
- [ ] Create a blog section for travel tips
- [ ] Add customer reviews and testimonials
- [ ] Implement multi-language support
- [ ] Add image gallery for each destination
- [ ] Create an admin panel for content management
- [ ] Integrate social media feeds
- [ ] Add newsletter subscription functionality

---

## Contributing

This project was developed as part of an ICT course assignment. Contributions and suggestions are welcome for educational purposes.

---

## License

This project is developed for educational purposes as part of an ICT coursework assignment.

---

## Acknowledgments

- **Unsplash** for providing high-quality images
- **Font Awesome** for the icon library
- **Google Fonts** for typography
- Our instructors and peers for guidance and feedback

---

## Contact

For any questions or feedback about this project, please contact any of the group members listed above.

---

**Project Date:** November 2025  
**Course:** Information and Communication Technology  
**Institution:** [Your Institution Name]
