function attendance(word) {
    const trimmed = word.trim();
    const toLower = trimmed.toLowerCase();
    const presentWords = ["minahal", "nagmahal", "nasaktan"];

    return presentWords.includes(toLower) ? "Present" : "Absent";
}
