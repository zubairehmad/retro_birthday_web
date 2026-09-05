# 🎂 Interactive Retro Birthday Website

## Project Requirements & Technical Documentation

---

# 1. Project Overview

The project is an interactive **birthday-themed personal website** built with **React**.

The website should feel like a small interactive birthday surprise rather than a conventional website. It will use a **cute retro/vintage aesthetic**, combining:

* Vintage paper textures
* Warm/off-white/cream backgrounds
* Muted retro colors
* Handwritten/display typography
* Stickers and decorative elements
* Polaroid-style photographs
* Retro UI elements
* Rounded border rectangles and cards
* Small animations
* Non-blocking background animations
* Emoji-based interactions
* Sound effects
* Cassette/tape-inspired components
* Slightly imperfect/handmade visual elements

The experience consists of the following major screens:

1. **Initial / Question Screen**
2. **HBD / Birthday Greeting Screen**
3. **Main Menu Screen**
4. **Photo Album**
5. **Birthday Letter**
6. **Music / Cassette Player**

The user should be able to navigate between the screens without full-page reloads.

---

# 2. Technology

## Frontend

The project will use:

* **React**
* JavaScript or TypeScript
* CSS
* HTML5
* HTML5 Audio/Video APIs

React should primarily be used for:

* Screen/state management
* Reusable UI components
* Photo album rendering
* Music player state
* Navigation between sections
* Interactive animations
* Managing currently playing audio

## Recommended project structure

```text
birthday-website/
│
├── public/
│   ├── assets/
│   │   ├── images/
│   │   ├── videos/
│   │   ├── audio/
│   │   ├── textures/
│   │   └── decorations/
│   │
│   └── favicon/
│
├── src/
│   ├── components/
│   │   ├── RetroButton
│   │   ├── EmojiRain
│   │   ├── Polaroid
│   │   ├── Cassette
│   │   ├── BackButton
│   │   ├── DecorativeSticker
│   │   └── ...
│   │
│   ├── screens/
│   │   ├── InitialScreen
│   │   ├── HbdScreen
│   │   ├── MainScreen
│   │   ├── PhotoAlbum
│   │   ├── LetterPage
│   │   └── MusicPage
│   │
│   ├── data/
│   │   ├── photos
│   │   ├── videos
│   │   ├── songs
│   │   └── letter
│   │
│   ├── assets/
│   │
│   ├── App
│   ├── App.css
│   └── main
│
└── package.json
```

The exact structure can be adjusted during implementation, but **content/data should preferably be separated from UI components**.

---

# 3. Overall User Flow

The intended flow is:

```text
                    ┌───────────────────┐
                    │   Initial Screen  │
                    │                   │
                    │ "I've got         │
                    │ something special"│
                    │                   │
                    │  [ YESS! ] [ NOO!]│
                    └─────────┬─────────┘
                              │
                         YESS!│
                              ▼
                    ┌───────────────────┐
                    │    HBD Screen     │
                    │                   │
                    │  Happy Birthday!  │
                    │     Quotes        │
                    │     Photos        │
                    │                   │
                    │      [NEXT]       │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │    Main Screen    │
                    │                   │
                    │   📷    💌    📼  │
                    │ Photos Letter Music│
                    └────┬────┬────┬────┘
                         │    │    │
              ┌──────────┘    │    └──────────┐
              ▼               ▼               ▼
        Photo Album       Letter Page     Music Page
              │               │               │
              └───────────────┴───────────────┘
                              │
                           [BACK]
                              │
                              ▼
                         Main Screen
```

---

# 4. Global Design Language & Rounded Theme

Every screen should feel like it belongs to the same physical vintage scrapbook.

The visual language should combine handmade imperfections with rounded, friendly UI elements. Rounded cards and containers should not make the design look like a modern SaaS interface; they should be integrated with paper textures, muted colors, shadows, tape, stickers, doodles, and other vintage elements.

## Color palette

The exact palette can be adjusted during design, but the general direction should be:

```text
Background:
  Warm cream
  Old paper beige

Primary:
  Muted red
  Dusty pink

Secondary:
  Faded yellow
  Sage/olive green
  Muted brown

Text:
  Dark brown
  Almost-black brown
```

Avoid extremely saturated modern colors.

## Border & Card Aesthetics

Rounded rectangles and cards should be used consistently throughout the interface.

### Containers and Cards

Primary containers, scrapbook cards, content cards, menu cards, and similar elevated surfaces should generally use:

```css
border-radius: 12px - 20px;
```

The exact value may vary depending on the component, but the overall appearance should remain soft and friendly.

### Buttons

Buttons should generally use:

```css
border-radius: 8px - 12px;
```

Buttons should retain the handmade/retro visual language rather than looking like generic modern web buttons.

### Card Shadows

Elevated vintage cards should use **multi-layered soft drop shadows** rather than a single harsh shadow.

Example direction:

```css
box-shadow:
  0 2px 4px rgba(...),
  0 8px 20px rgba(...);
```

The exact shadow values should be chosen according to the background and card design.

Shadows should:

* Feel soft
* Provide depth
* Reinforce the physical-paper/card metaphor
* Avoid looking like modern Material Design elevation
* Remain subtle enough to preserve the vintage aesthetic

Rounded cards may also include:

* Slight border irregularities
* Paper textures
* Tape
* Small rotations
* Decorative stickers
* Hand-drawn accents

---

# 5. Typography

The website should use a combination of fonts.

## Heading font

A playful retro/display font.

Used for:

* Happy Birthday
* Page titles
* Large messages
* Song titles

## Handwritten font

Used for:

* Quotes
* Notes
* Stickers
* Small annotations
* Letter

## Body font

A highly readable serif or vintage-style font.

Used for:

* Letter content
* Descriptions
* Folder names
* Supporting text

The fonts should remain readable on mobile.

---

# 6. Global Visual Effects

The website should have subtle visual imperfections to avoid looking like a modern flat UI.

Possible effects:

* Paper grain
* Film grain
* Slight image noise
* Vintage borders
* Torn-paper edges
* Tape pieces
* Washi-tape decorations
* Hand-drawn arrows
* Small doodles
* Stars/hearts
* Slight rotations
* Polaroid shadows
* Stamps
* Sticker-like elements
* Non-blocking background animations

Background animations should remain **non-blocking**:

* They must not interfere with clicking/tapping.
* They should preferably use `pointer-events: none`.
* They should not alter document layout.
* They should not cause unwanted scrolling.
* They should remain subtle and performant.

These effects should remain **subtle**.

The website should look intentionally vintage, not visually cluttered.

---

# 7. Initial Screen

## Purpose

The Initial Screen is the playful introduction to the entire experience.

It should immediately communicate:

> "Something special is waiting."

## Content

The page should contain a cute central message.

Example placeholder:

> **I've got something special for you...**
>
> **Do you wanna see it? 👀**

