import Blog from './Blog'

const BlogList = ({ blogs }) => (<>
    <div>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </div>
    </>
)

export default BlogList