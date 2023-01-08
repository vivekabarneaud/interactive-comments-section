import { JSX } from "solid-js";

type DeleteButtonProps = {

}

function DeleteButton(props: DeleteButtonProps): JSX.Element {
    return (<button class="flex items-center justify-center gap-x-1 font-bold text-[#E15A58] text-xs">
        <img src="/assets/images/icon-delete.svg" alt="delete icon"/><span>Delete</span>
    </button>)
}

export default DeleteButton;