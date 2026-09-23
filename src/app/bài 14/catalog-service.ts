import { Service } from '@angular/core';

@Service()
export class CatalogService {
   datas = [
  {
    "Cateid": "cate1",
    "CateName": "nuoc ngot",
    "Products": [
      {
        "ProductId": "p1",
        "ProductName": "Coca",
        "Price": 100,
        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNW_NnyV73QI-ZDzbwhFr8dWlM3nvDxSzQSDaG0Bw2rg&s=10"
      },
      {
        "ProductId": "p2",
        "ProductName": "Pepsi",
        "Price": 300,
        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-LD6UFhRjrJhwvJ8vzkWR8GfCaEFCFa_MBx-RIv5iquQJqLR8OouzeQ&s=10"
      },
      {
        "ProductId": "p3",
        "ProductName": "Sting",
        "Price": 200,
        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJamPYHEXBVRd9DmW0wrz3x8TZ378P38FBER-J9VKq2QI2zqg_HPirbMPi&s=10"
      }
    ]
  },
  {
    "Cateid": "cate2",
    "CateName": "Bia",
    "Products": [
      {
        "ProductId": "p4",
        "ProductName": "Heineken",
        "Price": 500,
        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGO_j_7_EOQwCJKq4Xpyy0SU0jBnINctnyScYmTUboTR-qr4hqWYCyH_x&s=10"
      },
      {
        "ProductId": "p5",
        "ProductName": "333",
        "Price": 400,
        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwx9IDl_AmZqeVlnKRLex70GvAoqhhYtsw8RYbf5I_uA&s=10"
      },
      {
        "ProductId": "p6",
        "ProductName": "Sai Gon",
        "Price": 600,
        "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnK6Mc7QP8vI0SF7Vvws9kuUMkS8Ywe6FnqGVU9yd8Nw&s=10"
      }
    ]
  }
];

constructor() {}

getCategories() {
  return this.datas;
}
}
