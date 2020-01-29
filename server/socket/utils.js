const boardMaker = board => {
  return {
    ...board,
    categories: board.categories.map(category => ({
      ...category,
      questions: category.questions.map(question => ({
        question: question[0],
        answer: question[1],
        answered: false
      }))
    }))
  }
}

module.exports = {
  boardMaker
}
