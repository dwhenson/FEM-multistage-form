# Multi-step form

This is a solution to the [multi-stage form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges are designed to help developers improve their coding skills by building realistic projects. Assets are provided, but no guidance, and developers are free to choose any approach to solving the challenge.

This was a deceptively tough challenge. It required skills in semantic HTML, CSS layout, JavaScript logic and React. I used React and applied the lessons I have learnt from an online course I am currently following in order to consolidate what I have learnt. I used [Radix](https://www.radix-ui.com/) unstyled, accessible primitives as a basis for many of the components.

![Design preview for the Multi-step form coding challenge](./design/desktop-preview.jpg)

## The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design.

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`.

If you would like the design files (we provide Sketch & Figma versions) to inspect the design in more detail, you can [subscribe as a PRO member](https://www.frontendmentor.io/pro).

All the required assets for this project are in the `/assets` folder. The images are already exported for the correct screen size and optimized.

We also include variable and static font files for the required fonts for this project. You can choose to either link to Google Fonts or use the local font files to host the fonts yourself. Note that we've removed the static font files for the font weights that aren't needed for this project.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Building your project

## The solution

- [Live Site URL](https://fem-multistage-form.netlify.app/)

### Built with

- [React](https://reactjs.org/) - JS library
- [Radix Components](https://styled-components.com/) - Component primitives

### What I learned

I've been super lucky in that I'm one of the early testers on [Josh Comeau's Joy of React course](https://www.joyofreact.com/), and I wanted to apply what I had learnt in some unguided practice. I've been through the course a couple of times now and find in to be really, really good. I used CSS modules and prefer this approach to styled componets as it seems to allow me to take advantage of the cascade and CSS custom properties, and also allow for the scoping of CSS class names. I used React context for the first time in this challenge, and found it really simplified my app structure.

### Where I got stuck

- It tool me a while to work out how to get the CSS to work the way I wanted to, with some global utilities and compositional classes, customisation with the cascade and custom properties. I think I arrived at a good place but it took me longer than I had anticipated.

### Resources

- [Josh Comeau's Joy of React course](https://www.joyofreact.com/)

### Continued development

I'd like to keep pushing on with React, but need to step up my learning to some additional concepts as I am now pushing up against the edge of what I've learned to date. I'd like the next challenge to make more use of custom hooks as this is one of the main foundations of React where I don't yet feel fully comfortable.

## Author

- [Personal Website](https://www.dwhenson.com)
- Frontend Mentor Profile - [@dwhenson](https://www.frontendmentor.io/profile/dwhenson)
