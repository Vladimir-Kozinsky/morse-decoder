const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let resultChars = ''
    let arr = Object.entries(MORSE_TABLE)
 
    let str = ''

    const numbersToSymbols = (el) => {
        let codedSymbolsStr = ''
        if (el == '10') {
            codedSymbolsStr += '.'
        } else if (el == '11') {
            codedSymbolsStr += '-'
        }
        return codedSymbolsStr
    }

    const symbollToChar = (char) => {
        let coded;
        arr.find(el => {
            if (el[0] === char) {
                coded = el[01]
            }
        })
        return coded
    }

    for (let i = 0; i < expr.length; i++) {
        const el = expr[i];
        if (i > 0 && i % 10 === 0) {
            str += ' '
            str += el

        } else {
            str += el
        }
    }

    let charsArr = str.split(' ')

    let clearArr = charsArr.map(item => {

        if (item == '**********') {
            return ' '
        } else {
            item = +item
            return item.toString()
        }
    })

    clearArr.forEach(el => {
        if (el.length == 2) {
            resultChars += symbollToChar(numbersToSymbols(el))
        } else if (el == ' ') {
            resultChars += el
        } else {
            let strWithSpase = ''
            for (let e = 0; e < el.length; e++) {
                const elem = el[e];
                if (e > 0 && e % 2) {
                    strWithSpase += elem + ' '
                } else {
                    strWithSpase += elem
                }
            }



            let arrNumbers = strWithSpase.split(' ')
            let strSymbols = ''
            for (let w = 0; w < arrNumbers.length; w++) {
                strSymbols += numbersToSymbols(arrNumbers[w])
            }
            resultChars += symbollToChar(strSymbols)
        }
    });

    return resultChars
    // let codedStr = ''
    // let result = '';
    // let arr = Object.entries(MORSE_TABLE)

    // const codeChar = (char) => {
    //     let coded;
    //     arr.find(el => {
    //         if (el[1] === char) {
    //             coded = el[0]
    //         }
    //     })
    //     return coded
    // }

    // for (let i = 0; i < expr.length; i++) {
    //     const char = expr[i];
    //     let codedChar = codeChar(char)
    //     let numberStr = ''
    //     for (let n = 0; n < codedChar.length; n++) {
    //         const symb = codedChar[n];
    //         if (symb == '.') {
    //             numberStr += '10'
    //         } else {
    //             numberStr += '11'
    //         }
    //     }

    //     if (numberStr.length < 10) {
    //         let resultNumberStr = ''

    //         for (let e = 0; e < 10 - numberStr.length; e++) {
    //             resultNumberStr += '0'
    //         }
    //         codedStr = resultNumberStr + numberStr

    //     }
    //     result += codedStr


    // }
    // return result
}

module.exports = {
    decode
}