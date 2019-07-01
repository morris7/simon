export const startGame = () => {
    return {
        type: 'startGame'
    }
}

export const restartGame = (colour:string) => {
    return {
        type: 'restartGame'
    }
}