module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "previewHead": (head) => (`
    ${head}
    <style>
    /* Color variables */
    :root{
      --main-bg-color:#0d1117;
      --header-bg-color:#161b22;
      --separator-bg-color:#21262d;
      --main-text-color:#f0f6fc;
      --secondary-text-color:#7c858e;
    }
    /* Spline Sans Mono font  */
    @import url('https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:wght@400;600&display=swap');
    
    body {
      background-color: var(--main-bg-color);
      color:var(--main-text-color);
      font-family: 'Spline Sans Mono', monospace;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    header{
      background-color: var(--header-bg-color);
      padding:1em;
    }
    header img{
      margin:0 auto;
    }
    
    
    /* GLOBAL CLASSES */
    
    .grayText{
      color:var(--secondary-text-color)
    }
    </style>
  `),
}