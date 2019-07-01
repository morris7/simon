export interface BoardProps {
    score?: any,
    action?: any,
    sequence?: any,
    level?: any,
    gameOver?: boolean
};

export interface GameState {
    score: number,
    sequence: any,
    level: number,
    currentSequence: number,
    gameOver: boolean
}