import AiNoticeBadge from '@/components/AiNoticeBadge'

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AiNoticeBadge />
      {children}
    </>
  )
}
