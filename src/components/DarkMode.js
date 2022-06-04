
const DarkMode = ({ handleDarkMode }) => {
    return (
        <div className="dark">
            <h1>My Post-it</h1>
            <button 
                onClick={()=> 
                    handleDarkMode(
                        (previousDarkMode)=> !previousDarkMode
                    )
                }
                className="add"
            >
                Dark Mode
            </button>
        </div>
    )
}

export default DarkMode;