export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    "en-US": {
      welcome: "What do you want to do today?",
      home: "home",
      about: "about",
      aboutTitle: "About",
      noTodos: "Nothing to do, let's relax!",
      aboutTextOne:
        "Welcome to my project to create a todo management app using Nuxt JS and Pinia.",
      aboutTextTwo:
        "I used Tailwind CSS for the styling and I18N for localization features.",
      aboutTextThree: "Thank you for viewing my project!",
    },
    "ja-JP": {
      welcome: "今日何しようか",
      home: "ホーム",
      about: "情報",
      aboutTitle: "情報",
      noTodos: "お疲れ様です",
      aboutTextOne: "Nuxt JSとPiniaを使用してToDo管理アプリへようこそ。",
      aboutTextTwo:
        "スタイリングにはTailwind CSSを使用し、ローカリゼーション機能にはI18Nを使用しました。",
      aboutTextThree: "私のプロジェクトをご覧いただきありがとうございます！",
    },
  },
}))
