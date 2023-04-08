import  jwt from"jsonwebtoken";

export const  verify=(req, res, next)=> {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
    try {
        const user = jwt.verify(token, "kvnfvjnfvjfnvdkrvfdklvnf");
        next();
        return { status: 200, user };
    } catch (error) {
        console.log("you are not authorized");
        next();
        return res.sendStatus(403);
    }
}
export const verifyisAdmin = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
    try {
        const user = jwt.verify(token, "kvnfvjnfvjfnvdkrvfdklvnf");
        return { status: 200, user };
    } catch (error) {
        console.log("you are not authorized");
        return res.sendStatus(403);
    }
}


export const isAdmin = (req, res, next) => {
    const tokenStatus = verifyisAdmin(req) ;
    // console.log(tokenStatus);
    if (tokenStatus.status !== 200) return res.sendStatus(401);
    if (tokenStatus.user.admin) {
        next();
    }
    else {

       return  res.sendStatus(401);
    }
}