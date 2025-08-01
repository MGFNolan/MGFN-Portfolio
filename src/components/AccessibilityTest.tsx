const AccessibilityTest = () => {
    return (
        <div>
            {/* These will trigger accessibility warnings */}
            <img src="test.jpg" /> {/* Missing alt text */}
            <button style={{ color: "#ccc", background: "#ddd" }}>
                Bad contrast
            </button>
            <input type="text" /> {/* Missing label */}
        </div>
    );
};

export default AccessibilityTest;
