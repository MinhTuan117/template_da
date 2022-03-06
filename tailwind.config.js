module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      boxShadow: {
        '1': '0 0 30px rgba(0, 0, 0, 0.1);',
      },
      padding : {
        '64': '64px 0;',
        '100': '100%'
      },
     
    },
  },
  plugins: [],
}