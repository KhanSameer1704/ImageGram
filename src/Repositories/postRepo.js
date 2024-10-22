import post from './schema/post.js';

export const createPost = async (caption, image, userId) => {
    try {
        const newPost = await post.create({ caption, image, userId });
        return newPost;
    } catch (error) {
        console.log(error);
    }
}