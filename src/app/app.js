// @flow

export function app() {
    const myApp = document.getElementById('app');
    if (myApp) {
        myApp.innerText = 'Hello, World!';
    }
}

export function flowtest(x: number) {
    if (x) {
        return x;
    }
    return 'default string';
}
