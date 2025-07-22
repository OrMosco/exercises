const prompt = require('prompt-sync')()




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

console.log("=== AutoComplete Trie Console ===")
console.log("Type 'help' for commands")

const trie = new AutoCompleteTrie(null)

while (true) {
  const input = prompt('> ').trim()

  if (input === 'exit') {
    console.log("Goodbye!")
    break
  }
  if (input.startsWith('add ')) {
    const word = input.slice(4).trim()
    if (word) {
      trie.addWord(word.toLowerCase())  // שים לב שאפשר גם להוריד ל-lowercase
      console.log(`✓ Added '${word}' to dictionary`)
    } else {
      console.log("✗ Please provide a word to add")
    }
    continue
  }
  if (input.startsWith('find ')) {
    const word = input.slice(5).trim()
    if (word) {
      const found = trie.findWord(word.toLowerCase())
      if (found) {
        console.log(`✓ '${word}' exists in dictionary`)
      } else {
        console.log(`✗ '${word}' not found in dictionary`)
      }
    } else {
      console.log("✗ Please provide a word to find")
    }
    continue
  }
  if (input.startsWith('complete ')) {
    const prefix = input.slice(9).trim()
    if (prefix) {
      const results = trie.predictWords(prefix.toLowerCase())
      if (results.length > 0) {
        console.log(`Suggestions for '${prefix}': ${results.join(', ')}`)
      } else {
        console.log(`✗ No suggestions found for '${prefix}'`)
      }
    } else {
      console.log("✗ Please provide a prefix")
    }
    continue
  }
  if (input === 'help') {
    console.log("Commands:")
    console.log("  add <word>        - Add word to dictionary")
    console.log("  find <word>       - Check if word exists")
    console.log("  complete <prefix> - Get completions")
    console.log("  help              - Show this message")
    console.log("  exit              - Quit program")
    continue
  }

  // ניתוח פקודות נכניס כאן בהמשך
}
