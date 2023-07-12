
//Write your code here

const createPost = function (title, content) {
    const socialCard = document.createElement('div');
    socialCard.setAttribute('class', 'social-card');

    const icon = document.createElement('div');
    socialCard.setAttribute('class', 'post-icon');

    const postTitle = document.createElement('div');
    socialCard.setAttribute('class', 'post-title');

    const postUser = document.createElement('div');
    socialCard.setAttribute('class', 'post-user');

    const postContent = document.createElement('div');
    socialCard.setAttribute('class', 'post-content');

    socialCard.append(icon, postTitle, postUser, postContent);

    //Adding content.

postTitle.innerText = title;
postUser.innerText = 'Prasenjit Das';
postContent.innerText = content;

document.body.prepend(socialCard);

}

createPost({
    title: 'Midnight Sun',
    content: `Oh man, last month I was in Sweden and I witnessed the midnight sun.`
})

createPost({
    title: 'Working with JavaScript',
    content: `It's been almost 10 years since I started working with Javascript.`
})
