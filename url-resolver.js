(function () {
    const isLocal = window.location.origin.includes("localhost") || window.location.origin.includes("127.0.0.1");
    const repoName = window.location.pathname.split('/')[1]; // Auto-detect repo name
    const baseHref = isLocal ? "/" : `/${repoName}/`;

    // Ensure <base> tag exists
    let baseTag = document.querySelector("base");
    if (!baseTag) {
        baseTag = document.createElement("base");
        document.head.prepend(baseTag);
    }
    baseTag.href = baseHref;

    console.log("Base href set to:", baseTag.href);
})();
