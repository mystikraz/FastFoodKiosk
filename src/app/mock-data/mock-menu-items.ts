import { MenuItem } from '../model/menu-item';

export const MenuItems:MenuItem[]=[
{id:1,name:'Burger',menuType:'G', rate:'',parent:0,imgSrc:'https://image.shutterstock.com/z/stock-photo-fresh-tasty-burger-isolated-on-white-background-705104968.jpg' },
{id:2,name:'Pizza', menuType:'G', rate:'',parent:0,imgSrc:'https://image.shutterstock.com/image-photo/delicious-pizza-served-on-wooden-260nw-529633279.jpg'},
{id:3,name:'Drinks', menuType:'G', rate:'',parent:0,imgSrc:'https://image.shutterstock.com/image-photo/pink-red-fresh-colorful-exotic-260nw-794455711.jpg'},
{id:4,name:'Chicken', menuType:'G', rate:'',parent:0,imgSrc:'https://image.shutterstock.com/image-photo/hot-crispy-fried-chicken-legs-260nw-378853423.jpg'},
{id:5,name:'ChickenBurger', menuType:'C', rate:'100',parent:1,imgSrc:'https://image.shutterstock.com/image-photo/southern-fried-fiery-chicken-burger-260nw-742231186.jpg'},
{id:6,name:'Magharitta', menuType:'C', rate:'100',parent:2,imgSrc:'https://www.washingtonpost.com/resizer/M-WnldvRmvg3qyWg0Om8ssM6E3M=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UM4VXMMJ5Y7T5MPQALWPL73RGM.jpg'},
{id:6,name:'Magharitta', menuType:'C', rate:'150',parent:2,imgSrc:'https://www.washingtonpost.com/resizer/M-WnldvRmvg3qyWg0Om8ssM6E3M=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UM4VXMMJ5Y7T5MPQALWPL73RGM.jpg'},
{id:7,name:'Double cheese Burger', rate:'350',parent:1, menuType:'C',imgSrc:'https://thumbor.thedailymeal.com/2t7wp2K2A5vgGa9wIfyCLicNbww=/870x565/https://www.thedailymeal.com/sites/default/files/story/shutterstock_173303120.jpg'},
{id:7,name:'Double cheese Burger', rate:'250',parent:3, menuType:'C',imgSrc:'https://thumbor.thedailymeal.com/2t7wp2K2A5vgGa9wIfyCLicNbww=/870x565/https://www.thedailymeal.com/sites/default/files/story/shutterstock_173303120.jpg'},
{id:7,name:'Double cheese Burger', rate:'150',parent:4, menuType:'C',imgSrc:'https://thumbor.thedailymeal.com/2t7wp2K2A5vgGa9wIfyCLicNbww=/870x565/https://www.thedailymeal.com/sites/default/files/story/shutterstock_173303120.jpg'},

];