class ProxySubject {
    request(): void {
    }
}

class RealSubject extends ProxySubject {
    // Override the base method
    override request(): void {
        console.log("Real request executed");
    }
}

class SubjectProxy extends ProxySubject {
    private realSubject: RealSubject;

    constructor() {
        super(); // Required when using 'extends'
        this.realSubject = new RealSubject();
    }

    override request(): void {
        console.log("Proxy: Checking access before real request...");
        this.realSubject.request();
        console.log("Proxy: Logging request completion.");
    }
}

// Usage
const proxy = new SubjectProxy();
proxy.request();