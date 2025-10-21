Frontend Mentor - Newsletter sign-up form with success message solution

This is my solution to the Newsletter sign-up form with success message challenge on Frontend Mentor
.
This challenge helped me improve my front-end development skills by building a realistic and responsive project.

📋 Table of contents

Overview

The challenge

Screenshot

Links

My process

Built with

What I learned

Continued development

Useful resources

Author

Acknowledgments

🧭 Overview
The challenge

Users should be able to:

Add their email and submit the form

See a success message with their email after successfully submitting the form

See validation messages if:

The field is empty

The email format is incorrect

View the optimal layout for their device’s screen size

See hover and focus states for all interactive elements

📸 Screenshot
Desktop

Mobile

🔗 Links

Solution URL: https://github.com/GabrielSantos-1/newsletter-signup-form

Live Site URL: https://gabrielsantos-1.github.io/newsletter-signup-form/

⚙️ My process
🧱 Built with

Semantic HTML5

CSS3 (Flexbox + Grid)

JavaScript (ES6) for form validation and transitions

Mobile-first responsive workflow

Smooth fade animations between form and success state

💡 What I learned

While building this project I reinforced my understanding of:

DOM manipulation with JavaScript

Regular expression validation for emails

Responsive layouts using Flexbox and Grid

Smooth CSS transitions to create fade effects between states

Example — Email validation:

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}


Example — Fade transition:

.fade {
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade.show {
  opacity: 1;
  transform: translateY(0);
}

🚀 Continued development

In future projects I want to:

Focus more on accessibility (keyboard navigation and ARIA attributes)

Explore using React for component-based structures

Add animations using GSAP or Framer Motion

📚 Useful resources

MDN Web Docs - Form Validation

CSS Tricks - Transitions

Frontend Mentor Community

These helped me understand form validation logic and smooth transition design.

👨‍💻 Author

Frontend Mentor – @GabrielSantos-1

GitHub – GabrielSantos-1

🙌 Acknowledgments

Thanks to Frontend Mentor for providing awesome challenges that make learning front-end development practical and fun!