var jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    if (!req.headers['authorization']) return res.status(401).json({ error: 'Token de autorização não enviado.' })
    const token = req.headers['authorization']
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json(err)
        req.userId = decoded.id
        next()
    })
}

module.exports = { verifyJWT }
