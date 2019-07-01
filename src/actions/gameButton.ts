export const gameButtonClick = (colour:string) => {
    return {
        type: 'gameButtonClick',
        colourClicked: colour
    }
}