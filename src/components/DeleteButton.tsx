import { JSX } from "solid-js";

type DeleteButtonProps = {
    commentId: number;
    onClick: () => void;
}

function DeleteButton(props: DeleteButtonProps): JSX.Element {

    return (<button
        class="flex items-center justify-center gap-x-1 font-bold text-[#E15A58] text-xs"
        onClick={() => props.onClick()}
    >
        <img src="/assets/images/icon-delete.svg" alt="delete icon"/><span>Delete</span>
    </button>)
}

export default DeleteButton;