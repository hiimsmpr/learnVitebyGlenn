import { useMemo, useState } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Segmented } from 'antd'
import MuiShowcase from './components/MuiShowcase'
import AntdShowcase from './components/AntdShowcase'

export default function App() {
  const [library, setLibrary] = useState('mui')

  // MUI theme can be customized globally in one place.
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: { main: '#0b4a8b' },
          secondary: { main: '#6b1ea7' },
          success: { main: '#1f7a2e' }
        },
        shape: { borderRadius: 12 }
      }),
    []
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="layout">
        <header className="hero">
          <h1>Module 5: UI Styling Libraries</h1>
          <p>
            Switch between Material UI and Ant Design to see how each library helps you build faster.
          </p>
        </header>

        <section className="card shell">
          <label htmlFor="library-switch" className="label">
            Choose a library to preview
          </label>
          <Segmented
            id="library-switch"
            options={[
              { label: 'Material UI', value: 'mui' },
              { label: 'Ant Design', value: 'antd' }
            ]}
            value={library}
            onChange={setLibrary}
            style={{ marginBottom: 16 }}
          />

          {library === 'mui' ? <MuiShowcase /> : <AntdShowcase />}
        </section>
      </main>
    </ThemeProvider>
  )
}
