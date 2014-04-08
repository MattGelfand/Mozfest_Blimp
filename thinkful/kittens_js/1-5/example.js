var say_hello = function(name, formality) {
  if (formality == 'formal') {
    return 'why hello, ' + name
  } else {
    return "what's up " + name
  }
}

console.log(say_hello('jeff', 'casual'));