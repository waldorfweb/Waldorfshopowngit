const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const pluginSetUrl = "http://www.waldorfshop.eu";
const pluginPath = "waldorfshop";

module.exports = env =>
{
    env = env || {};
    return {
        name: "styles",
        mode: env.prod ? "production" : "development",
        entry: {
            base        : "./resources/scss/base.scss",
            checkout    : "./resources/scss/checkout.scss",
            icons       : "./resources/scss/icons.scss",
            shopbuilder : "./resources/scss/shopbuilder.scss"
        },
        module: {
            rules: [
                {
                    test: /.\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                                sourceMap: !env.prod
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: !env.prod,
                                plugins: [
                                    require("autoprefixer")()
                                ]
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: !env.prod,
                                outputStyle: env.prod ? "compressed" : "nested"
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new FixStyleOnlyEntriesPlugin(),
            new MiniCssExtractPlugin({
                filename: "../../css/dia/ceres-[name]" + (env.prod ? ".min" : "") + ".css",
            }),
            new BrowserSyncPlugin({
                // Enter the remote URL of the plugin on your plentymarkets system
                proxy: pluginSetUrl,

                // Directories to watch for changes
                // The browser refreshes whenever a file in this directory is changed
                files: [
                    "resources/js/**",
                    "resources/css/**"
                ],

                // Add rewrite rules for CSS and JS
                // This will make it look for CSS and JS files in the plugin directory
                rewriteRules: [
                    {
                        match: new RegExp("http.*\\/"+ pluginPath +"\\/js\\/(.*.js)", 'g'),
                        replace: "/resources/js/$1"
                    },
                    {
                        match: new RegExp('http.*\\/'+ pluginPath +'\\/css\\/(.*.css)', 'g'),
                        replace: "/resources/css/$1"
                    }
                ],

                // Instruct Browsersync to provide static resources for JS and CSS files
                // This way, your browser will load the local resources instead of remote ones
                serveStatic: [
                    {
                        route: ["/resources/js"],
                        dir: "resources/js"
                    },
                    {
                        route: ["/resources/css"],
                        dir: "resources/css"
                    },
                    {
                        route: ["/resources/scss"],
                        dir: "resources/scss"
                    },
                    {
                        route: ["/resources/fonts"],
                        dir: "resources/fonts"
                    },
                    {
                        route: ["/resources/documents"],
                        dir: "resources/documents"
                    },
                    {
                        route: ["/resources/images"],
                        dir: "resources/images"
                    }
                ]
            })
        ],
        output: {
            path: path.resolve(__dirname, "../../resources/js/dist")
        }
    };
};
