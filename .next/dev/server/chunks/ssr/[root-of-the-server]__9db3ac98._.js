module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/Manipal CLG/Project/Antigravity/Portfolio/src/components/ui/CustomCursor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Manipal CLG/Project/Antigravity/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Manipal CLG/Project/Antigravity/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Manipal CLG/Project/Antigravity/Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Manipal CLG/Project/Antigravity/Portfolio/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function CustomCursor({ enabled = true }) {
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const cursorX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const cursorY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const [zoomScale, setZoomScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateZoom = ()=>{
            // Detect browser zoom level (rough estimation)
            // On most browsers, px units scale with zoom, so we inverse scale to keep physical size
            const dpr = window.devicePixelRatio || 1;
            // We assume the initial DPR is the 'normal' size. 
            // This is hit-or-miss but a standard approach for persistent physical size.
            setZoomScale(1 / (dpr / (window.devicePixelRatio || 1))); // This is a bit circular
            // More robust: compare innerWidth to a fixed reference if possible
            // For now, let's use a dynamic calculation
            // A common trick for zoom level is:
            const zoom = Math.round(window.outerWidth / window.innerWidth * 100) / 100;
            if (zoom > 0) setZoomScale(1 / zoom);
        };
        window.addEventListener("resize", updateZoom);
        updateZoom();
        return ()=>window.removeEventListener("resize", updateZoom);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
        if (!enabled) return;
        const moveCursor = (e)=>{
            cursorX.set(e.clientX - 6);
            cursorY.set(e.clientY - 6);
            if (!isVisible) setIsVisible(true);
        };
        const handleMouseOver = (e)=>{
            const target = e.target;
            if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button") || target.classList.contains("hover-glow")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };
        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        document.body.classList.add("custom-cursor-active");
        return ()=>{
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            document.body.classList.remove("custom-cursor-active");
        };
    }, [
        enabled,
        cursorX,
        cursorY,
        isVisible
    ]);
    if (!isMounted || !enabled) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "pixel-cursor",
        transition: {
            type: "spring",
            stiffness: 1000,
            damping: 50,
            mass: 0.1
        },
        style: {
            x: cursorX,
            y: cursorY,
            opacity: isVisible ? 1 : 0,
            scale: (isHovering ? 1.5 : 1) * zoomScale,
            rotate: isHovering ? 45 : 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Manipal__CLG$2f$Project$2f$Antigravity$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pixel-cursor-dot"
        }, void 0, false, {
            fileName: "[project]/Desktop/Manipal CLG/Project/Antigravity/Portfolio/src/components/ui/CustomCursor.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Manipal CLG/Project/Antigravity/Portfolio/src/components/ui/CustomCursor.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9db3ac98._.js.map