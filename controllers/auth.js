const loginUser = (req, res, next) => {
    // Set up the headers
    const headers = {
        'Authorization': `Bearer fsduhfuhudhfuidfhuhduh`, // If you're using a Bearer token
    };
    res.status(200).json(headers);
    // res.send('Hello from login')
}

const accessContent = (req, res, next) => {
    // Set up the headers
    const headers = req.headers['authorization']
    console.log(headers);
    res.send('acces')
    // res.send('Hello from login')
}

module.exports = { loginUser, accessContent };