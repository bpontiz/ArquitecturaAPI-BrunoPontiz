class CustomError {
    constructor (state, description, details) {
        this.state = state
        this.description = description
        this.details = details
    }
};

export default CustomError;