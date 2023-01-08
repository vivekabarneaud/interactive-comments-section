import { JSX } from "solid-js";

type ReplyButtonProps = {

}

function ReplyButton(props: ReplyButtonProps): JSX.Element {
    return (<button class="flex items-center justify-center gap-x-1 font-bold text-[#6864BD] text-xs">
        <img src="/assets/images/icon-reply.svg" alt="reply icon"/><span>Reply</span>
    </button>)
}

export default ReplyButton;