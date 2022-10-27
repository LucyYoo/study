//자동완성 코드에 사용되는 queue 구현
class queueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new queueNode(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
}

// class Queue {
//   constructor() {
//     this.queue = [];
//     this.front = 0;
//     this.rear = 0;
//   }

//   enqueue(value) {
//     this.queue[this.rear++] = value;
//   }

//   dequeue() {
//     const value = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front += 1;
//     return value;
//   }

//   size() {
//     return this.rear - this.front;
//   }
// }

//Node 구현
class trieNode {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
    this.isFinal = false;
  }
}

//Trie 구현
class Trie {
  constructor() {
    this.root = new trieNode();
  }

  //Trie에 단어 넣기
  insert(string) {
    let currentNode = this.root;

    if (typeof string !== "string") {
      return null;
    }

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new trieNode(currentNode.value + char));
      }

      currentNode = currentNode.children.get(char);
    }

    currentNode.isFinal = true;
  }

  //해당 단어가 존재하는지 확인
  //   find(string) {
  //     let currentNode = this.root;

  //     if (typeof string !== "string") {
  //       return null;
  //     }

  //     for (const char of string) {
  //       if (!currentNode.children.has(char)) {
  //         return false;
  //       }
  //       currentNode = currentNode.children.get(char);
  //     }

  //     return true;
  //   }

  //단어 자동완성
  recommendWord(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        throw new error("추천 검색어가 없습니다.");
      }

      currentNode = currentNode.children.get(char);
    }

    const queue = new Queue();
    const wordList = [];
    queue.enqueue(currentNode);

    while (queue.size > 0) {
      let popNode = queue.dequeue();

      if (popNode.isFinal) {
        wordList.push(popNode.value);
      }

      popNode.children.forEach((value) => {
        queue.enqueue(value);
      });
    }
    console.log(wordList);
    return;
  }
}

const trie = new Trie();

trie.insert("string");
trie.insert("str");
trie.insert("stress");
trie.insert("star");
trie.insert("singer");
trie.insert("sign");
trie.insert("starcraft");
trie.insert("southKorea");
trie.insert("south korea");
// trie.recommendWord("soo"); //추천 검색어가 없습니다.
trie.recommendWord("st"); //[ 'str', 'star', 'string', 'stress', 'starcraft' ]
trie.recommendWord("star"); //[ 'star', 'starcraft' ]
trie.recommendWord("south"); //[ 'southKorea', 'south korea' ]
