# 🎂 Retro Birthday Website

A cute, interactive **retro/vintage birthday website** built with React.

This project is designed as a small interactive birthday surprise rather than a traditional website. It features a nostalgic visual style with retro colors, playful animations, music, photos, memories, and personalized messages.

> **Note:** This project was vibe coded with the assistance of AI. The source code and structure are provided so that you can customize and adapt the website for your own birthday surprise.

## 📖 Overview

Here's what you'll find in this repository:

- **Getting Started:** Requirements, installation, and running the project locally.
- **Customization:** Personalizing birthday information, photos, videos, and music.
- **Assets:** Understanding the difference between default and custom assets.
- **Production Build:** Creating an optimized production build.
- **Deployment:** Deploying your customized website using Vercel or another static hosting provider.
- **Project Structure:** A quick look at how the source code is organized.
- **Credits:** Attribution and information about third-party assets.

## ✨ Features

- 🎂 Interactive birthday experience
- 🕹️ Cute retro/vintage aesthetic
- 💌 Personalized birthday letter
- 📸 Photo albums and memories
- 🎵 Music player
- 🎉 Birthday animations and effects
- 🎆 Fireworks
- 🌧️ Emoji effects
- 🖼️ Photo lightbox
- 💿 Retro vinyl-style music player
- 💬 Rotating quotes
- 📱 Responsive design
- 🎨 Customizable birthday data and assets

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **JavaScript**
- **CSS**
- **HTML**

---

## 🚀 Getting Started

### Requirements

Make sure you have:

