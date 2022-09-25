var mongoose = require("mongoose");
var Product = require("../models/productsApi");

var newProducts = [
    {
        title: "first product",
        price: 10,
        description: "this is the first product",
        image: "https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/211799_00_1.jpg"
        },
    {
        title: "second product",
        price: 20,
        description: "this is the second product",
        image: "https://st.depositphotos.com/1265046/1328/i/950/depositphotos_13280842-stock-photo-tv-screen-white.jpg"
        },
    {
        title: "third product",
        price: 30,
        description: "this is the third product",
        image: "https://www.nme.com/wp-content/uploads/2020/06/ps5-credit-sie@2000x1270.jpg"
        },
    {
        title: "fourth product",
        price: 30,
        description: "this is the fourth product",
        image: "https://www.nme.com/wp-content/uploads/2020/06/ps5-credit-sie@2000x1270.jpg"
        }
    ];


const seedDB = async () =>{
    await Product.insertMany(newProducts);
};

seedDB().then(()=>{
    mongoose.connection.close();
})