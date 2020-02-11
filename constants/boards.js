const questions = {
  arrayMethods: [
    [
      'This property tells you how many elements are in an array.',
      'What is length?'
    ],
    [
      'This array method lets you add an element to the end of an array by mutating it.',
      'What is the push method?'
    ],
    [
      'This array method lets you search for a single element that fulfills some criteria.',
      'What is the find method?'
    ],
    [
      'This array method always transforms an array into a new same-length array via a transforming function.',
      'What is the map method?'
    ],
    [
      'This array method lets you transform an array into any new kind of data structure.',
      'What is the reduce method?'
    ]
  ],
  funkyJS: [
    ["This is the result of `'a'+1`.", 'What is a1?'],
    ['This is the result of `Boolean([])`', 'What is True?'],
    ['This is the result of `typeof NaN`.', 'What is a number?'],
    ["This is the result of `'a'-1`.", 'What is NaN?'],
    ['Adding two empty arrays evaluates in this.', "'' (empty string)"]
  ],
  jsHistory: [
    [
      'This library, made by Facebook, is the most used frontend framework.',
      'What is React?'
    ],
    [
      'This version of JavaScript introduced const, let, fat-arrow functions and more.',
      'What is ES2015 or ES6?'
    ],
    [
      'The ES6 Class syntax is built on top of this kind of inheritance.',
      'What is prototypal inheritance?'
    ],
    [
      'It took Brendan Eich this many days to develop the first version of JavaScript',
      'How long is 10 days?'
    ],
    [
      'This library made around mid 2000s gave rise to AJAX and was the first step to having single-page applications.',
      'What is jQuery?'
    ]
  ],
  html5: [
    [
      'This tag must be the outermost tag for a valid HTML file',
      'What is <html>?'
    ],
    [
      'This tag represents any generic container and is normally used to group other tags.',
      'What is <div>?'
    ],
    [
      'You will generally find <link> and <script> tags located here.',
      'What is <head>?'
    ],
    [
      'This tag normally goes next to an input to describe it.',
      'What is <label>?'
    ],
    [
      'Putting this attribute on a <script> tag will make it execute after all the html is loaded.',
      'What is the defer attribute?'
    ]
  ],
  css: [
    [
      'This display style will let you magically center things.',
      'What is flex?'
    ],
    [
      "This css property allows you to remove an anchor tag's (<a>) underline.",
      'What is text-decoration?'
    ],
    [
      'This box-sizing value, shown by prof, lets browsers calculate percentages nicely',
      'What is border-box?'
    ],
    ['This is what CSS stands for.', 'What is Cascading Style Sheets?'],
    [
      'This is the highest specificity you can have on a css rule',
      'What is !important or 1-0-0-0-0'
    ]
  ],
  entryJSX: [
    [
      'This is the name for a cross between HTML and JavaScript',
      'What is JSX?'
    ],
    [
      'These symbols allow you to break into JavaScript world',
      'What are `{` and `}` or moustaches?'
    ],
    ['This tag replaces <a> tags for navigation.', 'What is a <Link> tag?'],
    [
      'This class method will fire only ONCE right after the first render',
      'What is ComponentDidMount method?'
    ],
    ['This library lets you write JSX', 'What is babel?']
  ]
}
module.exports = {
  'flex-immersive-0': {
    categories: [
      {
        title: 'Arrays',
        questions: questions.arrayMethods
      },
      {
        title: 'JS Funk',
        questions: questions.funkyJS
      },
      {
        title: 'AP JS History',
        questions: questions.jsHistory
      },
      {
        title: 'HowToMakeLaughs5',
        questions: questions.html5
      },
      {
        title: "Stylin'",
        questions: questions.css
      }
    ]
  },
  'flex-immersive-1': {
    categories: [
      {
        title: 'Arrays',
        questions: questions.arrayMethods
      },
      {
        title: 'JS Funk',
        questions: questions.funkyJS
      },
      {
        title: 'AP JS History',
        questions: questions.jsHistory
      },
      {
        title: 'HowToMakeLaughs5',
        questions: questions.html5
      },
      {
        title: "Stylin'",
        questions: questions.css
      },
      {
        title: 'JSWHAT?',
        questions: questions.entryJSX
      }
    ]
  }
}
