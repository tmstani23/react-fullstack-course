const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGO_URI
    },
    default: {
        SECRET: 'super_secret_password',
        DATABASE: 'mongodb://localhost:27017/bookshelf_db',
        TEST_DB_URI: 'mongodb+srv://tmstani23:bluebird123@cluster0.1e3jn.mongodb.net/bookshelf_db?retryWrites=true&w=majority'
    }
}

exports.get = function get(env) {
    return config[env] || config.default
}