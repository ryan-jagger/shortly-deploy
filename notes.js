concat:{
  js:{
    src:['public/client/**.js'],
    dest: 'test.js'
  }
}

uglify: {
  dist: {
    files:{
      'public/dist/ugly.min.js': ['public/dist/ugly.js']
    }
  }
}