- [Node.js](https://nodejs.org/) installed
- npm installed

### Installation

Clone the repository:

```bash
git clone https://github.com/zubairehmad/retro_birthday_web.git
cd retro_birthday_web
```

Install dependencies:

```bash
npm install
```

Copy the required files:

```bash
cp src/data/birthdayData.example.js src/data/birthdayData.js
cp src/data/assets.example.js src/data/assets.js
```

Start the development server:

```bash
npm run dev
```

Open the URL provided by Vite in your browser.

---

## 🎨 Customizing the Website

The project is designed so that you can personalize the birthday website without changing the core application code.

### 1. Create your configuration files

The repository contains example configuration files:

```text
src/data/
├── assets.example.js
└── birthdayData.example.js
```

Copy them:

```bash
cp src/data/birthdayData.example.js src/data/birthdayData.js
cp src/data/assets.example.js src/data/assets.js
```

Then customize the newly created files.

---

### 2. Customize the birthday information

Edit:

```text
src/data/birthdayData.js
```

This file contains the birthday-specific information, including:

- Name
- Birthday date
- Quotes
- Birthday letter
- Happy/sad emojis
- Photo albums
- Memories
- Songs

For example:

```js
const birthdayData = {
  name: 'Alice',

  date: 'September 4, 2026',

  quotes: [
    'Some people make ordinary days feel special.',
    'Life is better with the right people around.',
  ],

  // ...
}
```

Replace the example information with your own.

---

### 3. Add your own photos, videos, and music

Personal assets belong in:

```text
public/assets/custom/
```

The directory is organized into:

```text
public/assets/custom/
├── audio/
│   ├── effects/
│   └── songs/
├── images/
└── videos/
```

For example:

```text
public/assets/custom/
├── images/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── photo3.jpg
│
├── videos/
│   └── memory1.mp4
│
└── audio/
    └── songs/
        └── our-song.mp3
```

Then reference these files from:

```text
src/data/assets.js
```

Example:

```js
const assets = {
  images: {
    photo1: '/assets/custom/images/photo1.jpg',
    photo2: '/assets/custom/images/photo2.jpg',
  },

  videos: {
    video1: '/assets/custom/videos/memory1.mp4',
  },

  audio: {
    songs: {
      song1: '/assets/custom/audio/songs/our-song.mp3',
    },
  },
}
```

---

## 📦 Default Assets vs Custom Assets

The project separates its assets into two locations:

```text
public/assets/
├── default/
└── custom/
```

### `default/`

Contains the assets provided with the project.

These are tracked by Git and are intended to work with the example configuration.

### `custom/`

Contains your personal assets.

This directory is intentionally ignored by Git so that your personal photos, videos, music, and other media are not accidentally committed to the repository.

---

## 🔒 Why are some files ignored?

The following files are intentionally excluded from version control:

```text
src/data/birthdayData.js
src/data/assets.js
public/assets/custom/
```

These files are intended to contain personal information and user-provided assets.

The repository instead provides:

```text
src/data/birthdayData.example.js
src/data/assets.example.js
```

as templates.

This allows the project to remain a reusable template while keeping personal birthday information and media separate from the source code.

---

## 📝 Project Documentation

The repository intentionally keeps the public README focused on using and customizing the website.

Development-specific documents used while creating the project are not required to run the website and are therefore kept outside the main repository source.

---

## 🎵 Credits

Some default assets used by the project were obtained from external sources.

See [`credits.md`](credits.md) for attribution and source information.

Please check the applicable license or usage requirements before replacing or redistributing any third-party assets.

---

## 🏗️ Building for Production

Once you have finished customizing the website, create a production build:

```bash
npm run build
```

The generated files will be placed in:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deploying Your Customized Website

You can deploy your customized birthday website to any static hosting provider, such as **Vercel**, Netlify, or Cloudflare Pages.

The important thing to understand is that your personal configuration files and custom assets are ignored by Git. A normal Git-based deployment will therefore not receive them and will use the example configuration and default assets instead.

The easiest approach is to build the website on your own computer and deploy the generated `dist/` directory.

### Option 1: Deploy using Vercel CLI

This method lets you deploy your locally customized version without committing your personal files to GitHub.

**1. Make sure your customization is complete**

Verify that these files exist and contain your personalized content:

```text
src/data/birthdayData.js
src/data/assets.js
public/assets/custom/
```

**2. Create a production build**

Run:

```bash
npm run build
```

This generates the `dist/` directory containing your built website and its assets.

**3. Deploy to Vercel**

Run:

```bash
npx vercel dist
```

Follow the prompts to link or create your Vercel project.

For subsequent production deployments, run:

```bash
npx vercel --prod dist
```

Your customized website will be deployed using the files in your local production build.

### Option 2: Deploy using another static hosting provider

You can also use Netlify, Cloudflare Pages, or any other provider that supports static websites.

**1. Build the website locally**

```bash
npm run build
```

**2. Upload the generated `dist/` directory**

Upload the contents of `dist/` to your hosting provider.

You do not need to upload the source code, `node_modules/`, or other development files.

### Important: Git-based deployments

If you connect your GitHub repository directly to Vercel or another hosting provider, remember that Git does not include the ignored personal files.

To deploy through Git integration, your deployment source must contain your customized configuration files and custom assets. You could maintain a separate private deployment repository containing those files, or use another workflow that makes them available during the build.

**Do not force-add personal photos, videos, or birthday information to a public repository just to make deployment work.**

Also remember that anything included in the frontend production build can be accessed by visitors to your deployed website. Do not put passwords, API secrets, or other private credentials in these files.

---

## 📁 Project Structure

```text
retro_birthday_web/
├── public/
│   └── assets/
│       ├── default/
│       └── custom/              # ignored by Git
│
├── src/
│   ├── components/
│   ├── data/
│   │   ├── assets.example.js
│   │   ├── birthdayData.example.js
│   │   ├── assets.js             # ignored by Git
│   │   └── birthdayData.js       # ignored by Git
│   │
│   ├── screens/
│   ├── utils/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── credits.md
├── index.html
├── package.json
└── vite.config.js
```

---

## 🤖 AI / Vibe Coding

This project was created using a **vibe coding** approach, with AI assisting throughout the development process.

The project may therefore contain implementation decisions that prioritize practicality, experimentation, and the intended experience over being a demonstration of a particular software architecture.

You are encouraged to modify the project to suit your own needs.

The website is intended to be **customized and extended**, not treated as a fixed application.

---

## ❤️ Make It Yours

Replace the example:

- Name
- Birthday date
- Quotes
- Letter
- Photos
- Videos
- Songs
- Captions
- Memories

with your own content and turn the template into a personal birthday surprise.

Have fun! 🎂🎉
