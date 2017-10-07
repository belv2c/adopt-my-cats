### Adopt My Cats

![Demo](https://user-images.githubusercontent.com/30091921/31305617-a1098682-ab03-11e7-9c7e-fe6905e1ef03.gif)

- On page load, I should see an input box and a button.
- The input box should prompt me to enter the number of cats I currently have on my site
- I should be able to either click the enter key in the input field or the button on the page to submit my number of cats I have
- I should be able to make a call to: https://random-dogs-api.herokuapp.com/cats/NUMBEROFCATZZZZZ
- Once all the cats come back:
- They should be displayed on my page in card-like style (use Bootstrap columns to aid in this).
- Your card should be a div, it should have a nested div to display the cat image, it should have another nested div to contain all the descriptive elements (each in their own p tag)
- If the cat has 10 toes or less, their p tag that contains their number of toes should have a class of disabled-kitty.
- The input and button originally shown on the page should be hidden.
- A new button should now appear at the top of the page: 'Get Rid Of The Disabled Ones'
- Once I click on the 'Get Rid Of The Disabled Ones' button, any card on my page that has a p tag with the class disabled-kitty should be hidden.

Tools You Should Be Using:

- Browserify
- Grunt
- jQuery (DOM methods, AJAX)
- Linting
- Bootstrap

#### How to run (Node must be installed on your machine):

```
git clone https://github.com/belv2c/adopt-my-cats.git
cd adopt-my-cats
cd into lib folder
npm init
npm install grunt grunt-contrib-jshint matchdep grunt-contrib-watch grunt-browserify jshint-stylish --save-dev
type in grunt
hs -c-1
```

##### This will show in your browser at: http://localhost:8080