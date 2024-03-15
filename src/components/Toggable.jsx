import { useState } from "react";

const Toggable = (props) => {
    const [visible, setVisible] = useState(false)

    const hideWhenBlogCreationForm = { display: visible ? 'none' : '' }
    const showWhenBlogCreationForm = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    return (
        <div>
            <div style={hideWhenBlogCreationForm}>
                <button onClick={toggleVisibility}>
                    {props.buttonLabel}
                </button>
            </div>
            <div style={showWhenBlogCreationForm}>
                {props.children}
                <button onClick={toggleVisibility}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default Toggable