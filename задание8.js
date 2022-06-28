let sport = new Map([
    ["football", "good"],
    ["volleyball", "bad"],
    ["chess", "kind"]
]);
sport.forEach((key) => {
    console.log(`${key} - x`);
});
sport.forEach((value) => {
    console.log(` ${value} - y`);
});