export function shuffle(arr) {
    const array = []
    for (let i = 0; i < 9; i++) {
        const randomIndex = Math.round(Math.random() * arr.length - 1)
        array.push(arr.splice(randomIndex, 1)[0])
    }
    return array
}