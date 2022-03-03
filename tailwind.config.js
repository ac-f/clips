module.exports = {
  purge:{
    content: [
      "./src/**/*.{html,ts}",
    ],
    options:{
      safelist:['bg-blue-400','bg-green-400','bg-red-400']
    }
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