This is placeholder text and can be changed later.

The central message and its options must be enclosed inside a **styled, rounded vintage card container**.

The card should visually resemble a physical birthday/scrapbook card rather than a generic web panel.

Below the message:

```text
[YESS! 💖]     [NOO! 😭]
```

---

# 8. Initial Screen Visual Design

The screen should look like a vintage birthday card.

The main content should be enclosed inside a rounded card/container.

Possible composition:

```text
        ✦       ♡        ✦

          ╭─────────────────╮
          │                 │
          │  I've got       │
          │  something      │
          │  special...     │
          │                 │
          │  Wanna see?     │
          │                 │
          │ [YESS!] [NOO!]  │
          │                 │
          ╰─────────────────╯

      ♡                    ✦
```

The card should have:

* Rounded corners
* Vintage paper/background styling
* Soft multi-layered shadow
* Appropriate decorative elements
* Enough internal spacing
* Responsive sizing

Decorations can surround the central card.

The card must remain usable on small screens without causing horizontal overflow.

---

# 9. YES Button Interaction & Persistent Celebration

When the user clicks/taps **YESS!**:

### Required behavior

1. Play the **Yay / happy sound effect**.
2. Trigger an emoji-rain animation.
3. Emojis should fall from the top of the screen.
4. Emojis should include things such as:

```text
🎉
🥳
❤️
💕
💖
✨
🎂
🎈
🌸
😍
🎊
🎁
🌟
💫
🪩
🎶
🍰
🧁
🌈
🤩
🥰
💝
```

5. The `EmojiRain` component **must be mounted at the `src/App.jsx` root level**, rather than being mounted exclusively inside `InitialScreen`.

6. The root-level `EmojiRain` must remain mounted and active during the transition from `InitialScreen` to `HbdScreen`, so the celebration animation continues visually through the screen transition without being unmounted.

The emoji rain should use:

```css
pointer-events: none;
```

so that falling emojis never block or interfere with interaction.

The animation should feel abundant and celebratory, using a brisk fall speed so the celebration is immediately visible rather than slow. The default happy-emojis pool should include at least the core set plus additional celebration symbols. Each burst should render a generously increased, bounded particle count, with HBD cake-triggered bursts allowed to use a higher cap than the Initial Screen so the HBD celebration feels especially full without harming performance. Particle trajectories should complete in approximately 1.5–2.5 seconds, while spawn delays must be distributed across the burst rather than clustered at one instant.

Particles should use varied starting positions, sizes, speeds, delays, horizontal drift, and rotation so they read as a natural rain-like fall rather than a synchronized vertical stream or a clustered group of emojis. Spawn timing must be varied substantially enough to avoid all particles falling together and to create an overlap window where nearly the whole viewport contains emojis at once. Variation must remain bounded and performant, and particles must not intercept pointer input.

Emoji rain on both the Initial Screen and HBD Screen should feel immersive: particles should enter across the viewport, use varied depth cues such as scale and opacity, maintain substantially staggered trajectories and drift, and create a full celebratory atmosphere with a brief near-full-screen emoji presence without obscuring text or controls. HBD cake-triggered rain should be visibly denser than the Initial Screen burst while preserving the same timing, cleanup, pointer-transparency, and performance safeguards.

Recommended sequence:

```text
Click YES
   ↓
Set celebration state
   ↓
Play yay sound
   ↓
Start root-level EmojiRain
   ↓
Navigate to HBD Screen
   ↓
EmojiRain continues during transition
   ↓
EmojiRain cleans itself up
```

The transition can happen immediately or after a short celebration delay.

The preferred implementation is to keep the celebration state in `App.jsx`, allowing `EmojiRain` to exist independently of the current screen.

The animation should clean up its generated elements/state after completion and should not continuously consume resources once the celebration has ended.

---

# 10. NO Button Interaction

The NO button is intended to be playful.

## Desktop behavior

When the mouse pointer approaches the button, the button should move away.

The button must remain **strictly within the bounds of its parent interaction/card container**.

It should not move relative to the entire viewport.

The button should appear to be **avoiding the cursor**.

For example:

```text
Cursor →        [NOO!]

Cursor gets close

                  [NOO!]
```

The button can jump to another safe location within its parent interaction area.

The movement should be implemented using smooth relative transforms rather than causing document layout changes.

Recommended direction:

```css
transition: transform 0.2s cubic-bezier(...);
```

The exact cubic-bezier curve can be chosen during implementation to make the movement feel playful and responsive.

When the desktop pointer leaves the NO button's configured interaction/proximity area, the button should smoothly return to its original position. The reset must be cancelled or superseded safely if the pointer approaches again during the return animation.

The implementation should prefer:

```css
transform: translate(...);
```

rather than changing layout-affecting properties such as `top`, `left`, `margin`, or dimensions where practical.

---

# 11. NO Button Safety Rules

The button must:

* Stay strictly inside the bounds of its parent card/interaction container.
* Never move outside the screen.
* Never move outside the parent card.
* Avoid overlapping important text.
* Avoid making the page horizontally scroll.
* Remain reasonably reachable on mobile.
* Use smooth animated movement.
* Restore the original position when the desktop pointer leaves the configured interaction/proximity area.
* Not change the layout dimensions of surrounding content.

The movement should have a small animation rather than teleporting with no transition.

Recommended direction:

```css
transition: transform 0.2s cubic-bezier(...);
```

The parent interaction area should provide enough space for the button to move while preserving the layout of the card.

---

# 12. Mobile NO Button Behavior

Mouse avoidance does not work on touch devices.

Therefore, mobile behavior must be different.

If the user manages to tap the NO button:

1. Play the **NOOO sound effect**.
2. Trigger sad/angry emoji rain.
3. Example emojis:

```text
😭
😢
💔
😡
🥺
😤
☹️
💢
```

The interaction should still be playful rather than punitive.

The user can subsequently try again.

The mobile interaction must not rely on pointer proximity or mouse coordinates.

---

# 13. Sound Requirements

The website will require at least:

```text
yay.mp3
nooo.mp3
```

Potentially additional subtle sounds can be added later.

Sound must only start as a consequence of user interaction because browsers commonly restrict autoplay.

---

# 14. HBD Screen

The HBD Screen is the first major reveal.

Its purpose is to give the user a warm birthday greeting before showing the main menu.

The visual treatment should feel especially retro and cute: a handmade birthday-card/scrapbook reveal with warm paper tones, playful display typography, soft rounded shapes, charming decorative details, and a clear celebratory focal point. The polish should improve visual hierarchy and delight without making the screen busy or reducing readability.

---

# 15. HBD Screen Content

The screen should contain:

### Main birthday heading

Example:

> 🎂 Happy Birthday! 🎂

or a more personalized version.

### Supporting message

Example:

> Today is officially your day!

