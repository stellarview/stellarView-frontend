# Welcome to stellarView 

stellarView is a full-stack interactive prep tool to help developers build confidence for their next technical interview. 
<br>
[Live Deploy]('')
[Backend Repository]('')
<br>

## Build 
This application uses a React, Sass frontend. Top-reported technical questions are stored in our PostgreSQL database, and fetched from our backend RESTful API server using Express and Node. 

## Features
<b>Flexible Authentication</b>
<br>
Users can create an account with GitHub or through our in-house authentication forms.

<b>Personalized Studying</b>
<br>
Users can log in to their personalized profile, choose from categories, and practice answering top real-world technical questions.
<br>

## Contributors

### Kat Zaro (she/her)
[LinkedIn]('https://www.linkedin.com/in/katzaro')
<br>
[GitHub]('https://github.com/kathrynzaro')
<br>

### Jenna Graham (she/her)
[LinkedIn]('https://www.linkedin.com/in/jenna-lee-graham')
<br>
[GitHub]('https://github.com/jenna-graham')
<br>

### Kashi Tamang (they/them)
[LinkedIn]('https://www.linkedin.com/in/kashitamang')
<br>
[GitHub]('https://github.com/kashitamang')
<br>

### Aaron Enyetu (he/him)
[LinkedIn]('https://www.linkedin.com/in/aaron-enyetu/')
<br>
[GitHub]('https://github.com/aaronEnyetu')
<br>

### Austin Han (he/him)
[LinkedIn]('https://www.linkedin.com/in/austin-han-740a69157/')
<br>
[GitHub]('https://github.com/austinbhan')
<br>

### Brien Thomas (he/him)
[LinkedIn]('https://www.linkedin.com/in/brien-thomas')
<br>
[GitHub]('https://github.com/briensthomas')
<br>


# stellarView frontend


## Components

### Welcome "welcome" (I already have an account vs Get started)
- Loader


### Auth 
- Signin Form "signin"
- Signup Form "signup"
- ProtectedRoute (returns outlet)


### Dashboard "" (Home)
- Categories


### Page
- Layout (wraps everything in App, contains Header and Outlet)
- Header
- Footer navigation

### Forms
- FormControl (InputControl, FormButton, etc)

### Profile "profile"
- User info (username, "Member since...", avatar, role (student, etc))
- Badges the user has earned via completing levels

### About "about"
- about the app
- about the devs
- stretch: app stats

### Name TBD
- Flashcard
- Questions
- Choices
- (header will have progress bar, points, cancel button)


