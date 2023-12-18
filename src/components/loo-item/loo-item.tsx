import { Loo } from "@/queries/generated";
import { FC } from "react";

interface Props {
  item: Loo;
}
export const LooItem: FC<Props> = ({ item }) => {
  return (
    <div key={item.id} className="p-4 max-w-sm">
      <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 className="text-white dark:text-white text-lg font-medium">
            {item.name}
          </h2>
        </div>
        <div className="flex flex-col">
          <p className="leading-relaxed text-base text-white dark:text-gray-300">
            Baby change: {item.babyChange ? "Yes" : "No"}
          </p>
        </div>
        <div className="flex flex-col">
          <p className="leading-relaxed text-base text-white dark:text-gray-300">
            Geo hash: {item.geohash}
          </p>
        </div>
      </div>
    </div>
  );
};