### Friendship quotes

Several friendship-related quotes should appear throughout the design.

Examples of placeholder quotes:

> "Some people make ordinary days feel special."

> "Life is better with the right people around."

> "Here's to all the memories we've made."

The final quotes can be replaced later.

---

# 16. Rotated Quotes

Quotes should not be perfectly aligned.

Instead, each quote can have a small rotation:

```text
-7°
+4°
-3°
+6°
```

This gives the appearance of handwritten notes placed onto a scrapbook.

Example:

```text
             "Some people make
              ordinary days
              feel special."
                     ↗

        ╭───────────────╮
        │ Happy Birthday │
        ╰───────────────╯

   ↙
 "Here's to all the
  memories we've made."
```

The rotations should be subtle.

---

## HBD Screen Visual Polish

The HBD Screen should combine its existing scrapbook structure with a cohesive retro-cute presentation:

* A clear central birthday greeting with strong visual hierarchy.
* Warm cream/pastel retro colors, paper-like surfaces, and soft layered shadows.
* Rounded card sections and friendly display typography consistent with the rest of the site.
* Cute supporting decorations such as stars, hearts, sparkles, ribbons, stickers, or confetti used with restraint.
* Playful but legible quote cards with varied scrapbook-like placement and rotation.
* A visually prominent interactive cake or birthday focal element.
* Responsive spacing and composition that remain balanced on small screens.
* Accessible contrast, readable text, and controls that remain obvious and usable.

The redesign must preserve the existing quote rotation, cake interaction/confetti, celebration transition, and Continue navigation behavior.

The HBD card composition must have deliberate spacing between the heading, congratulatory message, cake control, quote, and Continue action. The card should remain comfortably padded and centered rather than feeling cramped or visually crowded.

The screen should include a small set of intentionally chosen birthday emojis and surrounding decorations that support the celebration without overwhelming the greeting. The central cake must be an obvious button: clicking or tapping it congratulates the user through a visible emoji-rain burst, while keeping the interaction repeatable and non-blocking.

The HBD layout must render as an intentional centered composition at normal desktop viewport sizes, not as a full-width strip pinned to the top of the page. The card needs a constrained readable width, balanced outer whitespace, consistent internal vertical spacing, and a stable layout regardless of whether the viewport is wide or narrow.

Titles and supporting labels must have a clear hierarchy: one prominent birthday title, one concise congratulatory message, one optional supporting sentence, and clearly separated cake, quote, and Continue sections. Decorative emojis must sit around or within the card without appearing as stray clipped content or colliding with text and controls.

The cake button's hint/label must have consistent internal padding, line spacing, and separation from the cake emoji so the text never collides with the button border or feels cramped inside the control.

Clicking the HBD cake must also launch a fireworks celebration. Each activation should create a bounded burst of 4–5 independent fireworks that rise from the bottom of the viewport along realistic curved trajectories and pop at varied heights around the HBD card. Each firework must complete its ascent and pop animation even if the cake is clicked again while an earlier burst is active. The launch and pop stages must use separate sound effects, while preserving the persistent background song and allowing all effects to overlap it without stopping it.

The application must start `public/assets/audio/songs/happy_birthday.mp3` when the user reaches HBD. Playback should loop continuously at the configured volume and persist across navigation from HBD to Main Screen, Album, or Letter. HBD sound effects must not stop or replace the background track. If another media source that plays audio starts, such as a playlist song or video, the HBD song must stop and release so the new source can own playback. The HBD song must not start on Initial Screen or before HBD is reached. Audio playback should follow browser autoplay restrictions and fail safely without blocking rendering or navigation.

When another audio source takes over, or when the application is unmounted, the HBD player must be paused and released immediately without fade or smoothing. Navigating from HBD to Main Screen alone must not stop the song, create a duplicate player, or allow stale callbacks to affect a later visit.

---

# 17. HBD Screen Photos

The HBD screen should contain selected photos of the birthday person.

Photos can be displayed as:

* Polaroids
* Small scrapbook photographs
* Taped photos
* Slightly rotated images
* Collage elements

Each photo should have:

* Border
* Shadow
* Slight rotation
* Optional handwritten caption

Example:

```text
       ╭───────────────╮
       │               │
       │     PHOTO     │
       │               │
       │  "that smile" │
       ╰───────────────╯
             -4°
```

---

# 18. HBD Screen Decorations

Possible decorations:

* Hearts
* Stars
* Balloons
* Flowers
* Birthday cake
* Tape
* Doodles
* Handwritten arrows
* Small stickers
* Film strips

The composition should resemble a **personal scrapbook/birthday card**.

---

# 19. HBD Screen Next Button

The screen contains a clearly visible:

```text
[NEXT →]
```

button.

Clicking it navigates to:

```text
Main Screen
```

The transition should be smooth.

---

# 20. Main Screen UI Overhaul

The Main Screen is the central hub of the experience.

It should contain three large interactive options presented as a **structured row/grid of three distinct rounded cards** on desktop.

The cards represent:

```text
Photos
Letter
Music
```

The layout should use CSS Grid or Flexbox.

Conceptually:

```text
        "A little something for you"

                  ♡

   ╭──────────╮  ╭──────────╮  ╭──────────╮
   │          │  │          │  │          │
   │    📷    │  │    💌    │  │    📼    │
   │          │  │          │  │          │
   │  Photos  │  │  Letter  │  │  Music   │
   │ memories │  │ for you  │  │ songs... │
   │          │  │          │  │          │
   ╰──────────╯  ╰──────────╯  ╰──────────╯
```

Each card must:

* Have a rounded appearance.
* Use `border-radius: 16px`.
* Have its own visual identity.
* Contain a custom icon or appropriate custom-styled visual.
* Contain a bold title.
* Contain a short subtitle/description.
* Have appropriate padding.
* Use a soft multi-layered vintage shadow.
* Be large enough to be comfortable to tap.
* Remain responsive on mobile.

The three cards should feel like physical scrapbook cards/items rather than generic navigation links.

## Card Interaction

The cards should have small physical-feeling micro-interactions.

### Hover

Possible effects:

* Slight scale increase
* Small rotation
* Slight lift
* Shadow movement/intensification

For example:

```text
Normal:
     ╭──────────╮
     │   📷     │
     │ Photos   │
     ╰──────────╯

Hover:
       ╭──────────╮
       │   📷     │
       │ Photos   │
       ╰──────────╯
          ↑
       slight lift
```

### Click

The card can briefly:

* Scale down slightly
* Compress its shadow
* Rotate by a tiny amount

Then navigation occurs.

Interactions should be quick and subtle.

Avoid excessive animation.

---

# 21. Main Screen Navigation Cards

## Card 1 — Photos

Visual:

```text
📷
```

or a custom vintage camera/photo icon.

Title:

```text
Photos
```

Subtitle:

A short description such as:

