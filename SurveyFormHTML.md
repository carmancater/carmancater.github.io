---
layout: page
title: Survey Form HTML
subtitle: Responsive web design project
share-title: Carman Cater - Survey Form HTML
share-description: Survey Form HTML
---

``` html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Survey Form</title>
    <link rel="stylesheet" href="/assets/css/Survey Form.css" />
  </head>

  <body>
    <h1 id="title">Survey Form</h1>
    <p id="description" class="description">Thank you for taking the time to help us improve the platform</p>
    
    <form id="survey-form" method="post" action='https://register-demo.freecodecamp.org'>
      <fieldset>
        <label id="name-label" for="name">Name<input id="name" name="name" type="text" required placeholder="Enter your name" /></label>
        <label id="email-label" for="email">Email<input id="email" name="email" type="email" required placeholder="Enter your Email" /></label>
        <label id="number-label" for="number">Age <span class="clue">(optional)</span> <input id="number" type="number" name="number" min="13" max="120" placeholder="Age" /></label>
        <label for="dropdown">Which option best describes your current role?
          <select id="dropdown" name="dropdown">
            <option value="">Select current role</option>
            <option value="1">Student</option>
            <option value="2">Full Time Job</option>
            <option value="3">Full Time Learner</option>
            <option value="4">Prefer not to say</option>
            <option value="5">Other</option>
          </select>
        </label>
        <label>Would you recommend us to a friend?</label>
        <label for="defrecommend"><input id="defrecommend" type="radio" name="recommend-friend" class="inline" value="definitely" checked />Definitely</label>
        <label for="mayberecommend"><input id="mayberecommend" type="radio" name="recommend-friend" class="inline" value="maybe" />Maybe</label>
        <label for="nsrecommend"><input id="nsrecommend" type="radio" name="recommend-friend" class="inline" value="not sure" />Not Sure</label>
         <label for="dropdown2">What is your favorite feature?
          <select id="dropdown2" name="dropdown2">
            <option value="">Select an option</option>
            <option value="1">Challenges</option>
            <option value="2">Projects</option>
            <option value="3">Community</option>
            <option value="4">Open Source</option>
          </select>
        </label>
        <label>What would you like to see improved? <span class="clue">(Check all that apply)</span></label>
        <label for="Front-end Projects">
          <input value="0" id="Front-end Projects" type="checkbox" name="Front-end Projects" class="inline" /> Front-end Projects
        </label>
        <label for="Back-end Projects">
          <input value="1" id="Back-end Projects" type="checkbox" name="Back-end Projects" class="inline" /> Back-end Projects
        </label>
        <label for="Data Visualization">
          <input value="2" id="Data Visualization" type="checkbox" name="Data Visualization" class="inline" /> Data Visualization
        </label>
        <label for="Challenges">
          <input value="3" id="Challenges" type="checkbox" name="Challenges" class="inline" /> Challenges
        </label>
        <label for="Open Source Community">
          <input value="4" id="Open Source Community" type="checkbox" name="Open Source Community" class="inline" /> Open Source Community
        </label>
        <label for="Gitter help rooms">
          <input value="5" id="Gitter help rooms" type="checkbox" name="Gitter help rooms" class="inline" /> Gitter help rooms
        </label>
        <label for="Videos">
          <input value="6" id="Videos" type="checkbox" name="Videos" class="inline" /> Videos
        </label>
        <label for="City Meetups">
          <input value="7" id="City Meetups" type="checkbox" name="City Meetups" class="inline" /> City Meetups
        </label><label for="Wiki">
          <input value="8" id="Wiki" type="checkbox" name="Wiki" class="inline" /> Wiki
        </label><label for="Forum">
          <input value="9" id="Forum" type="checkbox" name="Forum" class="inline" /> Forum
        </label>
        <label for="Additional Courses">
          <input value="10" id="Additional Courses" type="checkbox" name="Additional Courses" class="inline" /> Additional Courses
        </label>
        <label for="comment">Any comments or suggestions?
          <textarea id="comment" name="comment" rows="4" cols="30" placeholder="Enter your comment here..."></textarea>
        </label>
        <input id="submit" type="submit" value="Submit" /> 
      </fieldset> 
      
    </form>

  </body>  

</html>
```