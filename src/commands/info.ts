module.exports = {
  alias: ['i'],
  description: 'My Personal Information',
  run: async (toolbox) => {
    const { info } = toolbox
    info()
  },
}
