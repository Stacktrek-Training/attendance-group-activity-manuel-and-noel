function attendance(word) {
    const trimmed = word.trim();
    const toLower = trimmed.toLowerCase();
    const presentWords = ['minahal', 'nagmahal', 'nasaktan'];

    return presentWords.includes(toLower) ? 'Present' : 'Absent';
}

console.log(attendance('MINAHAL'));
console.log(attendance('NaGmAhAl'));
console.log(attendance('NASAktan'));
console.log(attendance(''));