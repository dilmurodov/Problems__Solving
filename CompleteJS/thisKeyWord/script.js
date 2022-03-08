
let user = {
    name: "Джон",
    hi() { console.log(this.name); },
    bye() { console.log("Пока"); }
};

user.hi(); // Джон (простой вызов метода работает хорошо)

// теперь давайте попробуем вызывать user.hi или user.bye
// в зависимости от имени пользователя user.name
(user.name == "Джон" ? user.hi : user.bye)(); // Ошибка!