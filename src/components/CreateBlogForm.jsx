const CreateBlogForm = ({ title, setTitle, author, setAuthor, url, setURL, handleSubmit }) => (
    <>
        <div>
            <h2>Create new blog:</h2>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
                Title: 
                <input
                    type="text"
                    value={title}
                    name="Title"
                    onChange={({ target }) => setTitle(target.value) }
                />
            </div>
            <div>
                Author: 
                <input
                    type="text"
                    value={author}
                    name="Author"
                    onChange={({ target }) => setAuthor(target.value) }
                />
            </div>
            <div>
                URL: 
                <input
                    type="url"
                    value={url}
                    name="Url"
                    onChange={({ target }) => setURL(target.value) }
                />
            </div>
            <button type="submit">Create New Blog</button>
        </form>
    </>
)

export default CreateBlogForm