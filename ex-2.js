// Exercise #2 Product

const product = {
  name: "Xiaomi Air Purifier",
  price: 4000,
  ratings: 2.5,
  photo: null,
};
let socialMediaShare = "facebookShare";
product.ratings = 4.5;
product.photo = "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg";

let newKey = "code" ;
product[newKey] = "IT0101010";

product.price = 6000;
delete product.ratings;

let newKey2 = socialMediaShare;
product[newKey2]=45.5;

console.log(product);
