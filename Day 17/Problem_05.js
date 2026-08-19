/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students) || students.length === 0) {
        return "Invalid";
    }

    const isValid = students.every(
        s => s && typeof s === "object" && typeof s.name === "string" && typeof s.score === "number"
    );
    if (!isValid) {
        return "Invalid";
    }

    const qualified = students.filter(student =>student.score >= 70);

    const names = qualified.map((elem) => elem.name.toUpperCase());

    names.sort((a, b) => a.score - b.score);

    return names.slice(0, 3);
}