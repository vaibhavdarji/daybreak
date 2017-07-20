## DBH Front-End assignment

You may complete this assignment and then send us your work, please do not spend more than a few hours on this.

If you don't have time to write all code, just write in comments how you would do it and/or use pseudocode.

Thanks!

## Table of Contents

-   [Description](#description)
-   [REST API](#rest-api)
-   [Page: posts](#page-posts)
-   [Page: comments](#page-comments)
-   [General nice to have](#nice-to-have)

### Description

Create a `Node.js`, `React`, Front End app based on [create-react-app](https://github.com/facebookincubator/create-react-app) with two page types: [*posts*](#page-posts) and [*comments*](#page-comments).

-   Integrate [redux](http://redux.js.org/) to manage the **state**.
-   Integrate [react-router](https://github.com/ReactTraining/react-router) to manage **routing**.
-   It should be lightweight and use native browser features when possible.
-   You can use a `Redux` compatible library to manage `async` flows and `API` calls if you want.
-   Use `Redux`, but it is up to you to choose the state format and how you manipulate it.
-   Styling is not necessary, use simple *black and white* styled html tags to separate blocks.

### REST API

You can use the following, public `JSON REST API` services.

#### Posts
<https://jsonplaceholder.typicode.com/posts>

#### Comments
<https://jsonplaceholder.typicode.com/comments>

#### Users
<https://jsonplaceholder.typicode.com/users>

### Page: *posts*

**URLs:**

-   <http://localhost:3000/posts>
-   <http://localhost:3000/posts/1>
-   <http://localhost:3000/posts/2>
-   ...

**Description:**

-   show all the posts (with some basic information) or a specific post by its id.
-   if the post id in the url doesn't exist, show an error to the user.

**Nice to have:**
-   show details about the user (the author) on every post.
-   show all the comments below every post. Every comment should have a link to its specific `comments/n` page.

### Page: *comments*

**URLs:**

-   <http://localhost:3000/comments>
-   <http://localhost:3000/comments/1>
-   <http://localhost:3000/comments/2>
-   ...

**Description:**
-   show all the comments (with some basic information) or a specific comment by its id.
-   if the comment id in the url doesn't exist, show an error to the user.
-   every comment should have a link to the `posts/n` page of the post it is associated to.

### General nice to have

*   A way to validate the `props` passed to the `React` components.
*   A way to automatically format code.
