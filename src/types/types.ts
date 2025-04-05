
export interface ProductCardItem {
    categoryId?:string,
    title?:string,
    name:string,
    price:number,
    icon:string,
    weight:number,
    detail?:string
}


export interface CartProductItem{
    categoryId?:string,
    title?:string,
    name:string,
    price:number,
    icon:File,
    weight:number,
    detail?:string,
    qantity:number
}


export interface ImgProps {
    isModal?:boolean
}

export interface sortCategoryState {
    sort:string,
    sortName:string
}

export interface sortCategoryList {
    id:string,
    sortName:string
}