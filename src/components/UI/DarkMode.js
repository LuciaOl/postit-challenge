
const DarkMode = ({ handleDarkMode }) => {
    return (
        <div className="dark">
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