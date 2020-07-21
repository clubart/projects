import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './test.css';

const blogList = $('#blogList');
const postList = $('#postList');
const postDiv = $('#postDiv');
const prev = $('#prev');
const next = $('#next');
const returnButton = $('#returnButton');

async function displayData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
    } catch (err) {
        console.error(err);
    }
}

function getPosts(post, first, last) {
    if (first + 3 > post.length) {
        last = post.length;
    }
    //if (first < 0) {
        first = 0;
        last = 3;
    //}
    for (let i = first; i < last; i++) {
        let comments = false;
        const postDisplay = $(`<li><p>${post[i].id}<br>
        ${post[i].title}<br>
         ${post[i].body}</p>
         </li>`);
        const commentsButton = $(`<button>show comments</button>`);
        const commentList = $(`<ul><h4>Comments</h4></ul>`);
        postList.append(postDisplay);
        commentsButton.appendTo(postDisplay);
        postDiv.show();
        commentsButton.click(() => {
            if (!comments) {
                comments = true;
                commentsButton.html('hide comments');
                displayData(`https://jsonplaceholder.typicode.com/comments?postId=${post[i].id}`)
                    .then(comments => {
                        comments.forEach(comment => {
                            const commentDisplay = $(`<li>
                            <p>${comment.id}<br>
                            ${comment.name}<br>
                            ${comment.email}<br>
                            ${comment.body}<br></p></li>`);
                            commentList.append(commentDisplay);
                            postDisplay.append(commentList);
                        })
                    })
            } else {
                comments = false;
                commentsButton.html('show comments');
                commentList.empty();
            }
        });
    }
}

postDiv.hide();
displayData('https://jsonplaceholder.typicode.com/users')
    .then(blogs => {
        blogs.forEach(blog => {
            const blogDisplay = $(`<li class="col-3"><h4>${blog.name}</h4>
            <div>${blog.website}</div>
            <p>${blog.company.name}<br>
            ${blog.company.catchPhrase}<br>
            ${blog.company.bs}</p></li>`);
            blogDisplay.appendTo(blogList)
                .click(() => {
                    blogList.hide();
                    displayData(`https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`)
                        .then(posts => {
                            const postArray = [];
                            posts.forEach(post => {
                                postArray.push(post);
                            });
                            let firstPost = 0;
                            let lastPost = 3;
                            getPosts(postArray, firstPost, lastPost);
                            next.click(() => {
                                if (lastPost < posts.length) {
                                    firstPost = lastPost;
                                    lastPost += 3;
                                }
                                postList.empty();
                                getPosts(postArray, firstPost, lastPost);
                            });
                            prev.click(() => {
                                if (firstPost > 0) {
                                    firstPost = lastPost - 6;
                                    lastPost -= 3;
                                }
                                postList.empty();
                                getPosts(postArray, firstPost, lastPost);
                            });
                            returnButton.click(() => {
                                postDiv.hide();
                                postList.empty();
                                blogList.show();
                            });
                        })

                })
        });
    })