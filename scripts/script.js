window.onload = () => {
    const inputTextarea = document.getElementById('input');
    const outputTextarea = document.getElementById('output');

    let positionCounter = 0;

    inputTextarea.addEventListener('input', () => {
    const inputText = inputTextarea.value;

    // Perform the transformation
    let modifiedText = inputText.replace(/@Position\((.*?)\)/g, () => {
        const newPosition = `@Position(${positionCounter++})`;
        return newPosition;
    });

        positionCounter = 0;

    // Update the output textarea
    outputTextarea.value = modifiedText;
    });
}