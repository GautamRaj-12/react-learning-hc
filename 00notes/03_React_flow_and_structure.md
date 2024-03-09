- Javascript khud se html me inject ho kar manipulation nahi kar sakti, jab tak script tag ka use kar ke html me na include kare, js execute nahi hoga.
  

## create-react-app
- Create react app default directory structure

    ![Create react app default directory structure](image.png)

- In the `src` folder we can delete the following files: `App.test.js`, `logo.svg`, `reportWebVitals.js`, `setupTests.js` and the css files if you like.
- In the `public` folder we can delete the following files: `favicon.ico`, `logo192.png`, `logo512.png`, `manifest.json`,`robots.txt` to clean our project.
- Directory Structure after cleanup
  
  ![Directory Structure after cleanup](image-5.png)
- In the `index.js` file, delete the following lines:
  
  ![index js deleted lines](image-2.png)

- In the `app.js` file, delete the following lines:
  
  ![app js deleted lines](image-3.png)

- Add a simple div in `app.js`
  
  ![Simple div in app js](image-4.png)

- Type `npm run start` in the terminal to run the app. The app should run without any error.
  
  ![app compiled successfully](image-6.png)

  ![localhost 3000](image-7.png)

### Understanding flow

-  If you see, in the `public` folder there is only one html page `index.html`. The content of this page after removing comments.
  
    ![index.html contents](image-1.png)

- A very important thing to see here: **There is no script tag that injects JS in out html**