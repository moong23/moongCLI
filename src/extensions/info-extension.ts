import { GluegunToolbox } from 'gluegun'

module.exports = async (toolbox: GluegunToolbox) => {
  toolbox.info = async () => {
    toolbox.print.success('Hello! Welcome to my CLI!')
    toolbox.print.highlight(
      "I'm a Frontend Developer specializing in Web Performance and Accessibility.\nRecently, I've developed an interest in Geospatial Data Visualization with large data sets."
    )
    const { table } = toolbox.print
    table(
      [
        ['Name', 'Moonki Kim'],
        ['Age', '26'],
        ['Location', 'Seoul, South Korea'],
        ['Email', 'moonki0623@naver.com'],
        ['GitHub', 'https://github.com/moong23'],
        ['LinkedIn', 'https://linkedin.com/in/moonki-kim'],
      ],
      {
        format: 'lean',
      }
    )
  }
}
