const Renderer = function () {
  const renderPosts = function (posts) {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = ""; // נקה את כל הפוסטים הקודמים

    for (let post of posts) {
      const postElement = createPostElement(post);
      postsContainer.appendChild(postElement);
    }
  };

  const createPostElement = function (post) {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.dataset.id = post.id;

    const postText = document.createElement("div");
    postText.className = "post-text";
    postText.textContent = post.text;

    const deletePost = document.createElement("div");
    deletePost.className = "delete";
    deletePost.dataset.id = post.id;
    deletePost.textContent = "Delete Post";

    const commentsDiv = document.createElement("div");
    commentsDiv.className = "comments";

    for (let comment of post.comments) {
      const commentDiv = document.createElement("div");
      commentDiv.className = "comment";
      commentDiv.dataset.id = comment.id;
      commentDiv.textContent = comment.text;

      const deleteComment = document.createElement("span");
      deleteComment.className = "delete-comment";
      deleteComment.dataset.id = comment.id;
      deleteComment.textContent = " X";

      commentDiv.appendChild(deleteComment);
      commentsDiv.appendChild(commentDiv);
    }

    const input = document.createElement("input");
    input.className = "comment-input";
    input.type = "text";
    input.placeholder = "Got something to say?";

    const button = document.createElement("button");
    button.className = "comment-button";
    button.textContent = "Comment";

    postDiv.appendChild(postText);
    postDiv.appendChild(deletePost);
    postDiv.appendChild(commentsDiv);
    postDiv.appendChild(input);
    postDiv.appendChild(button);

    return postDiv;
  };

  return {
    renderPosts
  };
};
