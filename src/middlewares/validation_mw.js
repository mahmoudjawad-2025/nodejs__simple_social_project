import GlobalError from "../utils/global_error.js";

const validation = (schema) => {
    return (req, res, next) => {
        const inputData = { ...req.body, ...req.params };
        const validateResult = schema.validate(inputData, { abortEarly: false });
        
        if (validateResult?.error) {
            return next(new GlobalError(validateResult.error, 400));
        }
        
        next();
    };
};

export default validation;