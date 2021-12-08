function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
//







function createDaysList(){
  
  const dezDaysList = [28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  const holidays = [24, 25, 31]
  const fridays = [3, 10, 17, 24, 31]
  numberDays = document.querySelector('#days')

  
  for (let i = 0; i < dezDaysList.length; i += 1){
    let numberDaysItem = dezDaysList[i]
    let newLi = document.createElement('li')
    newLi.innerHTML = numberDaysItem
    newLi.className = 'day'
    for(n = 0; n < holidays.length; n += 1) {
      if(parseInt(newLi.innerText) === holidays[n]) {
        newLi.classList.add('holiday');
      }
    } 
    for(n = 0; n < fridays.length; n += 1) {
      if(parseInt(newLi.innerText) === fridays[n]) {
        newLi.classList.add('friday');
      }
    } 
    numberDays.appendChild(newLi)
  }
}

createDaysList();
