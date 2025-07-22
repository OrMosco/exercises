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

}
const root = new AutoCompleteTrie(null)
root.addWord("cat")
root.addWord("car")
root.addWord("card")

const node = root._getRemainingTree("ca", root) // מגיע לצומת של 'a'
const allWords = []
root._allWordsHelper("ca", node, allWords) // אוסף את ההשלמות

console.log(allWords) // אמור להדפיס: ["cat", "car", "card"]

