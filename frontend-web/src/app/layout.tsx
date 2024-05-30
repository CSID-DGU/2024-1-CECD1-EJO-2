import StyledComponentsRegistry from '@/lib/registry'
import QueryClientContext from '@/context/queryClientProvider'
import { GlobalStyle } from '@/style'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body style={{ boxSizing: 'border-box', margin: 0, padding: 0 }}>
        <QueryClientContext>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </QueryClientContext>
      </body>
    </html>
  )
}