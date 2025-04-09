import {sushi1,sushi2,sushi3,sushi4,sushi5,sushi6} from '../images/ProductCardImg/Sushi/sushi.js'
import { roll1,roll2,roll3,roll4,roll5,roll6 } from '../images/ProductCardImg/Rolls/rolls.js'
import { drink1,drink2,drink3,drink4,drink5,drink6 } from '../images/ProductCardImg/drinks/drinks.js'

 const sushi = [
    {categoryId:'sushi',title:'Суши',name:'Гункан лосось',price:190,icon: sushi1,weight: 40,detail:'sharp'},
    {name:'Нигири угорь',price:170,icon:sushi2,weight: 85,detail:'sharp'},
    {name:'Нигири угорь белый',price:130,icon:sushi3,weight: 80,detail:'clasic'},
    {name:'Гункан с тунцом и трюфелем',price:200,icon:sushi4,weight: 270,detail:'clasic'},
    {name:'Гункан тунец спайси',price:150,icon:sushi5,weight: 60,detail:'sugary'},
    {name:'Нигири тунец',price:110,icon:sushi6,weight: 90,detail:'sugary'},
]


const rolls = [
    {categoryId:'rolls',title:'Роллы',name:'Филадельфия с лососем',price:190,icon:roll1,weight: 320,detail:'sharp'},
    {name:'Филадельфия с угрем',price:170,icon:roll2,weight: 235,detail:'sharp'},
    {name:'Кратос',price:130,icon:roll3,weight: 310,detail:'clasic'},
    {name:'Ямамото',price:200,icon:roll4,weight: 330,detail:'clasic'},
    {name:'Запеченная креветка',price:150,icon:roll5,weight: 350,detail:'sugary'},
    {name:'Комбо Филадельфия',price:110,icon:roll6,weight: 325,detail:'sugary'},
]

const drinks = [
    {categoryId:'drinks',title:'Напитки',name:'Coca-Cola 0.25(ст)',price:190,icon: drink1,weight: 0.25},
    {name:'Fanta',price:170,icon:drink2,weight: 0.5},
    {name:'Sprite',price:130,icon:drink3,weight: 0.5},
    {name:'Берн',price:200,icon:drink4,weight: 0.4},
    {name:'Coca-Cola Vanilla',price:150,icon:drink5,weight: 0.3},
    {name:'Dr Pepper классический',price:110,icon:drink6,weight: 0.3},
]

export default  [sushi,rolls,drinks]