```text
A few memories together
```

Action:

```text
Open Photo Album
```

---

## Card 2 — Letter

Visual:

```text
💌
```

or an appropriate custom vintage envelope/letter illustration.

Title:

```text
Letter
```

Subtitle:

A short description such as:

```text
Something I wanted to tell you
```

Action:

```text
Open Letter Page
```

---

## Card 3 — Music

Visual:

```text
📼
```

or a custom cassette illustration.

Title:

```text
Music
```

Subtitle:

A short description such as:

```text
Songs that remind me of you
```

Action:

```text
Open Music Page
```

---

# 22. Main Screen Responsive Layout

On desktop and larger tablets, the three cards should preferably appear in a horizontal row.

Example:

```text
┌──────────┐   ┌──────────┐   ┌──────────┐
│  Photos  │   │  Letter  │   │  Music   │
└──────────┘   └──────────┘   └──────────┘
```

On narrow screens, the cards should stack vertically:

```text
┌──────────────┐
│    Photos    │
└──────────────┘

┌──────────────┐
│    Letter    │
└──────────────┘

┌──────────────┐
│    Music     │
└──────────────┘
```

The cards must not create horizontal scrolling.

---

# 23. Photo Album Page

The Photo Album opens when the user selects the Photos option.

It should look like a **physical photo album/scrapbook**.

---

# 24. Album Structure

There must be exactly two top-level folders:

```text
MoFu
She/Her
```

### Important

`MoFu` **must not be renamed or modified**.

`She/Her` represents the birthday person.

The album should visually present these as physical/vintage folders.

Example:

```text
       📁 MoFu

       📁 She/Her
```

---

# 25. Album Folder Interaction

Clicking a folder opens its contents.

Example:

```text
Photo Album

╭─────────────────╮
│ 📁 MoFu         │
│                 │
│ memories        │
╰─────────────────╯

╭─────────────────╮
│ 📁 She/Her      │
│                 │
│ memories        │
╰─────────────────╯
```

---

# 26. Photo/Video Content

The user will provide the photos and videos.

The implementation should support:

* Images
* Videos

Supported image formats can include:

```text
jpg
jpeg
png
webp
```

Videos can include:

```text
mp4
webm
```

The exact formats can be finalized during implementation.

---

# 27. Album Media Layout

Inside each folder, media can be displayed as a scrapbook collage.

Possible layouts:

```text
╭───────╮  ╭─────────╮
│ PHOTO │  │         │
│       │  │  VIDEO  │
╰───────╯  │         │
           ╰─────────╯

    ╭───────────╮
    │   PHOTO   │
    ╰───────────╯
```

Photos should have slight random rotations.

However, the randomness should be deterministic or stable so that photos do not jump around every React render.

---

# 28. Media Viewer

Clicking an image/video should ideally open a larger viewer.

Recommended behavior:

```text
Thumbnail
   ↓
Click
   ↓
Fullscreen/lightbox viewer
```

The viewer should provide:

* Larger image/video
* Close button
* Optional previous/next controls

For videos:

* Native controls
* Play/pause
* Seek
* Volume

Only the currently opened video should play.

---

# 29. Album Back Button

Every album-related screen should have a back button.

Example:

```text
← Back
```

When inside a folder:

```text
← Back to Album
```

When returning from the album:

```text
← Back to Menu
```

The exact navigation can be handled using a simple application navigation state.

---

# 30. Letter Page

The Letter Page opens from the envelope/letter option.

It should look like an actual vintage handwritten letter.

---

# 31. Letter Visual Design

The letter should be presented on an aged-paper surface.

Possible appearance:

```text
╔══════════════════════════════╗
║                              ║
║      Dear ______,            ║
║                              ║
║      [letter content]        ║
║                              ║
║      [letter content]        ║
║                              ║
║      [letter content]        ║
║                              ║
║                   Yours,     ║
║                   ______     ║
║                              ║
╚══════════════════════════════╝
```

Visual effects:

* Paper texture
* Slightly irregular edges
* Handwritten font
* Ink-like text
* Small doodles
* Stamps
* Tape
* Hearts/stars
* Optional pressed flower decoration

The letter container may use rounded corners where appropriate, consistent with the site's rounded-card language, while still retaining an aged-paper appearance.

---

# 32. Letter Length

The final letter should be approximately:

**12–15 lines**

The actual content will be provided later.

Until then, placeholder text should be included.

Example:

> Dear you,
>
> I wanted to write something special for your birthday...
>
> Another year, another collection of memories...
>
> I hope this year brings you...
>
> Thank you for all the little moments...
>
> Here's to many more memories together.
>
> Happy Birthday!
>
> With love,
>
> ---

This is only placeholder content and should be replaced with the user's final letter.

---

# 33. Letter Animation

Optional but recommended:

When the Letter Page opens, the letter can have a small entrance animation.

For example:

```text
opacity: 0
transform: translateY(15px) rotate(-1deg)

       ↓

opacity: 1
transform: translateY(0) rotate(-1deg)
```

The animation should be subtle.

---

# 34. Letter Back Button

The page must contain a back button.

Action:

```text
Letter → Main Screen
```

The letter itself should remain static while reading.

---

# 35. Music Page

The Music Page opens from the cassette/music button.

Its title must be:

> **Songs that remind me of you**

This exact title should be used unless changed later.

---

# 36. Music Page Visual Design

The page should look like a collection of old cassette tapes.

Example:

```text
       Songs that remind me of you

          ╭───────────────╮
          │   CASSETTE    │
          │               │
          │    SONG 1     │
          │               │
          ╰───────────────╯

          ╭───────────────╮
          │   CASSETTE    │
          │               │
          │    SONG 2     │
          │               │
          ╰───────────────╯
```

There should be exactly **four retro-style cassette elements**.

---

# 37. Four Cassette Items

Each cassette represents one song.

Each cassette should contain:

* Song title
* Retro cassette artwork
* Optional handwritten label
* Play/pause indication

The user will provide:

1. Song title
2. Audio file
3. Specific verse/time segment that should play

---

# 38. Partial Song Playback

The full songs should **not** be played.

Only the specified portion of each song should play.

Each song should therefore have metadata similar to:

```javascript
{
  title: "Song Title",
  audio: "/assets/audio/song-1.mp3",
  startTime: 42,
  endTime: 67
}
```

Where:

```text
startTime = beginning of requested verse
endTime   = end of requested verse
```

The exact timestamps can be supplied later.

---

# 39. Music Playback Logic

Only **one song can play at a time**.

For example:

```text
User clicks Cassette 1
        ↓
Song 1 starts
        ↓
User clicks Cassette 2
        ↓
Song 1 stops
        ↓
Song 2 starts
```

The React application should maintain a single active audio player or centrally managed audio state.

---

# 40. Automatic Song Stopping

When the audio reaches the specified `endTime`, playback must stop.

