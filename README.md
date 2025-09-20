
# Cat Adventure at Ball State

This is a choose your own adventure game where you help Charles the Cat find his way to class at Ball State University.
Each HTML page represents a state and links represent transitions between states, with sounds playing when you mouse over a option!

## Programs used
- Pheonix Code
- readme.so
- bfxr.net
- Photopea

## Technical Framework
- HTML pages = states  
- Hyperlinks (<a> tags) = transitions
- CSS (styles.cs) = styling for the page, centering, fonts, colors
- JavaScript (script.js) = plays a sound when hovering over links
- Images = visual indication that the state has changed
    * index photo
    * library photo
    * dorm photo
    * art photo
    * bell photo
- Sound = tells the user a option is hovered over
    * linksound.mp3

## Installing / Running
1. Clone the repository
2. Open index.html in any web browser.
3. Hover over links to hear sounds and click them to navigate through the adventure!

## How Each Node is Stored
Each node is a separate HTML file
* index.html (start)
* library.html (wrong)
* dorm.html (wrong)
* robertbell.html (correct/end)
* aandj.html (wrong)
* belltower.html (wrong)

## Mechanism for Switching Between Nodes
Clicking a  link moves the player from one HTML page to another. Each link represents a state transition.

## Reflection
I had a lot of fun with this project, the hardest part for me was creating the initial idea, once that was done it was fairly easy to put together. In elementary school I remember doing an assigment very similar to this one, but without realizing how it relates to state machines and the like!

## Parts I’m Proud Of
Adding the sound to play when you mouse over a link

## What I Would Like to Get To
Adding more paths and making the images more appealing.
Possibly implementing a score system or timer.
