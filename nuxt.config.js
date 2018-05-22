module.exports = {
    head: {
        title: "羽叶のBlog",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content:
                    "initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
            },
            {
                name: "description",
                content:
                    "轻技术 重生活 个人博客 这是一个记录博主学习和成长的一个自媒体博客"
            },
            {
                name: "renderer",
                content: "webkit"
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "stylesheet", href: "/css/reset.css" },
            { rel: "stylesheet", href: "/css/iconfont.css" }
        ]
    },
    css: [
        // 加载一个 过渡 效果
        "~assets/css/transition.css"
    ],
    loading: { color: "#3cafff" },

    plugins: [
        { src: "~plugins/main", ssr: true },
        { src: "~plugins/pv", ssr: false },
        { src: "~plugins/utils", ssr: false }
    ],
    build: {
        // publicPath: "//static.yuyehack.cn/blog/"
    }
};
