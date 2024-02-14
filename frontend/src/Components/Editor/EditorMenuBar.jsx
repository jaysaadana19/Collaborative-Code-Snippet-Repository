import { menuBarFunctions } from "@/lib/data";

const EditorMenubar = ({ editor }) => {
  return (
    <>
      <div className="flex flex-wrap rounded-lg gap-2 p-2 -mt-1 sticky w-full  -top-1 bg-white z-10">
        {menuBarFunctions.length > 0 &&
          menuBarFunctions.map((menu, idx) => (
            <button
              key={menu.title + idx}
              role="button"
              onClick={(e) => {
                e.preventDefault();
                menu.onFunction();
                console.log("cick");
              }}
              disabled={!menu.offFunction}
              className={
                editor.isActive(menu.title, menu.attribute)
                  ? "is-active rounded-sm p-0.5 hover:bg-sky-400 hover:text-white"
                  : "rounded-sm p-0.5 hover:bg-blue-100 hover:text-black"
              }
            >
              <menu.icon className="w-3 h-3 sm:h-4 sm:w-4" />
            </button>
          ))}
      </div>
    </>
  );
};

export default EditorMenubar;
