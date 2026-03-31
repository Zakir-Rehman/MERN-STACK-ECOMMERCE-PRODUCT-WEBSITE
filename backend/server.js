let express = require('express');
let mongoose = require('mongoose');
let app = express();
let port = '5050';
const cors = require('cors');
const path = require('path');
let Model = require('./dataCardSchema')
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(cors());
main().then(res => console.log('MongoDb Running.....')).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Nextfly');
}
app.get('/data', async (req, res) => {
  let DBdata = await Model.find({})
  console.log('Fetched Data:', DBdata);
  res.json(DBdata)
  let addData = async () => {
    let insertNewData = await Model.insertOne({
      img: 'https://i.ebayimg.com/images/g/1EgAAOSwvk5mhIjo/s-l500.webp',
      title: 'Fila Axilus 2 Energized Tennis Mens White',
      realPrice: '$34.99',
      discountPrice: '$40.99'
    })
    await insertNewData.save()
    console.log(insertNewData)
  }
  // addData()

})
app.get("/", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Database error", details: err });
  }
});

app.get('/shopPage', (req, res) => {
  res.render('shopPage')
})
app.post('/shopData', async (req, res) => {
  let { url, title, realPrice, discountPrice } = req.body;
  let insert = await Model.insertOne({
    img: url,
    title: title,
    realPrice: realPrice,
    discountPrice: discountPrice
  })
  await insert.save()
  console.log(insert)
  res.send('done')
})
app.get('/insertData', async (req, res) => {
  try {
    //        const productsBaby = [
    //   {
    //     img: "https://m.media-amazon.com/images/I/71kbIc00mvL._AC_UL320_.jpg",
    //     title: "Soft Baby Onesie - White Cotton",
    //     realPrice: "$24.99",
    //     discountPrice: "$19.99",
    //     category:'baby'
    //   },
    //   {
    //     img: "https://m.media-amazon.com/images/I/61kqhTCKtgL._AC_UL320_.jpg",
    //     title: "Cute Baby Romper - Blue Edition",
    //     realPrice: "$29.99",
    //     discountPrice: "$23.49",
    //     category:'baby'
    //   },
    //   {
    //     img: "https://m.media-amazon.com/images/I/510fvvcNryL._AC_UL320_.jpg",
    //     title: "Floral Baby Dress - Summer Style",
    //     realPrice: "$34.99",
    //     discountPrice: "$27.99",
    //     category:'baby'
    //   },
    //   {
    //     img: "https://m.media-amazon.com/images/I/51vf3APGK6L._AC_UL320_.jpg",
    //     title: "Baby Pajama Set - Soft Cotton",
    //     realPrice: "$32.00",
    //     discountPrice: "$26.50",
    //     category:'baby'
    //   },
    //   {
    //     img: "https://m.media-amazon.com/images/I/71kbIc00mvL._AC_UL320_.jpg",
    //     title: "Baby Winter Jacket - Pink Fleece",
    //     realPrice: "$49.99",
    //     discountPrice: "$39.99",
    //     category:'baby'
    //   },
    //   {
    //     img: "https://m.media-amazon.com/images/I/61NWoisRjRL._AC_UL320_.jpg",
    //     title: "Infant Hoodie - Cozy Gray",
    //     realPrice: "$28.99",
    //     discountPrice: "$22.49",
    //     category:'baby'
    //   },
    //   {
    //     img: "https://m.media-amazon.com/images/I/611eRjfgeVL._AC_UL320_.jpg",
    //     title: "Baby Cap and Mittens Set",
    //     realPrice: "$19.00",
    //     discountPrice: "$15.50",
    //     category:'baby'
    //   },
    //   {
    //     img: "https://m.media-amazon.com/images/I/61a3hxsS9FL._AC_UL320_.jpg",
    //     title: "Baby Socks - 5 Pair Pack",
    //     realPrice: "$14.99",
    //     discountPrice: "$9.99",
    //     category:'baby'
    //   },
    //   {
    //     img: "https://m.media-amazon.com/images/I/71qqsb-nlKL._AC_UL320_.jpg",
    //     title: "Adorable Baby Bibs (Pack of 3)",
    //     realPrice: "$17.49",
    //     discountPrice: "$13.99",
    //     category:'baby'
    //   },
    //   {
    //     img: "https://m.media-amazon.com/images/I/61NWoisRjRL._AC_UL320_.jpg",
    //     title: "Baby Blanket - Warm & Soft",
    //     realPrice: "$44.99",
    //     discountPrice: "$36.99",
    //     category:'baby'
    //   },
    //   {
    //     img: "https://m.media-amazon.com/images/I/61mUBOeUG7L._AC_UL320_.jpg",
    //     title: "Baby Sleep Suit - Animal Print",
    //     realPrice: "$33.00",
    //     discountPrice: "$25.00",
    //     category:'baby'
    //   },
    //   {
    //     img: "https://m.media-amazon.com/images/I/51V1JGs0tzL._AC_UL320_.jpg",
    //     title: "Baby Dress - Polka Dot Pink",
    //     realPrice: "$31.99",
    //     discountPrice: "$24.99",
    //     category:'baby'
    //   },
    // ];
    const productsBaba = [
      {
        img: "https://m.media-amazon.com/images/I/31q5g5eTZOL._AC_UL320_.jpg",
        title: "Casual Baba T-Shirt - Cotton Fit",
        realPrice: "$39.99",
        discountPrice: "$29.99",
        category: "baba"
      },
      {
        img: "https://m.media-amazon.com/images/I/71YDJslxnML._AC_UL320_.jpg",
        title: "Formal Baba Shirt - Classic Blue",
        realPrice: "$49.99",
        discountPrice: "$39.99",
        category: "baba"
      },
      {
        img: "https://m.media-amazon.com/images/I/41j4P51+YrL._AC_UL320_.jpg",
        title: "Baba Hoodie - Warm & Stylish",
        realPrice: "$59.99",
        discountPrice: "$47.49",
        category: "baba"
      },
      {
        img: "https://m.media-amazon.com/images/I/61shsSjkQwL._AC_UL320_.jpg",
        title: "Baba Denim Jeans - Slim Fit",
        realPrice: "$69.99",
        discountPrice: "$54.99",
        category: "baba"
      },
      {
        img: "https://m.media-amazon.com/images/I/41HIf8BIwXL._AC_UL320_.jpg",
        title: "Baba Winter Jacket - Black Fleece",
        realPrice: "$79.99",
        discountPrice: "$64.99",
        category: "baba"
      },
      {
        img: "https://m.media-amazon.com/images/I/71hKxgSVr3L._AC_UL320_.jpg",
        title: "Baba Polo Shirt - Summer Style",
        realPrice: "$44.99",
        discountPrice: "$34.99",
        category: "baba"
      },
      {
        img: "https://m.media-amazon.com/images/I/41FEqLQZfDL._AC_UL320_.jpg",
        title: "Baba Shorts - Daily Comfort",
        realPrice: "$29.99",
        discountPrice: "$23.99",
        category: "baba"
      },
      {
        img: "https://m.media-amazon.com/images/I/61qnxyqntpL._AC_UL320_.jpg",
        title: "Baba Sweatpants - Sport Edition",
        realPrice: "$34.99",
        discountPrice: "$26.49",
        category: "baba"
      },
      {
        img: "https://m.media-amazon.com/images/I/61wiJY4Am-L._AC_UL320_.jpg",
        title: "Baba Belt - Leather Brown",
        realPrice: "$24.99",
        discountPrice: "$18.99",
        category: "baba"
      },
      {
        img: "https://m.media-amazon.com/images/I/61u+5eY7fsL._AC_UL320_.jpg",
        title: "Baba Cap - Classic Black",
        realPrice: "$19.99",
        discountPrice: "$14.49",
        category: "baba"
      },
      {
        img: "https://m.media-amazon.com/images/I/41f-G1hrwsL._AC_UL320_.jpg",
        title: "Baba Shoes - Daily Sneakers",
        realPrice: "$89.99",
        discountPrice: "$74.99",
        category: "baba"
      },
      {
        img: "https://m.media-amazon.com/images/I/61NWoisRjRL._AC_UL640_QL65_.jpg",
        title: "Baba Watch - Silver Classic",
        realPrice: "$99.00",
        discountPrice: "$82.00",
        category: "baba"
      }
    ];

    // Insert data
    await Model.insertMany(productsBaba);
    // await Model.deleteMany({ category: "baba" });

    res.send("✅ 10 LCD products added successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error adding products.");
  }
});
app.get('/favourited',(req,res)=>{
  res.send('done')
})
app.listen(port, () => {
  console.log(`Backend is Running on ${port}`)
})