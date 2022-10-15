class Adresses {
  getRandomAdress() {
    return this.adresses[Math.floor(Math.random() * this.adresses.length)];
  }

  adresses = [
    "Новый Арбат ул., 15",
    "Хрущевский пер., 61",
    "Малая Бронная ул., 78",
    "Таганская ул., 86",
    "Кропоткинский пер., 78",
    "Монетчиковский пер., 79",
    "Чистый пер., 46",
  ];
}
export default new Adresses();
