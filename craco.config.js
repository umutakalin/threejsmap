module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Disable source maps for MediaPipe packages by modifying the source-map-loader rule
      if (webpackConfig.module && webpackConfig.module.rules) {
        // Find the existing source-map-loader rule
        const sourceMapRuleIndex = webpackConfig.module.rules.findIndex(
          rule => rule.enforce === 'pre' && rule.use && 
          rule.use.some(use => use.loader && use.loader.includes('source-map-loader'))
        );
        
        if (sourceMapRuleIndex !== -1) {
          const sourceMapRule = webpackConfig.module.rules[sourceMapRuleIndex];
          
          // Add exclude pattern for MediaPipe
          if (!sourceMapRule.exclude) {
            sourceMapRule.exclude = [];
          }
          sourceMapRule.exclude.push(/node_modules\/@mediapipe/);
          
          // Also modify the filterSourceMappingUrl function if it exists
          if (sourceMapRule.use && Array.isArray(sourceMapRule.use)) {
            sourceMapRule.use.forEach(useConfig => {
              if (useConfig.loader && useConfig.loader.includes('source-map-loader')) {
                if (!useConfig.options) {
                  useConfig.options = {};
                }
                useConfig.options.filterSourceMappingUrl = (url, resourcePath) => {
                  if (resourcePath.includes('@mediapipe')) {
                    return false;
                  }
                  return true;
                };
              }
            });
          }
        }
      }

      return webpackConfig;
    },
  },
}; 