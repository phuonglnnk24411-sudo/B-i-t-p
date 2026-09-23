import { Service } from '@angular/core';

@Service()
export class ProductService {
    productsImage = [
        {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNn8ZC_znQWRhJIbQLLaazjvlh8ayjdRkPameKLRnNsxxFqwT-AjA1MuK&s=10"},
        {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNn8ZC_znQWRhJIbQLLaazjvlh8ayjdRkPameKLRnNsxxFqwT-AjA1MuK&s=10"},
        {"ProductId":"p3","ProductName":"Sting","Price":200,"Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNn8ZC_znQWRhJIbQLLaazjvlh8ayjdRkPameKLRnNsxxFqwT-AjA1MuK&s=10"}
    ];
    constructor() { }   
    getProductsWithImages()
    {
        return this.productsImage;
    }   
    getProductDetail(id:any){         
        return this.productsImage.find(x=>x.ProductId==id)   
    }  
}
