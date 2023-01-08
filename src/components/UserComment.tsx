import { JSX, Show, For, createSignal } from "solid-js";
import { CommentType, currentUser } from "~/data/data";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import LikeCounter from "./LikeCounter";
import ReplyButton from "./ReplyButton";
import DeleteModal from "./DeleteModal";

type UserCommentProps = {
    comment: CommentType;
}

function UserComment(props: UserCommentProps): JSX.Element {
    const [showModal, setShowModal] = createSignal<boolean>(false);

    const handleDeleteComment = () => {
        console.log("handle delete comment ", props.comment.id);
    }

    return (<div class="flex flex-col gap-y-3">
        <div class="flex flex-col justify-between bg-white rounded-lg p-4">
            
        <div class="flex flex-col gap-y-3">
            <div class="flex gap-x-4">
                <img
                    src={"/assets/images/avatars/"+props.comment.user.image.png}
                    alt={"profile pic "+props.comment.user.username}
                    class="h-6 w-6"
                />
                <span class="text-xs font-bold text-[#495159]">{props.comment.user.username}</span>
                <span class="text-xs text-gray-500">{props.comment.createdAt}</span>
            </div>
            <p class="text-xs text-gray-500">
                {props.comment.content}
            </p>
            <div class="flex items-center justify-between">
                <LikeCounter likes={props.comment.score} />
                <div class="flex items-center gap-x-3">
                    <Show when={props.comment.user.username === currentUser.username} fallback={<ReplyButton />}>
                        <DeleteButton commentId={props.comment.id} onClick={() => setShowModal(true)} />
                        <EditButton />
                    </Show>
                </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col border-l-[2px] border-gray-200 pl-3">
        <For each={props.comment.replies} >
            {reply => <UserComment comment={reply} />}
        </For>
    </div>
        <Show when={showModal()}>
            <DeleteModal
                commentId={props.comment.id}
                onClose={() => setShowModal(false)}
                handleDeleteComment={handleDeleteComment}
            />
        </Show>
    </div>
    )
}

export default UserComment;