const Tweeter = function () {
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" }
      ]
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        { id: "c4", text: "Don't worry second poster, you'll be first one day." },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." }
      ]
    }
  ];

  let _postIdCounter = 3;
  let _commentIdCounter = 7;

  const getPosts = () => _posts;

  const addPost = (text) => {
    const newPost = {
      text,
      id: `p${_postIdCounter++}`,
      comments: []
    };
    _posts.push(newPost);
  };

  const removePost = (postID) => {
    const index = _posts.findIndex(p => p.id === postID);
    if (index !== -1) _posts.splice(index, 1);
  };

  const addComment = (postID, text) => {
    const post = _posts.find(p => p.id === postID);
    if (post) post.comments.push({ id: `c${_commentIdCounter++}`, text });
  };

  const removeComment = (postID, commentID) => {
    const post = _posts.find(p => p.id === postID);
    if (post) {
      const index = post.comments.findIndex(c => c.id === commentID);
      if (index !== -1) post.comments.splice(index, 1);
    }
  };

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment
  };
};
