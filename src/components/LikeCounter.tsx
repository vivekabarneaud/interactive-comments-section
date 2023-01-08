import { JSX, createSignal } from "solid-js";

type LikeCounterProps = {
    likes: number;

}

function LikeCounter(props: LikeCounterProps): JSX.Element {
    const [likes, setLikes] = createSignal<number>(props.likes);
    const [userInput, setUserInput] = createSignal<number>(0);

    const like = (): void => {
        setLikes(likes() + 1)
        setUserInput(userInput() + 1);
    }

    const dislike = (): void => {
        setLikes(likes() - 1);
        setUserInput(userInput() - 1);
    }

    return (<div class="flex justify-center items-center p-2 gap-x-2 rounded-lg bg-[#F1F4F9]">
        <button class="appearence-none text-sm text-[#C5C3E7] font-bold" disabled={userInput() >= 1} onClick={() => like()}>+</button>
        <span class="text-xs text-[#5F62A1] font-bold">{likes()}</span>
        <button class="appearence-none text-sm text-[#C5C3E7] font-bold" disabled={userInput() <= -1} onClick={() => dislike()}>-</button>
    </div>)
}

export default LikeCounter;