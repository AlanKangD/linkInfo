'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Send, Trash2, RefreshCw, CheckCircle2, XCircle } from 'lucide-react'

interface FCMToken {
  id: number
  token: string
  platform: string
  user_id: string | null
  is_active: number
  last_used_at: string | null
  created_at: string
}

interface SendResult {
  success: boolean
  message: string
  data?: {
    results: Array<{
      token: string
      success: boolean
      message_id?: string
      error?: string
    }>
    success_count: number
    fail_count: number
  }
}

export default function FCMAdminPage() {
  const [tokens, setTokens] = useState<FCMToken[]>([])
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [sendResult, setSendResult] = useState<SendResult | null>(null)

  // 전송 폼 상태
  const [selectedToken, setSelectedToken] = useState<string>('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [dataUrl, setDataUrl] = useState('')

  const fetchTokens = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/fcm/tokens?is_active=1')
      const result = await response.json()
      if (result.success) {
        setTokens(result.data || [])
      }
    } catch (error) {
      console.error('토큰 조회 실패:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTokens()
  }, [])

  const handleSend = async () => {
    if (!selectedToken || !title || !body) {
      alert('토큰, 제목, 내용을 모두 입력해주세요.')
      return
    }

    try {
      setSending(true)
      setSendResult(null)

      const data: Record<string, string> = {}
      if (dataUrl) {
        data.url = dataUrl
      }

      const response = await fetch('/api/fcm/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: selectedToken,
          title,
          body,
          data,
        }),
      })

      const result: SendResult = await response.json()
      setSendResult(result)

      if (result.success) {
        // 전송 성공 시 토큰 목록 새로고침
        fetchTokens()
      }
    } catch (error) {
      console.error('전송 실패:', error)
      setSendResult({
        success: false,
        message: error instanceof Error ? error.message : '전송 실패',
      })
    } finally {
      setSending(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('정말 이 토큰을 삭제하시겠습니까?')) {
      return
    }

    try {
      const response = await fetch(`/api/fcm/token/${id}`, {
        method: 'DELETE',
      })

      const result = await response.json()
      if (result.success) {
        fetchTokens()
      } else {
        alert('삭제 실패: ' + result.error)
      }
    } catch (error) {
      console.error('삭제 실패:', error)
      alert('삭제 중 오류가 발생했습니다.')
    }
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">FCM 푸시 알림 테스트</h1>
          <Button onClick={fetchTokens} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            새로고침
          </Button>
        </div>

        {/* 전송 폼 */}
        <Card>
          <CardHeader>
            <CardTitle>푸시 알림 전송</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">토큰 선택</label>
              <select
                value={selectedToken}
                onChange={(e) => setSelectedToken(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">토큰을 선택하세요</option>
                {tokens.map((token) => (
                  <option key={token.id} value={token.token}>
                    {token.platform} - {token.user_id} ({token.token.substring(0, 20)}...)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">제목</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="알림 제목을 입력하세요"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">내용</label>
              <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="알림 내용을 입력하세요"
                rows={3}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">이동할 URL (선택사항)</label>
              <Input
                value={dataUrl}
                onChange={(e) => setDataUrl(e.target.value)}
                placeholder="/jobs 또는 https://example.com"
              />
            </div>

            <Button
              onClick={handleSend}
              disabled={sending || !selectedToken || !title || !body}
              className="w-full"
            >
              {sending ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  전송 중...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  푸시 알림 전송
                </>
              )}
            </Button>

            {sendResult && (
              <div
                className={`p-4 rounded-lg ${
                  sendResult.success
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-red-50 border border-red-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {sendResult.success ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className="font-semibold">
                    {sendResult.success ? '전송 성공' : '전송 실패'}
                  </span>
                </div>
                <p className="text-sm">{sendResult.message}</p>
                {sendResult.data && (
                  <div className="mt-2 text-sm">
                    <p>성공: {sendResult.data.success_count}건</p>
                    <p>실패: {sendResult.data.fail_count}건</p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* 토큰 목록 */}
        <Card>
          <CardHeader>
            <CardTitle>저장된 FCM 토큰 목록 ({tokens.length}개)</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-muted-foreground">로딩 중...</div>
            ) : tokens.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                저장된 토큰이 없습니다.
              </div>
            ) : (
              <div className="space-y-3">
                {tokens.map((token) => (
                  <div
                    key={token.id}
                    className="p-4 border rounded-lg flex items-start justify-between gap-4"
                  >
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{token.platform}</Badge>
                        {token.is_active ? (
                          <Badge className="bg-green-100 text-green-700">활성</Badge>
                        ) : (
                          <Badge variant="secondary">비활성</Badge>
                        )}
                        {token.user_id && (
                          <Badge variant="outline">{token.user_id}</Badge>
                        )}
                      </div>
                      <p className="text-sm font-mono text-muted-foreground break-all">
                        {token.token}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        생성: {new Date(token.created_at).toLocaleString('ko-KR')}
                        {token.last_used_at &&
                          ` | 사용: ${new Date(token.last_used_at).toLocaleString('ko-KR')}`}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(token.id)}
                      className="shrink-0"
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

