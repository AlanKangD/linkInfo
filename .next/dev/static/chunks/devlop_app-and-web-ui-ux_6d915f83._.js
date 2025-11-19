(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/devlop/app-and-web-ui-ux/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/devlop/app-and-web-ui-ux/components/bottom-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNav",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
'use client';
;
;
;
function BottomNav({ activeTab, onTabChange }) {
    const tabs = [
        // { id: 'home' as Tab, label: '홈', icon: Home },
        {
            id: 'jobs',
            label: '공고',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
        },
        {
            id: 'products',
            label: '상품',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"]
        },
        {
            id: 'favorites',
            label: '즐겨찾기',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
        },
        {
            id: 'notifications',
            label: '알림',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 bg-background border-t z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-around h-16 max-w-lg mx-auto",
            children: tabs.map((tab)=>{
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onTabChange(tab.id),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors", isActive ? "text-primary" : "text-muted-foreground"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5", isActive && "fill-primary")
                        }, void 0, false, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/bottom-nav.tsx",
                            lineNumber: 38,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium",
                            children: tab.label
                        }, void 0, false, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/bottom-nav.tsx",
                            lineNumber: 39,
                            columnNumber: 15
                        }, this)
                    ]
                }, tab.id, true, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/bottom-nav.tsx",
                    lineNumber: 30,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/devlop/app-and-web-ui-ux/components/bottom-nav.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/bottom-nav.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = BottomNav;
