const {shop} = require('./data/shop')
const {categories} = require('./data/category')
const {products} = require('./data/product')
const {blogs} = require('./data/blog')
const Shop = require('./src/app/models/Shop')
const Category = require('./src/app/models/Category')
const Product = require('./src/app/models/Product')
const Blog = require('./src/app/models/Blog')
const dotenv = require('dotenv')
const db = require('./src/config/db')

dotenv.config()
db.connect()


async function clearAndSeedShop(){
    try {
        // Clear existing shop data
        await Shop.deleteMany({});
    
        // Seed new shop data
        const newShop = new Shop(shop);
        await newShop.save();
        console.log('Shop info imported');
      } catch (error) {
        console.error(error);
        console.log('Shop info import failure');
      }
}

async function clearAndSeedCate(){
    try {
        // Clear existing shop data
        await Category.deleteMany({});
    
        // Seed new cate data
        for (let cateItem of categories){
            const cate = new Category(cateItem)
            await cate.save()
        }
        console.log('Category info imported');
      } catch (error) {
        console.error(error);
        console.log('Category info import failure');
      }
}

async function clearAndSeedProduct(){
  try {
    // Clear existing shop data
    await Product.deleteMany({});

    // Seed new cate data
    for (let productItem of products){
        const product = new Product(productItem)
        await product.save()
    }
    console.log('Product info imported');
  } catch (error) {
    console.error(error);
    console.log('Product info import failure');
  }
}

async function clearAndSeedBlog(){
  try {
    // Clear existing shop data
    await Blog.deleteMany({});

    // Seed new cate data
    for (let blogItem of blogs){
        const blog = new Blog(blogItem)
        await blog.save()
    }
    console.log('Blog info imported');
  } catch (error) {
    console.error(error);
    console.log('Blog info import failure');
  }
}

clearAndSeedShop()
clearAndSeedCate()
clearAndSeedProduct()
clearAndSeedBlog()
