module.exports = {
  sass: {
    src: [
      './htdocs/scss/!(_)*'
    ],
    dest: './htdocs/css/',
    output: 'style.css',
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    minify: false
  }
};
