export function shuffle(arr) {
    const questions = [];
    for (let i = 0; i < 9; i++) {
        const randomIndex = Math.round(Math.random() * arr.length - 1);
        questions.push(arr.splice(randomIndex, 1)[0]);
    };
    return questions;
};
