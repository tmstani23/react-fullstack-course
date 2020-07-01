const config = {
    production: {
        SECRET: process.env.SECRET,
        DATABASE: process.env.DB_URL
    },
    default: {
        SECRET: 'supersecret',
        DATABASE: 'mongodb://localhost:27017/AuthApp'
    }
}

exports.get = function get(env) {
    //if in production return the production object else the default
    return config[env] || config.default;
}