const mongoose = require ('mongoose');

const connectDB = async () => {
    try {
        
        await mongoose.connect('mongodb+srv://hadda:zXQJkqirLIlc3jux@cluster0.hcx8nwv.mongodb.net/?retryWrites=true&w=majority',
            
            
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        
        }); 
        console.log('Database Connection Success');
  
        }
        
    catch(err){
        console.log(err);
    }
    

    };

    module.exports = { connectDB };