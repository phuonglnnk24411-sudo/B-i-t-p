import { Service } from '@angular/core';

@Service()
export class ProductService {
    productsImage = [
        {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNn8ZC_znQWRhJIbQLLaazjvlh8ayjdRkPameKLRnNsxxFqwT-AjA1MuK&s=10"},
        {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"https://product.hstatic.net/1000288770/product/nuoc_ngot_pepsi_cola_lon_330ml_5d1df64d846f4f93aa666c723cea177d_master.jpg"},
        {"ProductId":"p3","ProductName":"Sting","Price":200,"Image":"https://product.hstatic.net/200000460455/product/sting_dau_sleek_lon__320ml__7ea37f02dff64103ae8121a3f9b193c0_master.jpg"}
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