It should not continue playing the rest of the song.

Possible implementation:

```javascript
audio.currentTime = startTime;
audio.play();

while playing:
    if (audio.currentTime >= endTime) {
        audio.pause();
        audio.currentTime = startTime;
    }
```

The implementation should account for timing precision and cleanup.

A production implementation should preferably use an appropriate `timeupdate`/timer strategy with cleanup rather than a busy loop.

---

# 41. Music Playback States

Each cassette should visually communicate its state.

### Idle

```text
▶
```

### Playing

```text
❚❚
```

### Hover

Slight lift/rotation.

### Finished

Return to idle.

---

# 42. Music Page Back Button

The page must contain:

```text
← Back
```

which returns to:

```text
Main Screen
```

If a song is playing when Back is clicked, playback should be stopped.

---

# 43. Navigation Architecture

Because this is a relatively small website, a heavy routing architecture is not strictly necessary.

A simple application-level state can be used:

```javascript
const [screen, setScreen] = useState("initial");
```

Possible values:

```text
initial
hbd
main
album
letter
music
```

Navigation:

```javascript
setScreen("hbd");
setScreen("main");
setScreen("album");
setScreen("letter");
setScreen("music");
```

React Router can still be used if direct URLs/browser navigation are desired.

For this particular project, **simple state-based navigation is sufficient unless deep-linking is required**.

---

# 44. Component Architecture

Recommended reusable components:

```text
App
│
├── InitialScreen
│   ├── RetroCard
│   ├── RetroButton
│   └── ...
│
├── EmojiRain
│
├── HbdScreen
│   ├── Polaroid
│   ├── Quote
│   ├── DecorativeSticker
│   └── RetroButton
│
├── MainScreen
│   ├── MenuItem
│   └── DecorativeSticker
│
├── PhotoAlbum
│   ├── AlbumFolder
│   ├── MediaGrid
│   ├── MediaCard
│   ├── MediaViewer
│   └── BackButton
│
├── LetterPage
│   ├── VintageLetter
│   └── BackButton
│
└── MusicPage
    ├── Cassette
    ├── AudioPlayer
    └── BackButton
```

`EmojiRain` should be mounted at the `App.jsx` root level so that it can persist independently of screen changes.

---

# 45. Data-Driven Content

Photos, videos, quotes, and songs should not be hardcoded directly into large JSX structures.

For example:

```javascript
const albums = [
  {
    name: "MoFu",
    items: [...]
  },
  {
    name: "She/Her",
    items: [...]
  }
];
```

Songs:

```javascript
const songs = [
  {
    title: "Song 1",
    src: "/assets/audio/song-1.mp3",
    startTime: 0,
    endTime: 30
  },
  {
    title: "Song 2",
    src: "/assets/audio/song-2.mp3",
    startTime: 45,
    endTime: 72
  }
];
```

This makes replacing the placeholder content much easier.

---

# 46. Asset Organization

Recommended:

```text
public/assets/

├── images/
│   ├── hbd/
│   ├── MoFu/
│   └── She-Her/
│
├── videos/
│   ├── MoFu/
│   └── She-Her/
│
├── audio/
│   ├── effects/
│   │   ├── yay.mp3
│   │   └── nooo.mp3
│   │
│   └── songs/
│       ├── song-1.mp3
│       ├── song-2.mp3
│       ├── song-3.mp3
│       └── song-4.mp3
│
├── textures/
│   ├── paper
│   └── grain
│
└── decorations/
    ├── stickers
    ├── tape
    └── doodles
```

The exact filenames can be changed later.

---

# 47. Responsive Design

The website must work on:

* Desktop
* Laptop
* Tablet
* Mobile phones

The mobile experience is particularly important because the initial NO button behaves differently on touch devices.

---

# 48. Desktop Layout

Desktop can use more generous compositions.

For example:

```text
┌─────────────────────────────────────────────┐
│                                             │
│                Birthday Card                │
│                                             │
│       decorations       decorations         │
│                                             │
│                 Content                     │
│                                             │
│                                             │
└─────────────────────────────────────────────┘
```

Photos and decorations can spread around the page.

---

# 49. Mobile Layout

On mobile:

* Content should stack vertically.
* Buttons should remain large enough to tap.
* Photos should fit within viewport width.
* No horizontal scrolling.
* Text should remain readable.
* Decorative elements should be reduced when necessary.

The site should never require zooming.

---

# 50. Animation Guidelines

Animations should make the site feel alive without becoming distracting.

Recommended animations:

### Page transitions

Fade + slight movement.

### Buttons

Small hover/press animation.

### Photos

Slight rotation/scale.

### Emoji rain

Falling + slight horizontal movement.

### Cassette

Small movement while playing.

### Decorative elements

Occasional subtle floating.

### Background

Subtle non-blocking background animations may be used to make the scrapbook feel alive.

Background animations must:

* Not block interaction.
* Prefer `pointer-events: none`.
* Not alter layout.
* Not cause horizontal/vertical overflow.
* Not significantly impact performance.

Avoid excessive animation.

---

# 51. Emoji Rain Implementation

The emoji rain should be implemented as a reusable component.

Conceptually:

```text
EmojiRain
    ↓
Generate N emoji elements
    ↓
Randomize:
    - horizontal position
    - size
    - rotation
    - delay
    - duration
    - spawn timing across the burst
    ↓
Animate from top → bottom
```

There should be two configurations:

```javascript
happyEmojis
sadEmojis
```

For example:

```javascript
const happyEmojis = ["🎉", "🥳", "❤️", "💕", "✨"];

const sadEmojis = ["😭", "😢", "💔", "😡", "🥺"];
```

The component should:

* Be capable of being rendered at the application root.
* Use `pointer-events: none`.
* Not interfere with navigation or other interactions.
* Clean itself up after the animation.
* Avoid unnecessary continuous rendering.
* Support the happy and sad configurations independently.
* Support screen-specific bounded density so HBD celebrations can render more particles than the Initial Screen.
* Distribute particle delays across a broad bounded window, preventing synchronized entry and creating substantial overlap across the viewport.
* Keep enough particles concurrently visible to produce a brief near-full-screen celebration without unbounded DOM growth or sustained background work.

---

# 52. Accessibility

Even though this is a highly visual project, basic accessibility should still be implemented.

Requirements:

* Buttons should use actual `<button>` elements.
* Images should have appropriate `alt` text.
* Videos should have controls.
* Interactive elements should be keyboard accessible.
* Text should have sufficient contrast.
* Avoid relying exclusively on color to communicate state.
* Sound should never be required to understand the website.

The NO button's movement should not make keyboard navigation impossible.

The NO button should remain logically accessible through keyboard interaction even if pointer-based evasion is active.

---

# 53. Audio Considerations

Browser autoplay restrictions mean the website should not attempt to automatically start music/audio before user interaction.

