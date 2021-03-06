const {app, Menu, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

// Create Window
function createWindow () {
  win = new BrowserWindow({
    width: 900,
    height: 600,
    thick: false
  })

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'src/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})


// Create Menu

const template = [
  {
    label: 'Options',
    submenu: [
    {
        label: 'Reload',
        role: 'reload'
    },
    {
      label: 'Something',
      click: () => {
        console.log('Something happend!');
     }   
    },
    {
      type: 'separator'
    },
    {
        label: 'Exit',
        click: () => {
          app.quit();
      }
    }
  ]
  },
  {
    label: 'Info',
    submenu: [
      {
        label: 'Repository',
        click: () => {
          require('electron').shell.openExternal('https://github.com/carlosteixeiraa/stralls')
        }  
      },
      {
        label: 'Issues',
        click: () => {
          require('electron').shell.openExternal('https://github.com/carlosteixeiraa/stralls/issues')          
        }  
      },
      {
        label: 'Author',
        click: () => {
          require('electron').shell.openExternal('https://carlosteixeiraa.github.io')
        }  
      }
    ]
  }
]