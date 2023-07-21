model er age [pre post methods] declear kora lage


 const result = await Product.find({ $or: [{ quantity: 200000000000 }, { price: { $gt: 100 } }] });
 const result = await Product.find({status:{$ne:"out of Stock"}});
 const result = await Product.find({ quantity:{$gt:100}});
 const result = await Product.find({ name:{$in:["Chal","Cini","Milk"]}});

                      <!-- !   Projection in Mongoose -->
put the filds names one after one without comma (,) after filtering
Example= await Product.find({ name:{$in:["Chal","Cini","Milk"]}},"name price status");

If any property we dont want in reselt then just put - before the name
Example= await Product.find({ name:{$in:["Chal","Cini","Milk"]}},"name price status");


const result = await Product.find({ name: { $in: ["Chal", "Cini", "Milk"] } }, "-discription -_id");
const result = await Product.find({ name: { $in: ["Chal", "Cini", "Milk"] } }).select({name :1});

                    <!-- ! Get Data by where in mongoose -->

Example= await Product.where("name").equals(/\w/).where("price").equals(100);

 const result = await Product.where("name").equals(/\w/).where("price").equals(100);

const result = await Product.find({ $or: [{ quantity: 200000000000 }, { price: { $gt: 100 } }] });
const result = await Product.find({status:{$ne:"out of Stock"}});
const result = await Product.find({ quantity:{$gt:100}});
const result = await Product.find({ name:{$in:["Chal","Cini","Milk"]}});

