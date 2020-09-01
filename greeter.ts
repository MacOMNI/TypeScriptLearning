function greeter(params:string) {
    return "hello, " + params;
}
let user = "Jane User!"
document.body.innerHTML = greeter(user)