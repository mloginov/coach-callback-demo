window.codioIDE.coachBot.register('customButton1', 'More...', () => {
  window.codioIDE.coachBot.showButton('react hook docs', async () => {
    const context = await window.codioIDE.coachBot.getContext()
    console.log('coach bot context', context)
    const input = await window.codioIDE.coachBot.input('please type hook name')
    window.codioIDE.coachBot.ask({userPrompt: input, systemPrompt: 'get react hook docs for user provided hook'})
  })
  window.codioIDE.coachBot.showButton('react hook docs not stream', async () => {
    window.codioIDE.coachBot.write('see result in dev console')
    const input = await window.codioIDE.coachBot.input('please type hook name')
    const data = await window.codioIDE.coachBot.ask({
      userPrompt: input,
      systemPrompt: 'get react hook docs for user provided hook'
    }, {stream: false})
    console.log('not stream coach responce', data)
  })
})

window.codioIDE.menu.addItem(
  {id: 'education'},
  {id: 'customId1', title: 'Open coach(call custom)', callback: () => {
    window.codioIDE.coachBot.open({id: 'customButton1'})
  }}
)

window.codioIDE.menu.addItem(
  {id: 'education'},
  {id: 'customId2', title: 'call custom coach action', callback: () => {
    window.codioIDE.coachBot.call({id: 'customButton1'})
  }}
)

window.codioIDE.menu.addItem(
  {id: 'education'},
  {id: 'customId3', title: 'Close coach', callback: () => {
    window.codioIDE.coachBot.close()
  }}
)

window.codioIDE.menu.addItem(
  {id: 'education'},
  {id: 'customId4', title: 'show coach tooltip', callback: () => {
    window.codioIDE.coachBot.showTooltip('click me to call custom action', () => {
      window.codioIDE.coachBot.call({id: 'customButton1'})
    })
  }}
)

window.codioIDE.menu.addItem(
  {id: 'education'},
  {id: 'customId5', title: 'hide coach tooltip', callback: () => {
    window.codioIDE.coachBot.hideTooltip()
  }}
)

window.codioIDE.menu.addItem(
  {id: 'education'},
  {id: 'customId6', title: 'deregister custom action', callback: () => {
    window.codioIDE.coachBot.deregister('customButton1')
  }}
)