The first sound can safely play after:

```text
User clicks YESS!
```

because that is a user interaction.

Music should similarly start only after the user clicks a cassette.

The application must not unexpectedly start audio merely because a screen is mounted.

Short sound effects must play reliably after the initiating user gesture. The `playSound(src)` helper must handle audio construction and playback failures without allowing unknown exceptions to escape into the interaction handler, while still surfacing or logging failures consistently for debugging. The referenced `yay.wav` and `nooo.wav` assets must exist at their configured paths and use browser-supported audio encoding/container formats; unsupported or missing sources must be identified and corrected rather than treated as a playback-function failure.

---

# 54. Performance Requirements

The site should load quickly.

Important considerations:

### Images

Large images should be optimized before deployment.

Prefer:

```text
WebP
```

where practical.

### Videos

Videos should be compressed appropriately.

Avoid loading every large video immediately if there are many.

### Audio

Keep audio files reasonably compressed.

### Lazy loading

Album media should preferably use lazy loading.

For images:

```html
<img loading="lazy" />
```

Videos can also be loaded only when needed.

### Background animations

Background animations must remain lightweight.

They should not:

* Trigger excessive React re-renders.
* Cause layout thrashing.
* Consume unnecessary CPU/GPU resources.
* Prevent interaction.

---

# 55. State Management

A global state library such as Redux should **not** be necessary.

The application can use:

* React `useState`
* React `useEffect`
* `useRef`
* Context only where genuinely useful

The most important shared state is likely:

```text
Current screen
Currently playing song
Album/folder currently open
Celebration/EmojiRain state
```

---

# 56. Important Music State

The music player should have one source of truth:

```javascript
activeSongId
```

Example:

```text
null
song-1
song-2
song-3
song-4
```

This ensures that two songs cannot accidentally play simultaneously.

---

# 57. Initial Screen State

The Initial Screen may maintain:

```text
isCelebrating
noButtonPosition
```

For example:

```javascript
const [isCelebrating, setIsCelebrating] = useState(false);
const [noButtonPosition, setNoButtonPosition] = useState(...);
```

The celebration state itself should be controlled at the application level if `EmojiRain` needs to persist through screen transitions.

---

# 58. NO Button Detection

Desktop behavior can use pointer coordinates.

Desktop NO-button evasion must reliably respond to the mouse cursor across the full initial-card interaction area, not only when the cursor is already over the button or its narrow wrapper. Pointer tracking should remain active while the cursor approaches the button, with the button repositioned before it can be clicked. Movement should be throttled or frame-coalesced to prevent jitter, use a sufficiently large avoidance threshold, select a direction away from the pointer, and apply a fast smooth transition without repeatedly targeting the same position.

Conceptually:

```text
pointer position
      ↓
distance to NO button
      ↓
if distance < threshold
      ↓
calculate safe position
      ↓
clamp position to parent card bounds
      ↓
apply relative transform
```

The threshold should be large enough that the user cannot easily catch it.

The implementation must calculate movement relative to the **parent interaction/card container**, not the entire viewport.

All generated movement must be clamped so that the button remains inside the parent bounds.

---

# 59. Preventing Layout Problems

The moving NO button should preferably be positioned inside a dedicated interaction area.

For example:

```text
╭──────────────────────────────╮
│                              │
│     Question                 │
│                              │
│      YES       NO            │
│                              │
╰──────────────────────────────╯
```

The button should move within this area instead of changing the layout of the page.

This prevents:

* Page jumping
* Horizontal scrolling
* Broken mobile layouts
* Content shifting
* The button escaping its card

Relative transforms should be preferred because transforms do not normally affect surrounding document layout.

---

# 60. Error Handling

The website should gracefully handle missing assets.

If an image cannot load:

```text
Show a vintage placeholder
```

If a video cannot load:

```text
Show a media placeholder/error message
```

If audio cannot play:

```text
Show a small non-blocking message
```

The entire site should never crash because one media file is unavailable.

---

# 61. Content That Will Be Provided Later

The implementation should initially use placeholders for:

### Birthday person

```text
[NAME]
```

### Letter

```text
[LETTER CONTENT]
```

### Quotes

```text
[QUOTE 1]
[QUOTE 2]
[QUOTE 3]
...
```

### Photos

Provided later.

### Videos

Provided later.

### Songs

Four songs will be provided later.

For each song, the user will provide:

```text
Song title
Audio file
Start verse/time
End verse/time
```

---

# 62. Final Content Configuration

A clean configuration could eventually look like:

```javascript
const birthdayData = {
  name: "...",

  quotes: [
    "...",
    "...",
    "...",
  ],

  letter: `
    ...
  `,

  albums: [
    {
      name: "MoFu",
      media: [...]
    },
    {
      name: "She/Her",
      media: [...]
    }
  ],

  songs: [
    {
      title: "...",
      src: "...",
      startTime: 0,
      endTime: 30
    },
    {
      title: "...",
      src: "...",
      startTime: 50,
      endTime: 80
    },
    {
      title: "...",
      src: "...",
      startTime: 20,
      endTime: 60
    },
    {
      title: "...",
      src: "...",
      startTime: 10,
      endTime: 45
    }
  ]
};
```

This allows most personal content to be changed without modifying the UI components.

---

# 63. Navigation Rules

The navigation behavior should be:

| Current Screen | Action | Destination     |
| -------------- | ------ | --------------- |
| Initial        | YESS   | HBD             |
| Initial        | NO     | Stay on Initial |
| HBD            | NEXT   | Main            |
| Main           | Photos | Album           |
| Main           | Letter | Letter          |
| Main           | Music  | Music           |
| Album          | Back   | Main            |
| Letter         | Back   | Main            |
| Music          | Back   | Main            |

The browser should ideally not reload during any of these transitions.

The root-level celebration animation is an exception to screen mounting: it must remain visually active while the application transitions from Initial to HBD.

---

# 64. Page Transition Style

Transitions should feel like turning pages of a scrapbook.

Possible transition:

```text
Current page
opacity: 1
transform: translateY(0)

       ↓

New page
opacity: 0
transform: translateY(8px)

       ↓

opacity: 1
transform: translateY(0)
```

A slightly different transition can be used between the HBD page and Main page to make the reveal feel special.

During the Initial → HBD transition, the celebration animation must not be unintentionally removed when `InitialScreen` unmounts.

---

# 65. Security / Privacy Considerations

Because this is a personal birthday website, the media files may be private.

The project should therefore avoid unnecessarily exposing metadata.

If the website is publicly deployed:

* Do not include private information in filenames.
* Avoid unnecessary EXIF metadata where possible.
* Do not expose unrelated personal files.
* Only place intended birthday photos/videos in the public assets.

If privacy is important, the deployment strategy should be considered before publishing the website publicly.

---

# 66. Deployment

