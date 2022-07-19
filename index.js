const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let alphabet_small = []
for (let i = 0; i < alphabet.length; i++) {
    alphabet_small.push(alphabet[i].toLowerCase())
}

const chars = ["!", "#", "%", "/", "=", "_", ";", "+"]

function getRandomNum(max) {
    return Math.floor(Math.random() * max)
}

function createPassword() {
    let password = ""
    for (let i = 0; i < 12; i++) {
        let num = 0
        num = Math.floor(Math.random() * 3 + 1)
        if (num == 1) {
            password += alphabet[getRandomNum(alphabet.length)]
        } else if (num == 2) {
            password += alphabet_small[getRandomNum(alphabet_small.length)]
        } else {
            password += chars[getRandomNum(chars.length)]
        }
    }
    return password
}

/* Function that displays passwords on the screen */
function displayPasswords() {
    for (let i = 0; i < 4; i++) {
        document.getElementById(`pw-${i+1}`).textContent = createPassword()
    }
}

/* Function that saves passwords to localStorage */
function savePasswords() {
    let passwordsArray = []
    for (let i = 1; i < 5; i++) {
        passwordsArray.push(document.getElementById(`pw-${i}`).textContent)
    }
    window.localStorage.setItem("array", JSON.stringify(passwordsArray))
    for (let i = 1; i < 5; i++) {
        document.getElementById(`pw-${i}`).textContent = ""
    }
}

/* Function that returns an array of passwords from localStorage and displays it */
function returnPasswords() {
    const localStorageArray = JSON.parse(window.localStorage.getItem("array"))
    for (let i = 0; i < 4; i++) {
        document.getElementById(`pw-${i+1}`).textContent = localStorageArray[i]
    }
}

document.getElementById("pw-btn").addEventListener("click", displayPasswords)

document.getElementById("save-btn").addEventListener("click", savePasswords)

document.getElementById("return-btn").addEventListener("click", returnPasswords)

