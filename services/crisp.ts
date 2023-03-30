declare const window: any

export function crispLoader() {
  if (!window.$crisp) {
    // console.log('Load Crips')
    window.$crisp = []
    window.CRISP_WEBSITE_ID = '1f5d5a70-2622-4536-a454-996394feeaad'

    const d = document
    const s = d.createElement('script')

    s.src = 'https://client.crisp.chat/l.js'
    s.async = true
    d.getElementsByTagName('head')[0].appendChild(s)

    // Hide the Crisp widget
    window.$crisp.push(['safe', true],
      ['do', 'chat:hide'],
      [
        'on',
        'chat:closed',
        () => {
          window.$crisp.push(['do', 'chat:hide'])
        },
      ],
      [
        'on',
        'message:received',
        () => {
          window.$crisp.push(['do', 'chat:show'])
        },
      ])
  }
}

export function openMessenger() {
  crispLoader()
  window.$crisp.push(['do', 'chat:show'])
  window.$crisp.push(['do', 'chat:open'])
}
