import { JSX } from "solid-js";

type EditButtonProps = {

}

function EditButton(props: EditButtonProps): JSX.Element {
    return (<button class="flex items-center justify-center gap-x-1 font-bold text-[#6864BD] text-xs">
        <img src="/assets/images/icon-edit.svg" alt="edit icon"/><span>Edit</span>
    </button>)
}

export default EditButton;