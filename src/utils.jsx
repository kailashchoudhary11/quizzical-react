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
    result: 2,
    close: 3, 
};

const initialData = {
    questions: 10,
    category: categories[0],
    difficulty: difficulties[0],
};

const baseUrl = "https://opentdb.com/api.php"

export {baseUrl, categories, difficulties, gameState, initialData, };