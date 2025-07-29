const tweeter = Tweeter();
const renderer = Renderer();


renderer.renderPosts(tweeter.getPosts());


document.getElementById("twit-btn").addEventListener("click", function () {
  const input = document.getElementById("input");
  const text = input.value.trim();

  if (text !== "") {
    tweeter.addPost(text);
    input.value = ""; 
    renderer.renderPosts(tweeter.getPosts());
  }
});


document.getElementById("posts").addEventListener("click", function (event) {
  const target = event.target;


  if (target.classList.contains("delete")) {
    const postId = target.dataset.id;
    tweeter.removePost(postId);
    renderer.renderPosts(tweeter.getPosts());
  }


  if (target.classList.contains("delete-comment")) {
    const commentId = target.dataset.id;
    const postDiv = target.closest(".post");
    const postId = postDiv.dataset.id;

    tweeter.removeComment(postId, commentId);
    renderer.renderPosts(tweeter.getPosts());
  }


  if (target.classList.contains("comment-button")) {
    const postDiv = target.closest(".post");
    const postId = postDiv.dataset.id;
    const input = postDiv.querySelector(".comment-input");
    const text = input.value.trim();

    if (text !== "") {
      tweeter.addComment(postId, text);
      input.value = "";
      renderer.renderPosts(tweeter.getPosts());
    }
  }
});
