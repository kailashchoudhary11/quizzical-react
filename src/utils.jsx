const baseUrl = "https://opentdb.com/api.php";

const categories = [
    "Any Category",
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Musicals & Theatres",
    "Entertainment: Television",
    "Entertainment: Video Games",
    "Entertainment: Board Games",
    "Science & Nature",
    "Science: Computers",
    "Science: Mathematics",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art",
    "Celebrities",
    "Animals",
    "Vehicles",
    "Entertainment: Comics",
    "Science: Gadgets",
    "Entertainment: Japanese Anime & Manga",
    "Entertainment: Cartoon & Animations",
];

const difficulties = [
    "Any Difficulty",
    "Easy",
    "Medium",
    "Hard",
];

const gameState = {
    select: 0,
    solve: 1,
    close: 3,
};

const initialData = {
    questions: 10,
    category: categories[0],
    difficulty: difficulties[0],
};

async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json()
    return data;
}

function decodeHtml(text) {
    let txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
}

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


export { baseUrl, categories, decodeHtml, difficulties, fetchData, gameState, initialData, shuffleArray, };