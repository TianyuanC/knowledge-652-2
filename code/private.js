class X {
    #foo;

    method() {
        console.log(this.#foo);
        this.#secretOp();
    }

    #secretOp() {
        console.log("secret")
    };
}

const x = new X();
x.#foo //invalid
x.#secretOp() //invalid