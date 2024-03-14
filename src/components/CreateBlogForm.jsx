const CreateBlogForm = ({ title, setTitle, author, setAuthor, url, setURL, handleSubmit, showBlogCreationForm, setShowBlogCreationForm }) => {
    const hideWhenBlogCreationForm = { display: showBlogCreationForm ? 'none' : '' }
    const showWhenBlogCreationForm = { display: showBlogCreationForm ? '' : 'none' }
    
    return (
        <>
            <div>
                <div style={hideWhenBlogCreationForm}>
                    <button onClick={() => setShowBlogCreationForm(true)}>
                        Add new blog
                    </button>
                </div>
                <div style={showWhenBlogCreationForm}>
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
                    <button onClick={() => setShowBlogCreationForm(false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </>
)}

export default CreateBlogForm