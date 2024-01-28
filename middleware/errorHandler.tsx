
const catchAsync = (fn: Function) => {
    return (req: Request, res: Response, next: Function) => {
        fn(req, res, next).catch(next);
    };
};
export default catchAsync;
module.exports = {
    catchAsync,
}