//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Async Handler

export const asyncHandler = (func) => {
    return async (req, res, next) => {

        // catch errors and forward to global handler
        try {
            return await func(req, res, next)
        } catch (error) {
            return res.status(500).json({ message: "plz" })
        }
    }
}
export default asyncHandler;