//? Dependencies
require('dotenv').config()

const config = {
    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_ENV || 'development', //? Desarrollo, Testing, Produccion
    jwtSecret: process.env.JWT_SECRET || 'academlo', // Tuve que colocar el key explicitamente porque me arrojaba este error y no supe como resolverlo :c 'JwtStrategy requires a secret or key'
    db: {
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'root',
        dbName: process.env.DB_NAME
    }

}

module.exports = config