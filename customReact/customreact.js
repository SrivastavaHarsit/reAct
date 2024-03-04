function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);

    // domElement.innerHTML = reactElement.children;

    // domElement.setAttribute('href', reactElement.props.href);
    
    // domElement.setAttribute('target', reactElement.props.target);

    // container.appendChild(domElement);

    /*doosra tareeka bas swtAttributes par loop laga do kyuki bahut saara attributes ho skta hai n*/

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(const prop in reactElement.props) {
        if(prop === 'children') continue; // props me children na ho
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
};

// react element ko aise dekhta hai jo hame render karana hai
// hamne custom react element type banaya but <a> tag already hai
// but ham jsx file me aise ni banate hai ham normal function me return karte hai 
// cd 01vitereact me app.jsx me App() function ko dekho
// react behind the scenes us cheez ko aise parse kar ke dekhta hai

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

// React ke andar aise element ni banate/banta halka fulka unka rule alag hai
/*kuch aisa hota hai...*/ 
// const anotherUser = "chai aur react"

// const reactElement = React.createElement(
//     'a',
//     {href: 'https://google.com',target: '_blank' },
//     'click me to visit google',
//     anotherElement
// )

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
