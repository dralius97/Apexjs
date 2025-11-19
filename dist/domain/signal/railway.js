export class Left extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.code = code;
        this.code = code;
    }
    isRight = false;
    isLeft = true;
}
export class Right {
    data;
    message;
    code;
    constructor(data, message, code = 200) {
        this.data = data;
        this.message = message;
        this.code = code;
        this.data = data;
    }
    isRight = true;
    isLeft = false;
}
export class HttpResultSuccess extends Right {
    constructor(data, message) {
        super(data, message, 200);
    }
}
export class HttpResultCreated extends Right {
    constructor(data, message) {
        super(data, message, 201);
    }
}
export class ResponseFromMethod extends Right {
    constructor(data) {
        super(data);
    }
}
//# sourceMappingURL=railway.js.map