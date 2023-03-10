import { For } from "solid-js";
import UserComment from "~/components/UserComment";
import NewCommentSection from "~/components/NewCommentSection";
import { currentUser, userComments } from "../data/data";

export default function Home() {

  return (
    <div class="flex justify-center items-center min-h-screen w-screen bg-[#F5F6FA] relative">
      
      <div class="flex flex-col w-[90%] gap-y-3">
        <For each={userComments}>
          {userComment => <UserComment comment={userComment} />}
        </For>
      </div>

      <div class="absolute flex justify-center inset-x-0 bottom-0 px-2 ">
        <NewCommentSection user={currentUser} />
      </div>

    </div>
  );
}
