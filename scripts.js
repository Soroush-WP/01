// Function to change the theme based on the entered code
function changeThemeByCode(themeCode) {
    const themes = {
        '8276462': 'summer',
        '9284621211': 'winter',
        '1111': 'ocean',
        '28282727210394819183746281': 'hacker'
    };

    const selectedTheme = themes[themeCode];
    const themeMessage = document.getElementById('themeMessage');

    if (selectedTheme) {
        applyTheme(selectedTheme); // Apply the theme
        themeMessage.textContent = '✅ Theme applied successfully!';
        themeMessage.style.color = 'green';
    } else {
        themeMessage.textContent = '❌ Invalid theme code!';
        themeMessage.style.color = 'red';
    }
}

// Function to apply a theme dynamically
function applyTheme(theme) {
    const themes = {
        ocean: {
            bg: 'linear-gradient(to bottom, #0077be, #00a8e8)',
            text: '#ffffff',
            buttonBg: 'linear-gradient(to right, #0044cc, #0099ff)',
            placeholder: '#b0d5f0',
            headerBg: 'linear-gradient(to right, #005678, #0089cc)',
            footerBg: 'linear-gradient(to right, #004366, #0066aa)',
            font: 'Arial, sans-serif'
        },
        summer: {
            bg: 'linear-gradient(to bottom, #ffd700, #ff7f50)',
            text: '#ff4500',
            buttonBg: 'linear-gradient(to right, #ffa500, #ff6347)',
            placeholder: '#ffcc99',
            headerBg: 'linear-gradient(to right, #ff9900, #ff6600)',
            footerBg: 'linear-gradient(to right, #ff5500, #ff3300)',
            font: 'Georgia, serif'
        },
        winter: {
            bg: 'linear-gradient(to bottom, #4f94cd, #ffffff)',
            text: '#00274d',
            buttonBg: 'linear-gradient(to right, #00bfff, #1e90ff)',
            placeholder: '#aaccee',
            headerBg: 'linear-gradient(to right, #005f99, #003366)',
            footerBg: 'linear-gradient(to right, #336699, #003366)',
            font: 'Verdana, sans-serif'
        },
        hacker: {
            bg: 'linear-gradient(to bottom, #000000, #0f0f0f)',
            text: '#00ff00',
            buttonBg: 'linear-gradient(to right, #006600, #00ff00)',
            placeholder: '#00aa00',
            headerBg: 'linear-gradient(to right, #003300, #009900)',
            footerBg: 'linear-gradient(to right, #002200, #004400)',
            font: '"Courier New", monospace'
        }
    };

    const themeProperties = themes[theme];
    if (themeProperties) {
        document.body.style.background = themeProperties.bg;
        document.body.style.color = themeProperties.text;
        document.body.style.fontFamily = themeProperties.font;

        // Update header and footer styles
        const header = document.getElementById('mainHeader');
        header.style.background = themeProperties.headerBg;

        const footer = document.getElementById('mainFooter');
        footer.style.background = themeProperties.footerBg;

        // Update button styles
        document.querySelectorAll('button').forEach(button => {
            button.style.background = themeProperties.buttonBg;
        });

        // Update placeholder styles
        document.querySelectorAll('textarea').forEach(textarea => {
            textarea.style.color = themeProperties.text;
            textarea.style.background = themeProperties.bg;
            textarea.style.fontFamily = themeProperties.font;
        });

        document.querySelectorAll('textarea::placeholder').forEach(placeholder => {
            placeholder.style.color = themeProperties.placeholder;
        });
    }
}

// Event listener for theme code submission
document.getElementById('applyThemeButton').addEventListener('click', () => {
    const themeCode = document.getElementById('themeCodeInput').value.trim();
    changeThemeByCode(themeCode);
});

// Show and hide the theme modal
document.getElementById('themeButton').addEventListener('click', () => {
    const themeModal = document.getElementById('themeModal');
    themeModal.style.display = themeModal.style.display === 'none' || themeModal.style.display === '' ? 'block' : 'none';
});

// Other functionality for binary translation
document.getElementById('translateToBinary').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.trim();
    if (!/^[a-zA-Z\s]*$/.test(inputText)) {
        alert('⚠️ Error: Please use English letters only! Emojis, symbols, and non-English characters are not allowed.');
        return;
    }
    const binaryText = textToBinary(inputText);
    document.getElementById('outputText').value = binaryText;
});

document.getElementById('translateToEnglish').addEventListener('click', () => {
    const binaryText = document.getElementById('inputText').value.trim();
    if (!/^[01\s]*$/.test(binaryText)) {
        alert('⚠️ Error: Invalid input! Only binary code (0s and 1s) is allowed.');
        return;
    }
    const englishText = binaryToText(binaryText);
    document.getElementById('outputText').value = englishText;
});

document.getElementById('copyToClipboard').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    if (outputText.value.trim() === '') {
        alert('⚠️ Error: There is no text to copy!');
        return;
    }
    outputText.select();
    document.execCommand('copy');
    alert('✅ Text copied to clipboard!');
});

// Helper functions for translation
function textToBinary(text) {
    return text.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
}

function binaryToText(binary) {
    return binary.split(' ').map(bin => {
        return String.fromCharCode(parseInt(bin, 2));
    }).join('');
}
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