var _c;
__turbopack_context__.k.register(_c, "BottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/devlop/app-and-web-ui-ux/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/devlop/app-and-web-ui-ux/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/devlop/app-and-web-ui-ux/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/devlop/app-and-web-ui-ux/components/job-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JobCard",
    ()=>JobCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/date-fns/locale/ko.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/school.js [app-client] (ecmascript) <export default as School>");
;
;
;
;
;
;
;
function JobCard({ job, isFavorited, onFavoriteToggle }) {
    const formatDate = (date)=>{
        if (!date) return '-';
        try {
            const dateObj = typeof date === 'string' ? new Date(date) : date;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(dateObj, 'yyyy.MM.dd', {
                locale: __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$date$2d$fns$2f$locale$2f$ko$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ko"]
            });
        } catch  {
            return date.toString();
        }
    };
    const getDaysUntilDeadline = (duedate)=>{
        if (!duedate) return null;
        try {
            // duedate가 "YYYY-MM-DD" 형식인지 확인
            const dateStr = duedate.includes('-') ? duedate : duedate;
            const deadline = new Date(dateStr);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            deadline.setHours(0, 0, 0, 0);
            const diffTime = deadline.getTime() - today.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays < 0) return '마감';
            if (diffDays === 0) return '오늘 마감';
            if (diffDays <= 3) return `D-${diffDays}`;
            return null;
        } catch  {
            return null;
        }
    };
    const deadlineBadge = getDaysUntilDeadline(job.duedate);
    const isNew = job.regdate && (()=>{
        try {
            const regDate = typeof job.regdate === 'string' ? new Date(job.regdate) : job.regdate;
            const today = new Date();
            const diffTime = today.getTime() - regDate.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 7;
        } catch  {
            return false;
        }
    })();
    const handleCardClick = ()=>{
        if (job.link) {
            window.open(job.link, '_blank', 'noopener,noreferrer');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: `hover:shadow-md transition-shadow ${job.link ? 'cursor-pointer' : ''}`,
        onClick: handleCardClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-4 space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-base leading-tight",
                                            children: job.title || '제목 없음'
                                        }, void 0, false, {
                                            fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            className: "bg-emerald-100 text-emerald-700 border-emerald-200 h-5 px-1.5 text-xs",
                                            children: "신규"
                                        }, void 0, false, {
                                            fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this),
                                        deadlineBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            className: `h-5 px-1.5 text-xs ${deadlineBadge === '마감' || deadlineBadge === '오늘 마감' ? 'bg-red-100 text-red-700 border-red-200' : 'bg-orange-100 text-orange-700 border-orange-200'}`,
                                            children: deadlineBadge
                                        }, void 0, false, {
                                            fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__["School"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: job.school || '학교명 없음'
                                        }, void 0, false, {
                                            fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                onFavoriteToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "h-8 w-8 shrink-0",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        onFavoriteToggle(job.id);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: `h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                job.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "h-8 w-8 shrink-0",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        window.open(job.link, '_blank', 'noopener,noreferrer');
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "등록일: ",
                                        formatDate(job.regdate)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        job.duedate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "마감일: ",
                                        formatDate(job.duedate)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/job-card.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c = JobCard;
var _c;
__turbopack_context__.k.register(_c, "JobCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/devlop/app-and-web-ui-ux/components/product-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
;
;
;
function ProductCard({ name, price, rating, image, isNew, isPopular, isFavorited }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "overflow-hidden hover:shadow-md transition-shadow cursor-pointer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-square bg-muted",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: image || "/placeholder.svg",
                            alt: name,
                            fill: true,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            className: "absolute top-2 right-2 bg-emerald-500 text-white border-0",
                            children: "NEW"
                        }, void 0, false, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this),
                        isPopular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                            className: "absolute top-2 right-2 bg-orange-500 text-white border-0",
                            children: "인기"
                        }, void 0, false, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "absolute top-2 left-2 h-8 w-8 bg-white/90 hover:bg-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: `h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-medium text-sm leading-tight line-clamp-2",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-base",
                                    children: price
                                }, void 0, false, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "h-3 w-3 fill-yellow-400 text-yellow-400"
                                        }, void 0, false, {
                                            fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium",
                                            children: rating
                                        }, void 0, false, {
                                            fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/product-card.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FavoritesScreen",
    ()=>FavoritesScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$job$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/job-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/product-card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function FavoritesScreen() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('jobs');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "px-4 py-6 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold",
                        children: "즐겨찾기"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        children: "편집"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 border-b",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('jobs'),
                        className: `flex-1 pb-3 text-sm font-medium transition-colors relative ${activeTab === 'jobs' ? 'text-primary' : 'text-muted-foreground'}`,
                        children: [
                            "공고 12",
                            activeTab === 'jobs' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                            }, void 0, false, {
                                fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('products'),
                        className: `flex-1 pb-3 text-sm font-medium transition-colors relative ${activeTab === 'products' ? 'text-primary' : 'text-muted-foreground'}`,
                        children: [
                            "상품 5",
                            activeTab === 'products' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                            }, void 0, false, {
                                fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            activeTab === 'jobs' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$job$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JobCard"], {
                        title: "시니어 프론트엔드 개발자",
                        company: "네이버",
                        location: "판교",
                        experience: "경력 5년 이상",
                        salary: "6000-8000만원",
                        tags: [
                            'React',
                            'TypeScript',
                            'Next.js'
                        ],
                        views: 1234,
                        likes: 234,
                        deadline: "D-3",
                        isFavorited: true
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$job$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JobCard"], {
                        title: "백엔드 개발자",
                        company: "카카오",
                        location: "판교",
                        experience: "경력 3년 이상",
                        salary: "5000-7000만원",
                        tags: [
                            'Node.js',
                            'Python',
                            'AWS'
                        ],
                        views: 890,
                        likes: 156,
                        deadline: "D-7",
                        isFavorited: true
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                        name: "맥북 프로 M3 Max",
                        price: "350만원",
                        rating: 4.8,
                        image: "/macbook-pro-on-desk.png",
                        isFavorited: true
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                        name: "허먼밀러 에어론",
                        price: "189만원",
                        rating: 4.9,
                        image: "/herman-miller-aeron.png",
                        isFavorited: true
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(FavoritesScreen, "6rIxKkReyMFc3ShmDXljHDX6rxE=");
_c = FavoritesScreen;
var _c;
__turbopack_context__.k.register(_c, "FavoritesScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/devlop/app-and-web-ui-ux/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JobsScreen",
    ()=>JobsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$job$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/job-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function JobsScreen() {
    _s();
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('new');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [jobs, setJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const categories = [
        '전체',
        '정부 지원금 공고',
        '교사 채용 공고'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobsScreen.useEffect": ()=>{
            const fetchJobs = {
                "JobsScreen.useEffect.fetchJobs": async ()=>{
                    try {
                        setLoading(true);
                        const response = await fetch('/api/jobs');
                        if (!response.ok) {
                            throw new Error('데이터를 가져오는데 실패했습니다.');
                        }
                        const data = await response.json();
                        setJobs(data);
                    } catch (err) {
                        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
                        console.error('Error fetching jobs:', err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["JobsScreen.useEffect.fetchJobs"];
            fetchJobs();
        }
    }["JobsScreen.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "px-4 py-6 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        placeholder: "직무, 회사명으로 검색...",
                        className: "pl-10 pr-12 h-12 rounded-xl"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "absolute right-1 top-1/2 -translate-y-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 overflow-x-auto pb-2 scrollbar-hide",
                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: category === cat.toLowerCase() ? 'default' : 'outline',
                        className: "px-4 py-2 cursor-pointer whitespace-nowrap",
                        onClick: ()=>setCategory(cat.toLowerCase()),
                        children: cat
                    }, cat, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: sortBy === 'new' ? 'default' : 'outline',
                        size: "sm",
                        onClick: ()=>setSortBy('new'),
                        children: "신규순"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: sortBy === 'popular' ? 'default' : 'outline',
                        size: "sm",
                        onClick: ()=>setSortBy('popular'),
                        children: "인기순"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: sortBy === 'deadline' ? 'default' : 'outline',
                        size: "sm",
                        onClick: ()=>setSortBy('deadline'),
                        children: "마감임박"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "데이터를 불러오는 중..."
                }, void 0, false, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-destructive",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this) : jobs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground",
                    children: "등록된 공고가 없습니다."
                }, void 0, false, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: jobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$job$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JobCard"], {
                        job: job
                    }, job.id, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                        lineNumber: 113,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(JobsScreen, "uej6f1kqXIxI5jfV2FTer/PxTHo=");
_c = JobsScreen;
var _c;
__turbopack_context__.k.register(_c, "JobsScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationsScreen",
    ()=>NotificationsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellIcon$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as BellIcon>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function NotificationsScreen() {
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const notifications = [
        {
            id: '1',
            type: 'job',
            title: '새로운 공고가 등록되었어요',
            message: '시니어 프론트엔드 - 네이버',
            time: '10분 전',
            isRead: false
        },
        {
            id: '2',
            type: 'job',
            title: '즐겨찾기한 공고가 마감 임박',
            message: '백엔드 개발자 - 카카오',
            time: '2시간 전',
            isRead: false
        },
        {
            id: '3',
            type: 'product',
            title: '추천 상품 할인 이벤트',
            message: '맥북 프로 15% 할인',
            time: '1일 전',
            isRead: true
        },
        {
            id: '4',
            type: 'system',
            title: '새로운 기능이 추가되었습니다',
            message: '이제 공고를 필터링할 수 있어요',
            time: '2일 전',
            isRead: true
        }
    ];
    const filteredNotifications = filter === 'all' ? notifications : notifications.filter((n)=>n.type === filter);
    const filters = [
        {
            id: 'all',
            label: '전체'
        },
        {
            id: 'jobs',
            label: '공고'
        },
        {
            id: 'products',
            label: '상품'
        },
        {
            id: 'system',
            label: '시스템'
        }
    ];
    const getIcon = (type)=>{
        switch(type){
            case 'job':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                    className: "h-5 w-5 text-primary"
                }, void 0, false, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                    lineNumber: 72,
                    columnNumber: 16
                }, this);
            case 'product':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                    className: "h-5 w-5 text-accent-foreground"
                }, void 0, false, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                    lineNumber: 74,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BellIcon$3e$__["BellIcon"], {
                    className: "h-5 w-5 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                    lineNumber: 76,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "px-4 py-6 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold",
                        children: "알림"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        children: "모두 읽음"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: filters.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: filter === f.id ? 'default' : 'outline',
                        className: "px-4 py-2 cursor-pointer",
                        onClick: ()=>setFilter(f.id),
                        children: f.label
                    }, f.id, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: filteredNotifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: `cursor-pointer transition-colors ${!notification.isRead ? 'bg-primary/5 border-primary/20' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0 mt-1",
                                        children: getIcon(notification.type)
                                    }, void 0, false, {
                                        fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-medium text-sm",
                                                        children: notification.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this),
                                                    !notification.isRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-shrink-0 h-2 w-2 bg-primary rounded-full mt-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground mb-1",
                                                children: notification.message
                                            }, void 0, false, {
                                                fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-muted-foreground",
                                                children: notification.time
                                            }, void 0, false, {
                                                fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    }, notification.id, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(NotificationsScreen, "W/UjwQokI5qYZ80z+yO8skpbfNg=");
_c = NotificationsScreen;
var _c;
__turbopack_context__.k.register(_c, "NotificationsScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductsScreen",
    ()=>ProductsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/product-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/badge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function ProductsScreen() {
    _s();
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('popular');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const categories = [
        '전체',
        '노트북',
        '키보드',
        '마우스',
        '모니터',
        '의자'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "px-4 py-6 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        placeholder: "상품명으로 검색...",
                        className: "pl-10 pr-12 h-12 rounded-xl"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "absolute right-1 top-1/2 -translate-y-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 overflow-x-auto pb-2 scrollbar-hide",
                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: category === cat.toLowerCase() ? 'default' : 'outline',
                        className: "px-4 py-2 cursor-pointer whitespace-nowrap",
                        onClick: ()=>setCategory(cat.toLowerCase()),
                        children: cat
                    }, cat, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: sortBy === 'popular' ? 'default' : 'outline',
                        size: "sm",
                        onClick: ()=>setSortBy('popular'),
                        children: "인기순"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: sortBy === 'new' ? 'default' : 'outline',
                        size: "sm",
                        onClick: ()=>setSortBy('new'),
                        children: "신규순"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: sortBy === 'price' ? 'default' : 'outline',
                        size: "sm",
                        onClick: ()=>setSortBy('price'),
                        children: "가격순"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                        name: "맥북 프로 M3 Max",
                        price: "350만원",
                        rating: 4.8,
                        image: "/macbook-pro-on-desk.png",
                        isNew: true
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                        name: "LG 그램 16인치",
                        price: "180만원",
                        rating: 4.5,
                        image: "/lg-gram-laptop.jpg"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                        name: "매직 키보드",
                        price: "17만원",
                        rating: 4.7,
                        image: "/magic-keyboard.jpg"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                        name: "허먼밀러 에어론",
                        price: "189만원",
                        rating: 4.9,
                        image: "/herman-miller-aeron.png",
                        isPopular: true
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                        name: "로지텍 MX Master",
                        price: "12만원",
                        rating: 4.6,
                        image: "/logitech-mx-master-mouse.jpg"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                        name: "LG 울트라와이드",
                        price: "65만원",
                        rating: 4.5,
                        image: "/lg-ultrawide-monitor.jpg"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(ProductsScreen, "K4m/3GMPOU9cSJ8y6Tf2vZs6T1s=");
_c = ProductsScreen;
var _c;
__turbopack_context__.k.register(_c, "ProductsScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeScreen",
    ()=>HomeScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/bottom-nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$favorites$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/favorites-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$job$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/job-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$jobs$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/jobs-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$notifications$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/notifications-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/product-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$products$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/products-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/devlop/app-and-web-ui-ux/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function HomeScreen() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('jobs');
    const renderContent = ()=>{
        switch(activeTab){
            case 'jobs':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$jobs$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JobsScreen"], {}, void 0, false, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                    lineNumber: 24,
                    columnNumber: 16
                }, this);
            case 'products':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$products$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductsScreen"], {}, void 0, false, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                    lineNumber: 26,
                    columnNumber: 16
                }, this);
            case 'favorites':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$favorites$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FavoritesScreen"], {}, void 0, false, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                    lineNumber: 28,
                    columnNumber: 16
                }, this);
            case 'notifications':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$notifications$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationsScreen"], {}, void 0, false, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                    lineNumber: 30,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeContent, {}, void 0, false, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                    lineNumber: 32,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-8 w-8 rounded-lg bg-primary flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                        className: "h-5 w-5 text-primary-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-lg",
                                    children: "JobHub"
                                }, void 0, false, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            renderContent(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$bottom$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomNav"], {
                activeTab: activeTab,
                onTabChange: setActiveTab
            }, void 0, false, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(HomeScreen, "6rIxKkReyMFc3ShmDXljHDX6rxE=");
_c = HomeScreen;
function HomeContent() {
    _s1();
    const [featuredJobs, setFeaturedJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [totalJobs, setTotalJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeContent.useEffect": ()=>{
            const fetchFeaturedJobs = {
                "HomeContent.useEffect.fetchFeaturedJobs": async ()=>{
                    try {
                        setLoading(true);
                        const response = await fetch('/api/jobs');
                        if (!response.ok) {
                            throw new Error('데이터를 가져오는데 실패했습니다.');
                        }
                        const data = await response.json();
                        setTotalJobs(data.length);
                        // 최신 3개만 가져오기
                        setFeaturedJobs(data.slice(0, 3));
                    } catch (err) {
                        console.error('Error fetching featured jobs:', err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["HomeContent.useEffect.fetchFeaturedJobs"];
            fetchFeaturedJobs();
        }
    }["HomeContent.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "px-4 py-6 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-balance",
                        children: "안녕하세요, 지수님"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: [
                            "오늘의 추천 공고가 ",
                            totalJobs,
                            "건 있어요"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        placeholder: "직무, 학교명으로 검색...",
                        className: "pl-10 h-12 rounded-xl"
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "h-4 w-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "신규 공고"
                                        }, void 0, false, {
                                            fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold",
                                    children: totalJobs
                                }, void 0, false, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "h-4 w-4 text-accent-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "전체 공고"
                                        }, void 0, false, {
                                            fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl font-bold",
                                    children: totalJobs
                                }, void 0, false, {
                                    fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: "오늘의 추천"
                            }, void 0, false, {
                                fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                children: "전체보기"
                            }, void 0, false, {
                                fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "데이터를 불러오는 중..."
                        }, void 0, false, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this) : featuredJobs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "등록된 공고가 없습니다."
                        }, void 0, false, {
                            fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: featuredJobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$job$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JobCard"], {
                                job: job
                            }, job.id, false, {
                                fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: "추천 상품"
                            }, void 0, false, {
                                fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                children: "더보기"
                            }, void 0, false, {
                                fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                name: "맥북 프로 M3 Max",
                                price: "350만원",
                                rating: 4.8,
                                image: "/macbook-pro-on-desk.png",
                                isNew: true
                            }, void 0, false, {
                                fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$devlop$2f$app$2d$and$2d$web$2d$ui$2d$ux$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                name: "LG 그램 16인치",
                                price: "180만원",
                                rating: 4.5,
                                image: "/lg-gram-laptop.jpg"
                            }, void 0, false, {
                                fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/devlop/app-and-web-ui-ux/components/home-screen.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s1(HomeContent, "pF2IriiuSjcudR8huucEFxijO9s=");
_c1 = HomeContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "HomeScreen");
__turbopack_context__.k.register(_c1, "HomeContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=devlop_app-and-web-ui-ux_6d915f83._.js.map