function sequencia() {
    const sequenceToShow = [
        'seq1', 'seq2', 'seq3', 'seq4', 'seq5', 'seq6', 'seq7', 'seq8'
    ]

    const sequence = ['opt1', 'opt2', 'opt3', 'opt4', 'opt1', 'opt4', 'opt2', 'opt1']
    let currentStep = 0
    let currentDisplayIndex = 0

    let optionElements = document.querySelectorAll('.alter-config')

    optionElements.forEach((option, index) => {
        option.addEventListener('click', () => {
            if (sequence[currentStep] === option.id) {
                currentStep++

                if (currentDisplayIndex < sequenceToShow.length) {
                    const nextSeqToShow = sequenceToShow[currentDisplayIndex]
                    document.getElementById(nextSeqToShow).style.display = 'flex'
                    currentDisplayIndex++
                }

                if (currentStep === sequence.length) {
                    window.location.href = '../q32/q32.html'
                }
            } else {
                window.location.href = '../fail/fail.html'
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', sequencia)