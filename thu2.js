addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  // Tạo URL mới trỏ đến trang gốc
  const targetUrl = `https://win88slotlogin.com${url.pathname}${url.search}`

  // Proxy yêu cầu gốc và trả về cho client
  const response = await fetch(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body
  })

  // Trả về phản hồi từ máy chủ gốc
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  })
}
