export default () => {
    const views = `
        <h1>Hello World</h1>
        <p>hellow world with javascript router.</p>
    `;

    const divElement = document.createElement('div');
    divElement.classList = 'text-white';
    divElement.innerHTML = views;

    return divElement;
}