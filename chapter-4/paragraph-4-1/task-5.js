function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof key == "number") {
            obj[key] *= 2;
        }
    }
}