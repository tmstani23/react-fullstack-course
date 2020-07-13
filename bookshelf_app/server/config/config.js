const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGO_URI
    },
    default: {
        SECRET: 'super_secret_password',
        DATABASE: 'mongodb://localhost:27017/bookshelf_db'
    }
}

exports.get = function get(env) {
    return config[env] || config.default
}