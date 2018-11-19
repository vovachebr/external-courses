function scanDOM(){
    const items = document.body.getElementsByTagName("*");
    let resultTags = {};
    let resultClasses = {};
    const text = document.body.innerText || document.body.textContent;
    resultTexts = text.split(/\s+/g).length;
    for (let i = 0; i < items.length; i++) {
        const currentNode = items[i];
        if(currentNode.classList.length>0);
            currentNode.classList.forEach((cl)=>resultClasses[cl] ? resultClasses[cl]+1 : 1);

            resultTags[currentNode.tagName] = resultTags[currentNode.tagName] ? resultTags[currentNode.tagName]+1 : 1;
    }
    
    for (const key in resultTags) {
        console.log(`Тегов ${key.toLowerCase()}: ${resultTags[key]}`)
    }

    console.log(`Текстовых узлов: ${resultTexts}`);

    for (const key in resultClasses) {
        console.log(`Элементов с классом ${key}: ${resultClasses[key]}`)
    }
}

scanDOM();