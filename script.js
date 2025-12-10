function translateText() {
    let text = document.getElementById("inputText").value;
    let source = document.getElementById("sourceLang").value;
    let target = document.getElementById("targetLang").value;

    const url = "https://deep-translate1.p.rapidapi.com/language/translate/v2";

    const data = {
        q: text,
        source: source,
        target: target
    };

    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": "c1fa5676b7msh2bb23541ee41f87p12b9fejsn4d00eb784078",  
            "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById("outputText").value =
            result.data.translations.translatedText[0];
    })
    .catch(error => console.error(error));
}

function copyText() {
    let output = document.getElementById("outputText");
    output.select();
    document.execCommand("copy");
    alert("Copied!");
}

