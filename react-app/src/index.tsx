import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

type SquareValue = 'X' | 'O' | null;
interface Props {
  value: SquareValue;
  squares: Array<SquareValue>;
}
interface State {
  value: SquareValue;
  squares: Array<SquareValue>;
  history: Array<{ squares: Array<SquareValue> }>;
  stepNumber: number;
  xIsNext: boolean;
}

type SquareProps = Pick<Props, 'value'> & {
  onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  isWin: boolean;
};

function Square(props: SquareProps) {
  return (
    <button
      className={`square ${props.isWin ? 'win' : ''}`}
      onClick={props.onClick}
      data-cy="square"
    >
      {props.value}
    </button>
  );
}

type BoardProps = Pick<Props, 'squares'> & {
  onClick(i: number): void;
};
type BoardState = State;

class Board extends React.Component<BoardProps, BoardState> {
  isWinSquare(i: number): boolean {
    const [, winLine] = calculateWinner(this.props.squares);
    return winLine.includes(i);
  }

  renderSquare(i: number): JSX.Element {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        isWin={this.isWinSquare(i)}
      />
    );
  }

  render(): JSX.Element {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

type GameProps = Partial<Props>;
type GameState = Pick<State, 'history' | 'stepNumber' | 'xIsNext'>;

class Game extends React.Component<GameProps, GameState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i: number): void {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares)[0] || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render(): JSX.Element {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const [winner] = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    let isGameOver = false;
    if (winner) {
      status = 'Winner: ' + winner;
      isGameOver = true;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div className={isGameOver ? 'win' : ''} data-cy="status">
            {status}
          </div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as Element
);
root.render(<Game />);

function calculateWinner(
  squares: State['squares']
): [SquareValue, Array<number>] {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }
  return [null, [-1]];
}
