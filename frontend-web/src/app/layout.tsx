import StyledComponentsRegistry from '@/lib/registry'
import QueryClientContext from '@/context/queryClientProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <QueryClientContext>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </QueryClientContext>
      </body>
    </html>
  )
}