import { JSX } from "solid-js";

type LikeCounterProps = {
    likes: number;

}

function LikeCounter(props: LikeCounterProps): JSX.Element {
    return (<div class="flex justify-center items-center p-2 gap-x-2 rounded-lg bg-[#F1F4F9]">
        <button class="appearence-none text-sm text-[#C5C3E7] font-bold">+</button>
        <span class="text-xs text-[#5F62A1] font-bold">{props.likes}</span>
        <button class="appearence-none text-sm text-[#C5C3E7] font-bold">-</button>
    </div>)
}

export default LikeCounter;