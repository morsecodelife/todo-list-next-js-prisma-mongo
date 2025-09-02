"use client";

import dayjs from "@/utils/dayjs";
import RemoveTodo from "./RemoveTodo";
import ToggleTodo from "./ToggleTodo";

interface TodoProps {
  todoId: string;
  title: string;
  completed: boolean;
  createdAt?: Date;
}

const Todo = ({ todoId, title, completed, createdAt }: TodoProps) => {
  const createdAtISO = createdAt ? createdAt.toISOString() : null;
  const relativeTime = createdAtISO ? dayjs(createdAtISO).fromNow() : "—";

  return (
    <div
      key={todoId}
      className={`${
        completed
          ? "bg-neutral-200 border-gray-400 opacity-45"
          : "bg-white border-gray-50 hover:-translate-y-1.5 hover:shadow-md transition-all duration-200 ease-in-out"
      } border p-4 rounded-2xl shadow-sm flex flex-col"`}
    >
      <div className="w-full">
        <div className="flex items-start gap-4">
          <div className="flex-1 min-w-0 flex items-center gap-2">
            <div className="shrink-0">
              <ToggleTodo completed={completed} todoId={todoId} />
            </div>

            <p
              className={`${completed ? "line-through italic" : ""}
                  flex-1 min-w-0 max-w-full
                  whitespace-normal break-words pl-4`}
            >
              {title}
            </p>
          </div>

          <div className={`${completed ? "hidden" : ""} shrink-0`}>
            <RemoveTodo todoId={todoId} />
          </div>
        </div>

        <div className="text-xs text-right text-gray-500 mt-2">
          {relativeTime}
        </div>
      </div>
    </div>
  );
};

export default Todo;
