let arr = ["дождь", "гром", "ветер", "гроза", "облако", "солнце"];
function hasTwins(array){
  return array.length !== new Set(array).size;
}