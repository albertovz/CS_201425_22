export function success (req, res, msg, status) {

    let statusCode = status || 200;
    let statusMsg = msg || '';
    let error = false;

    res.status(status).send({
        error,
        statusCode,
        statusMsg
    });

}