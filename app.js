let bold = document.getElementById('bold')
let italic = document.getElementById('italic')
let underline = document.getElementById('underline')
let teaxtarea = document.getElementById('textarea')
let font = document.getElementById('fontfamily')
let find = document.getElementById('find')
let display = document.getElementById('display')
let replace = document.getElementById('replace')
var selectedText = ''


textarea.onselect = function() {
        var selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
        console.log(typeof selectedText);
        let strToElement = document.getElementById('faltu').innerText = selectedText
        console.log(strToElement);
        bold.addEventListener('click', () => {
            teaxtarea.style.fontWeight = 'bolder'
        })
        italic.addEventListener('click', () => {
            teaxtarea.style.fontStyle = 'italic'
        })
        underline.addEventListener('click', () => {
            teaxtarea.style.textDecoration = 'underline'
        })
        font.addEventListener('click' , () => {
            let select = font.value
            textarea.style.fontFamily = select
        })
        find.addEventListener('click', () => {
            let values = prompt('Enter a wrod to find').toLowerCase()
            let count = 0
            let text = textarea.value.toLowerCase()
            for (let i = 0; i < text.length; i++) {
                if (text.substring(i, i + values.length) == `${values}`) {
                    count++
                }
                display.innerText = `The word you find is ${count} times`
            }
        })
        replace.addEventListener('click', () => {
            let values1 = prompt('Enter a word to replace').toLowerCase()
            let repalceWord = prompt('Enter what word you want to replace').toLowerCase()
            let text = textarea.value.toLowerCase()
            let ask = prompt(`If you want to replace all type 'Yes' Otherwise type 'No'`)
           if (ask.toLowerCase() == 'yes') {
            let repalcedWord = text.replaceAll(values1,repalceWord)
            textarea.value = repalcedWord
           }else{
               let repalcedWord = text.replace(values1,repalceWord)
               textarea.value = repalcedWord
           }
        })

}