The React application can be deployed using a static hosting platform.

The final deployment should support:

* HTTPS
* Static assets
* React application
* Audio
* Video
* Images

Possible hosting providers can be selected later based on the desired domain and privacy requirements.

---

# 67. Development Phases

The project should be developed in stages.

## Phase 1 — Project Setup

* Create React project
* Configure styling
* Create application structure
* Establish global theme
* Add fonts/assets
* Establish rounded card/button design tokens
* Establish global background animation layer

---

## Phase 2 — Initial Screen

Implement:

* Vintage card
* Rounded central card container
* Title
* YES button
* NO button
* NO button movement
* Parent-container movement boundaries
* Mobile NO behavior
* Yay sound
* Nooo sound
* Emoji rain
* Root-level persistent `EmojiRain`
* Transition to HBD

---

## Phase 3 — HBD Screen

Implement:

* Birthday heading
* Quotes
* Polaroids
* Decorations
* Vintage styling
* Rounded supporting cards/containers where appropriate
* NEXT button
* Page transition

---

## Phase 4 — Main Screen

Implement:

* Three rounded menu cards
* Structured grid/flex layout
* Photo card
* Letter card
* Music card
* Custom icons
* Bold titles
* Subtitle descriptions
* Hover scale/shadow micro-interactions
* Press interactions
* Responsive stacking on mobile

---

## Phase 5 — Photo Album

Implement:

* Album screen
* MoFu folder
* She/Her folder
* Media grid
* Images
* Videos
* Lightbox/media viewer
* Back navigation

---

## Phase 6 — Letter

Implement:

* Vintage paper
* Letter styling
* Placeholder content
* 12–15 line structure
* Decorative elements
* Back button

---

## Phase 7 — Music

Implement:

* Page title
* Four cassettes
* Audio playback
* Start/end timestamps
* Single active song
* Pause/stop behavior
* Cassette animations
* Back navigation

---

## Phase 8 — Content Integration

Replace placeholders with:

* Real name
* Real photos
* Real videos
* Real letter
* Real quotes
* Four songs
* Song verses/timestamps

---

## Phase 9 — Responsive Polish

Test:

* Desktop
* Laptop
* Tablet
* Android
* iPhone-sized screens

Especially test:

* NO button
* Parent-container NO button boundaries
* Album
* Video playback
* Music playback
* Letter readability
* Letter screen opens from an accessible vintage envelope interaction.
* Envelope flap and letter emergence use a short physical-feeling opening sequence.
* Opened letter remains visually connected to the envelope and uses birthday data for its message.
* Letter opening works responsively, supports reduced motion, and reveals content only after opening.
* Three-card Main Screen layout
* EmojiRain persistence during navigation

---

## Phase 10 — Performance & Deployment

* Compress images
* Compress videos
* Optimize audio
* Lazy-load album media
* Optimize background animations
* Test initial load time
* Test production build
* Test all screen transitions
* Deploy

---

# 68. Definition of Done

The project will be considered complete when:

### Initial Screen

* [ ] Vintage birthday-card design exists.
* [ ] Rounded central card container exists.
* [ ] Cute question is displayed.
* [ ] YES and NO buttons are present.
* [ ] YES and NO buttons are centered together in a single horizontal row.
* [ ] The NO-button movement container provides generous bounded movement while the complete action row remains centered.
* [ ] NO button avoids the cursor on desktop.
* [ ] NO button remains strictly inside its parent card/interaction container.
* [ ] NO button uses smooth relative transform movement.
* [ ] NO button returns to its original position after the desktop pointer leaves its interaction/proximity area.
* [ ] NO tap works appropriately on mobile.
* [ ] YES sound plays.
* [ ] NO sound plays.
* [ ] `playSound(src)` does not leak unknown synchronous or asynchronous playback exceptions.
* [ ] Valid YES and NO sound-effect paths invoke playback successfully after their user gestures.
* [ ] YES and NO effect assets exist at their configured paths and are playable by supported browsers.
* [ ] Happy emoji rain works.
* [ ] Sad/angry emoji rain works.
* [ ] Emoji particles have varied bounded trajectories that create a rain-like effect rather than synchronized vertical falling.
* [ ] `EmojiRain` is mounted at the `src/App.jsx` root level.
* [ ] Happy `EmojiRain` remains mounted during the Initial → HBD transition.
* [ ] EmojiRain uses `pointer-events: none`.
* [ ] EmojiRain cleans itself up after the celebration.
* [ ] YES leads to HBD screen.

### HBD Screen

* [ ] Birthday message is displayed.
* [ ] Friendship quotes are displayed.
* [ ] Quotes have varied rotations.
* [ ] Photos are displayed.
* [ ] Vintage scrapbook design exists.
* [ ] NEXT button works.
* [ ] HBD Continue/NEXT controls have generous, consistent horizontal and vertical padding.
* [ ] HBD screen has a cohesive retro-cute visual hierarchy.
* [ ] Decorative details enhance the birthday-card feeling without reducing readability.
* [ ] HBD layout remains polished, balanced, and usable across desktop and mobile sizes.
* [ ] HBD content has deliberate card padding and consistent vertical spacing.
* [ ] Birthday emojis and surrounding decorations feel curated, cute, and visually balanced.
* [ ] The cake is an obvious button and clicking it starts a visible fireworks celebration without HBD emoji rain.
* [ ] HBD card is centered with a constrained readable width and balanced viewport whitespace.
* [ ] HBD titles, messages, cake, quote, and Continue action have clear separation and hierarchy.
* [ ] No decorative emoji is clipped, stranded at the viewport edge, or overlapping card content.
* [ ] Initial and HBD emoji rain both provide an immersive, varied, viewport-spanning celebration without obscuring interaction.
* [ ] The HBD cake-button label has consistent padding and does not collide with the control border.
* [ ] `happy_birthday.mp3` starts as HBD background music when the user reaches the HBD screen.
* [ ] HBD background music loops after HBD is reached and persists across Main, Album, and Letter screens.
* [ ] HBD background music plays at its configured volume without fade-in or fade-out smoothing.
* [ ] HBD background music continues while cake and other HBD sound effects play.
* [ ] Background music is scoped to HBD and does not play on other screens.
* [ ] Autoplay restrictions or playback failures do not block HBD rendering, interaction, or navigation.
* [ ] HBD audio is safely paused, reset, and released when another media source takes over or the application unmounts.
* [ ] Navigating from HBD to Main Screen alone does not stop the song.
* [ ] Starting playlist or video audio stops and releases the HBD song before the competing source plays.
* [ ] No delayed HBD audio callback continues playback or changes audio state after ownership is released.
* [ ] Clicking the HBD cake launches 4–5 fireworks from the bottom of the screen without starting emoji rain.
* [ ] Fireworks follow varied curved trajectories and rise high into the viewport, with bursts generally 100–400px from the top and one burst near mid-screen.
* [ ] Each firework pop displays a large, clearly visible radial burst with multiple colored circles.
* [ ] Repeated cake clicks preserve all active fireworks until each ascent and pop animation completes.
* [ ] Firework launch and pop sounds use separate effect assets without interrupting HBD background music.
* [ ] Fireworks use `@tsparticles/react` with the v4-compatible `@tsparticles/preset-fireworks` for the visual effect instead of custom firework DOM/CSS animation code.
* [ ] Firework particles use high-contrast colors that remain clearly visible against the HBD background during ascent.
* [ ] Each cake click creates a finite burst of 5–10 fireworks; emitters must not shoot indefinitely.
* [ ] Firework audio uses only the preset's supported sound behavior instead of manual or project asset playback.
* [ ] The first cake click reliably starts both the visual burst and its sound behavior.
* [ ] Repeated cake taps add new bursts without clearing or restarting active animations.
* [ ] Each burst uses stable unique identity and does not create duplicate React keys.
* [ ] Firework rendering remains lightweight, with a low emitter rate and no unnecessary parallel canvases.
* [ ] Preset audio is initialized before the first cake gesture so the first burst can play its default sound.
* [ ] Fireworks do not load or play project audio assets; all firework audio comes from the preset.
* [ ] The first-click preset audio is ready before the cake interaction by initializing the particle engine with the HBD screen.
* [ ] Completed particles are allowed to finish naturally; no fixed timeout removes an in-progress canvas.

