module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            minify:
                process.env.NODE_ENV === 'production'
                    ? {
                          collapseWhitespace: true,
                          removeComments: true,
                          minifyJS: true,
                          minifyCSS: true
                      }
                    : {},
            title: '',
            projectVersion: '1.0.0'
        }
    },
    devServer: {
        disableHostCheck: true
        // proxy: {}
    },
    productionSourceMap: false
};
