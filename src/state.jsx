const user={
    name: "Марио",
    lastname:"Бранте",
    id:"1",
    about:"Тут я рассказываю о себе",
    avatar:"https://image.freepik.com/free-vector/man-avatar-profile-on-round-icon_24640-14046.jpg"
};
const users={
    0:{name:'Полина',lastname:'Шувалова'},
    1:{name:'Алиса',lastname:'Федотова'},
    2:{name:'Денис',lastname:'Лавров'},
    3:{name:'Мирослава',lastname:'Смирнова'},
    4:{name:'Глеб',lastname:'Терехов'},
    5:{name:'Полина',lastname:'Кузьмина'},
    6:{name:'Константин',lastname:'Булгаков'},
    7:{name:'Варвара',lastname:'Мельникова'},
    8:{name:'Михаил',lastname:'Киселев'},
    9:{name:'Варвара',lastname:'Исаева'},
};
export function getUser(){
    return user;
}
export function getUsers(){
return users;
}