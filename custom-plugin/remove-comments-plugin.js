class RemoveCommentsPlugin {
    apply(compiler) {
        compiler.hooks.emit.tap('RemoveCommentsPlugin', (compilation) => {
            // 遍历所有生成的文件
            for (const filename in compilation.assets) {
                if (filename.endsWith('.js')) {
                    // 读取文件内容
                    const content = compilation.assets[filename].source();
                    // 移除注释 
                    const withoutComments = content.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
                    // 替换原始文件内容
                    compilation.assets[filename] = {
                        source: () => withoutComments,
                        size: () => withoutComments.length
                    };  
                    }
                }
            }
        );
}
}

module.exports = RemoveCommentsPlugin;