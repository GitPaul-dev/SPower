document.addEventListener('DOMContentLoaded', () => {

  function createTimeCounter() {
    const hoursValueList = document.querySelectorAll('.hour');
    const minutesValueList = document.querySelectorAll('.min');
    const secondsValueList = document.querySelectorAll('.sec');

    function addTimeValue(list, value) {
      list.forEach(el => {
        el.textContent = `${value}`;

        if (value < 10) {
          el.textContent = `0${value}`;
        }
      });
    }

    setInterval(function () {
      let today = new Date();
      let hours = 23 - today.getHours();
      let minutes = 59 - today.getMinutes();
      let seconds = 59 - today.getSeconds();

      addTimeValue(hoursValueList, hours);
      addTimeValue(minutesValueList, minutes);
      addTimeValue(secondsValueList, seconds);

    }, 1000);
  }

  function createRandomNumber(coefficient = 1) {
    return Math.floor(Math.random() * 10) * coefficient;
  }

  let initialNum = 53;

  function createQuantityCounter() {
    const quantityList = document.querySelectorAll('.quantity');

    function addQuantityValue(list, value) {
      list.forEach(el => {
        el.textContent = `${value}`;
      });
    }

    addQuantityValue(quantityList, initialNum);

    let quantityCounter = setInterval(() => {
      let random = createRandomNumber();

      initialNum = initialNum - random;
      let intager = random * 1000;

      addQuantityValue(quantityList, initialNum);

      if (initialNum <= 1) {
        initialNum = 1;
        addQuantityValue(quantityList, initialNum);
        clearInterval(quantityCounter);
      }

    }, createRandomNumber(2000));
  }

  createQuantityCounter();
  createTimeCounter();
});



