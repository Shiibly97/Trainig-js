let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "IPhone"]
let colors = ["Red", "Green", "Black"]
let showCount = 3

document.write(`<h1>Show ${showCount} products</h1>`)
for (let i = 0; i < showCount; i++) {
    document.write("<div>")
    document.write(`<h3>[${i + 1}] ${products[i]}</h3>`)
    for (let j = 0; j < colors.length; j++) {
        document.write(`<p> - ${colors[j]}</p>`)
    }
    document.write(`${colors.join(" | ")}`)
} 