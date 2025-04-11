// Function to convert English text to binary (Machine Code)
function textToBinary(text) {
    return text.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
}

// Function to convert binary to English text
function binaryToText(binary) {
    return binary.split(' ').map(bin => {
        return String.fromCharCode(parseInt(bin, 2));
    }).join('');
}

// Function to show error messages
function showError(message) {
    alert(`⚠️ Error: ${message}`);
}

// Event listeners for buttons
document.getElementById('translateToBinary').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.trim();
    if (!/^[a-zA-Z\s]*$/.test(inputText)) {
        showError('Please use English letters only! Emojis, symbols, and non-English characters are not allowed.');
        return;
    }
    const binaryText = textToBinary(inputText);
    document.getElementById('outputText').value = binaryText;
});

document.getElementById('translateToEnglish').addEventListener('click', () => {
    const binaryText = document.getElementById('inputText').value.trim();
    if (!/^[01\s]*$/.test(binaryText)) {
        showError('Invalid input! Only binary code (0s and 1s) is allowed.');
        return;
    }
    const englishText = binaryToText(binaryText);
    document.getElementById('outputText').value = englishText;
});

// Event listener for copying to clipboard
document.getElementById('copyToClipboard').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    if (outputText.value.trim() === '') {
        showError('There is no text to copy!');
        return;
    }
    outputText.select();
    document.execCommand('copy');
    alert('✅ Text copied to clipboard!');
});
