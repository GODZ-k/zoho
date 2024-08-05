import mongoose from 'mongoose'

const connectionString=`${process.env.CONNECTION_STRING}/${process.env.DATABASE_NAME}`

async function connectDb(){
    await mongoose.connect(connectionString)
    .then((response)=>{
        console.log(`Database is listning on host ${response.connection.host}`)
    })
    .catch((err)=>{
        console.log(`Error connecting the database ${err.msg}`)
    })
}


export default connectDb