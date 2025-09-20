// An array of posts
const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
];

// @desc Get all posts
const getPosts = () =>posts;

// @desc Get the number of posts
export const getPostsLength = () => posts.length;

// Export the getPosts function as the default export
export default getPosts;