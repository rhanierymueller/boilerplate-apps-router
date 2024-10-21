"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
function Home() {
    return (React.createElement("div", { className: "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" },
        React.createElement("main", { className: "flex flex-col gap-8 row-start-2 items-center sm:items-start" },
            React.createElement(image_1["default"], { className: "dark:invert", src: "https://nextjs.org/icons/next.svg", alt: "Next.js logo", width: 180, height: 38, priority: true }),
            React.createElement("ol", { className: "list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]" },
                React.createElement("li", { className: "mb-2" },
                    "Get started by editing",
                    ' ',
                    React.createElement("code", { className: "bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold" }, "src/app/page.tsx"),
                    "."),
                React.createElement("li", null, "Save and see your changes instantly.")),
            React.createElement("div", { className: "flex gap-4 items-center flex-col sm:flex-row" },
                React.createElement("a", { className: "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5", href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", target: "_blank", rel: "noopener noreferrer" },
                    React.createElement(image_1["default"], { className: "dark:invert", src: "https://nextjs.org/icons/vercel.svg", alt: "Vercel logomark", width: 20, height: 20 }),
                    "Deploy now"),
                React.createElement("a", { className: "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44", href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", target: "_blank", rel: "noopener noreferrer" }, "Read our docs"))),
        React.createElement("footer", { className: "row-start-3 flex gap-6 flex-wrap items-center justify-center" },
            React.createElement("a", { className: "flex items-center gap-2 hover:underline hover:underline-offset-4", href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", target: "_blank", rel: "noopener noreferrer" },
                React.createElement(image_1["default"], { "aria-hidden": true, src: "https://nextjs.org/icons/file.svg", alt: "File icon", width: 16, height: 16 }),
                "Learn"),
            React.createElement("a", { className: "flex items-center gap-2 hover:underline hover:underline-offset-4", href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", target: "_blank", rel: "noopener noreferrer" },
                React.createElement(image_1["default"], { "aria-hidden": true, src: "https://nextjs.org/icons/window.svg", alt: "Window icon", width: 16, height: 16 }),
                "Examples"),
            React.createElement("a", { className: "flex items-center gap-2 hover:underline hover:underline-offset-4", href: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", target: "_blank", rel: "noopener noreferrer" },
                React.createElement(image_1["default"], { "aria-hidden": true, src: "https://nextjs.org/icons/globe.svg", alt: "Globe icon", width: 16, height: 16 }),
                "Go to nextjs.org \u2192"))));
}
exports["default"] = Home;
