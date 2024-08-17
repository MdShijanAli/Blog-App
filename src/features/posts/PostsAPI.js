import axiosInstant from "../../utils/axios"

export const getPosts = async() => {
  const posts = await axiosInstant.get('/blogs')
  return posts.data
}