class AutoCompleteTrie {
  constructor(value) {
    this.value = value
    this.children = {}
    this.endOfWord = false
  }

  addWord(word) {
    let current = this
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new AutoCompleteTrie(char)
      }
      current = current.children[char]
    }
    current.endOfWord = true
  }

  findWord(word) {
    let current = this
    for (let char of word) {
      if (!current.children[char]) {
        return false
      }
      current = current.children[char]
    }
    return current.endOfWord
  }

  _getRemainingTree(prefix, node) {
    let current = node
    for (let char of prefix) {
      if (!current.children[char]) {
        return null
      }
      current = current.children[char]
    }
    return current
  }

  _allWordsHelper(prefix, node, allWords) {
  if (node.endOfWord) {
    allWords.push(prefix)
  }

  for (let char in node.children) {
    const child = node.children[char]
    this._allWordsHelper(prefix + char, child, allWords)
  }
}
    predictWords(prefix) {
    const node = this._getRemainingTree(prefix, this)
    if (!node) {
        return []
    }

    const allWords = []
    this._allWordsHelper(prefix, node, allWords)
    return allWords
}

}
const root = new AutoCompleteTrie(null)
root.addWord("cat")
root.addWord("car")
root.addWord("card")
root.addWord("dog")
root.addWord('cowboy')

console.log(root.predictWords("c")) // ➜ ["cat", "car", "card"]
console.log(root.predictWords("car")) // ➜ ["car", "card"]
console.log(root.predictWords("d")) // ➜ ["dog"]
console.log(root.predictWords("z")) // ➜ []
