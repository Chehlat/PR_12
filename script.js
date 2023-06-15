var landmarks = [];
for (var i = 0; i < 10; i++) {
  var landmark = prompt('Введите ориентир: ');
  landmarks.push(landmark);
}

console.log('Путь от Дома до Колледжа: ' + landmarks.join(' потом '));


var reverseLandmarks = [];
var reversePath = '';


while (landmarks.length > 0) {
  var reverseLandmark = landmarks.pop();
  reverseLandmarks.push(reverseLandmark);
  reversePath += reverseLandmark + ' потом ';
}


reversePath = reversePath.slice(0, -6);


console.log('Обратный путь: ' + reversePath);

var choice = prompt('Если хотите посмотреть путь от Дома до места – напишите название вашего места (например, Колледж). Если хотите посмотреть путь Домой – напишите "Дом".');

if (choice.toLowerCase() === 'дом') {
  console.log('Путь от места до Дома: ' + reverseLandmarks.join(' потом '));
} else {
  console.log('Путь от Дома до ' + choice + ': ' + landmarks.join(' потом '));
}