### Main Screen

* [ ] Photo option exists.
* [ ] Letter option exists.
* [ ] Music option exists.
* [ ] Three options are presented as distinct rounded cards.
* [ ] Main Screen includes a back button that returns to HBD Screen.
* [ ] Continue, NEXT, Back, and other shared action buttons use consistent readable padding across screens.
* [ ] Main Screen header, back action, and navigation cards occupy separate layout rows without overlap.
* [ ] Main Screen remains usable and balanced on desktop and narrow mobile viewports.
* [ ] Main Screen back action is rendered outside the main panel, aligned to its lower-left edge.
* [ ] Main Screen keeps clear spacing between its title and action/card content.
* [ ] At intermediate widths where cards cannot fit in one row, cards wrap into a centered layout without clipping or overflow.
* [ ] Main cards use `border-radius: 16px`.
* [ ] Main cards have custom icons.
* [ ] Main cards have bold titles.
* [ ] Main cards have subtitle descriptions.
* [ ] Main cards have soft multi-layered shadows.
* [ ] Main cards have hover scale/shadow micro-interactions.
* [ ] Main cards have press feedback.
* [ ] Cards form a row/grid on desktop.
* [ ] Cards stack appropriately on mobile.
* [ ] All three navigate correctly.

### Memories Page

* [ ] Main navigation labels the photo destination as Memories.
* [ ] Memories supports both image and video entries from `birthdayData.js`.
* [ ] Desktop Memories media uses a centered responsive grid with dynamically determined columns.
* [ ] Mobile Memories media uses a centered single vertical column.
* [ ] Individual desktop media cards are capped so they do not stretch across the viewport.
* [ ] Desktop media preserves the source image proportions without unintended cropping.
* [ ] Mobile media cards and previews use a larger, readable presentation.
* [ ] Desktop grid items use a capped, responsive 4:3 card ratio and never stretch to the viewport.
* [ ] Media viewers use a capped portrait-efficient 3:4 container with centered `object-fit: contain`.
* [ ] Media containers have no added colored placeholder background; unused space blends with the card.
* [ ] The HBD background song is app-global and pauses only when a Memories video starts playing.
* [ ] The HBD background song resumes when that video pauses, ends, or stops, without reacting to lightbox opening.
* [ ] She/Her folder exists.
* [ ] MoFu name is preserved exactly.
* [ ] Photos can be displayed.
* [ ] Videos can be displayed.
* [ ] Media viewer works.
* [ ] Back navigation works.

### Letter

* [ ] Vintage letter design exists.
* [ ] Placeholder 12–15 line letter exists.
* [ ] Final text can easily replace placeholder.
* [ ] Back button works.

### Music

* [ ] Correct title is displayed.
* [ ] Four cassette elements exist.
* [ ] Each cassette corresponds to one song.
* [ ] Only requested song sections play.
* [ ] Playback stops at the specified end time.
* [ ] Only one song can play at once.
* [ ] Playing cassette has visual feedback.
* [ ] The record rotates while music plays and resumes from its current angle after pausing or stopping.
* [ ] Back button stops playback and returns to Main.
* [ ] HBD background music resumes when playlist playback is paused, stopped, or exited.
* [ ] Playlist play/pause preserves the current track position and duration.
* [ ] Navigation-related buttons play the shared click sound, excluding Initial Screen controls.
* [ ] Memories category tabs play the shared click sound when selected.
* [ ] Initial Screen YES/NO buttons play only their dedicated sound effects, never the shared click sound.

### General

* [ ] Responsive on desktop.
* [ ] Responsive on mobile.
* [ ] No unwanted horizontal scrolling.
* [ ] Rounded card/button aesthetic is consistent.
* [ ] Animations are smooth.
* [ ] Background animations are non-blocking.
* [ ] Background animations do not interfere with interaction.
* [ ] Audio does not autoplay unexpectedly.
* [ ] Missing media does not crash the application.
* [ ] Application asset paths are centralized in a shared asset map rather than hardcoded in components.
* [ ] Production build works correctly.

### Desktop Music Layout

* [ ] Mobile Music UI remains unchanged.
* [ ] On larger screens, the playlist heading is centered at the top.
* [ ] The vinyl/CD player remains on the left with its controls below.
* [ ] The song list occupies the right side in a scrollable panel.
* [ ] Desktop song tiles use a capped width.
* [ ] The intermediate 601px–700px range has a defined Music layout matching the mobile design language without changing mobile or desktop layouts.

---

# 69. Design Philosophy

The most important goal is that this should **not feel like a generic birthday template**.

It should feel like someone personally assembled a little box of memories.

The visual metaphor should be:

> **"A handmade vintage scrapbook that you can interact with."**

Therefore, the design should favor:

```text
handmade > perfectly geometric
personal > generic
warm > modern
playful > corporate
nostalgic > minimal
rounded > harsh/angular
subtle animation > excessive animation
```

Rounded cards and containers should support the handmade aesthetic rather than replace it. They should feel like rounded pieces of paper, scrapbook cards, labels, folders, or physical objects.

The interaction itself should also tell a small story:

```text
Curiosity
   ↓
"Do you want to see it?"
   ↓
Playful YES/NO interaction
   ↓
Celebratory reveal
   ↓
Birthday greeting
   ↓
A little personal menu
   ↓
Memories + Letter + Music
```

That progression is the core experience of the website.
